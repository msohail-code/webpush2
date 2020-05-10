<!DOCTYPE html>
<html>
<head>
	<title>Web Push</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
</head>
<body>
	<button onclick="subscribe()">Subscribe</button>
	
	<script type="text/javascript">
		addEventListener('load', async() => {
			let sw = await navigator.serviceWorker.register('./sw.js')
			console.log(sw)
		})

		async function subscribe() {
			let sw = await navigator.serviceWorker.ready;
			let push = await sw.pushManager.subscribe({
				userVisibleOnly: true,
				applicationServerKey: 'BPQ7OIIq95ouaprp2or9U-uCN4FrxaAXk42RFwEUX-HavJEeeLvmmhny3QFGVPQwJvrRSdDhXG4BKLCIDi6Ng7M'
			})
			console.log(JSON.stringify(push))
		}
	</script>
</body>
</html>
