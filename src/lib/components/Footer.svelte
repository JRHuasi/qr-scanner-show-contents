<script>
</script>

<footer>
	<span class="footer__text">Desarrollado por</span>
	<a
		href="http://github.com/peerpiper/qrcode-scanner-svelte"
		class="footer__project-link"
		target="_blank"
		rel="noopener noreferrer"
	>
		TUCMA.COM
	</a>
</footer>

<style>
	footer {
		position: fixed;
		bottom: 0px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		margin-bottom: 0px;
		padding: 5px;		
		font-size: 0.8rem;
	}

	.footer__project-link {
		padding: 3px 7px;
		transition: background 200ms;

		text-decoration: none;

		color: white;
		border-radius: 8px;
		background-color: #161616;

		font-weight: 500;
	}

	.footer__project-link:hover {
		background-color: #06bd00;
	}

	.footer__text {
		margin-right: 5px;
	}
</style>
