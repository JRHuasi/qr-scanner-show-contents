<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import { stream, error, status } from '../stores.js';
	import { contenidos } from '../utils/datos';

	import jsQR from 'jsqr';

	import ScannerBorders from './ScannerBorders.svelte';
	import Results from './Results.svelte';

	import UserMedia from '../utils/use-usermedia.svelte';
	import { text } from 'svelte/internal';

	export let result = null; // : string
	export let stopMediaStream = null;
	let startMediaStream;
	let contenido = "";

	const dispatch = createEventDispatcher();

	$: active = !result;

	let video: HTMLVideoElement = null;
	let canvas: HTMLCanvasElement = null;
	let useUserMedia;
	let mounted;

	onMount(() => {
		mounted = true;

		({ stopMediaStream, startMediaStream } = useUserMedia());
		url = window.location.href;
		return () => {
			console.log('Component destroyed');
			stopMediaStream();
			video.srcObject = null;
		};
	});

	let url = ``;
	// $: elem = url.split("=");
	// $: console.log("elem",elem[1]);
	
	const mostrar = (uri: string) => {
		if(uri.includes('elem')) {
				console.log("incluye");
				const textoID = uri.split("=")[1];
				const texto = contenidos[textoID];
				console.log("texto}", contenidos[textoID]);
				stopMediaStream();
				dispatch('successfulScan', texto.texto);
				video.srcObject = null;
				result = texto.titulo;
				contenido = texto.texto;
			}else{
				console.log("NO incluye");
			}
	}
	$: mostrar(url);

	const startCapturing = (): void => {
		if (!canvas || !video) return;

		const context = canvas.getContext('2d');

		if (!context) return;

		const { width, height } = canvas;

		context.drawImage(video, 0, 0, width, height);

		const imageData = context.getImageData(0, 0, width, height);
		const qrCode = jsQR(imageData.data, width, height);

		if (qrCode === null) {
			console.log('timeout');
			setTimeout(startCapturing, 750);
		} else {
			// result = qrCode.data;
			// dispatch('successfulScan', qrCode.data);

			// stopMediaStream();
			// video.srcObject = null;
			// console.log("AAAAAAAAAAAAAA", qrCode.data)
			mostrar(qrCode.data);
		}
	};

	const handleCanPlay = (): void => {
		console.log('canplay');
		if (canvas === null || canvas === null || video === null || video === null) {
			return;
		}

		canvas.width = video.videoWidth;
		canvas.height = video.videoHeight;

		if ($error !== null) {
			// TODO: show dialog to user with an error
		} else {
			startCapturing();
		}
	};

	$: if ($status === 'resolved' && video !== null && $stream) {
		console.log('Resolve, stream');
		video.srcObject = $stream;
		video.play().catch(console.error);
	}

	$: if (active && $status === 'stopped' && startMediaStream) {
		startMediaStream();
	}
</script>

<UserMedia bind:useUserMedia />

<div class={`scanner ${active ? '' : 'scanner--hidden'}`}>
	<div class="scanner__aspect-ratio-container">
		<canvas bind:this={canvas} class="scanner__canvas" />
		<!-- svelte-ignore a11y-media-has-caption -->
		<video bind:this={video} on:canplay={handleCanPlay} class="scanner__video">
			<!-- <track kind="captions" /> -->
		</video>
		<ScannerBorders />
	</div>

	<div class="scanner-tip">
		<div>Escane?? el c??digo para ver la descripci??n</div>
	</div>
</div>

<slot {result} >
	<Results active={result !== null} decodedData={result} {contenido} onNewScan={() => (result = null)} />
</slot>

<style>
	.scanner {
		width: 100%;
		max-width: 500px;
	}

	.scanner--hidden {
		display: none;
	}

	.scanner__aspect-ratio-container {
		position: relative;

		overflow: hidden;

		padding-bottom: 100%;

		border-radius: 10%;
	}

	.scanner__video {
		position: absolute;
		top: 0;
		left: 0;

		width: 100%;
		height: 100%;

		border-radius: inherit;

		outline: none;
		object-fit: cover;
	}

	.scanner__canvas {
		display: none;
	}

	.scanner-tip {
		display: flex;
		justify-content: center;

		margin-top: 15px;

		font-size: 0.8rem;
	}
</style>
