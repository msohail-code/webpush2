var push = require('web-push');

let vapidKeys = {
	  publicKey: 'BPQ7OIIq95ouaprp2or9U-uCN4FrxaAXk42RFwEUX-HavJEeeLvmmhny3QFGVPQwJvrRSdDhXG4BKLCIDi6Ng7M',
	  privateKey: 'YQpuWHvhgj9IYpdYzyG0cDhaFNzYAcpYBo-sLe5hfso'
	}

push.setVapidDetails('mailto:test@localsite.com',vapidKeys.publicKey,vapidKeys.privateKey)

let sub = {"endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABetyLipXwPvvVp-xvws5KwtlhsR7wU7VPrrNYEvbVuVHd1t7h9K4tj-D1nhaEPSJugMB-X_sVeoqB0raAkf3SrRqxpznKNr-0KNsyHKgG1XVwdtKdVeD4KqHmx_uw9epYeqJfUJExzxUlfIh3cDyX6euZaGgK7z9WVppmvikofVBOvXNQ","keys":{"auth":"WKlWG1__GLnbCf9hqWhVRg","p256dh":"BMUw-bfl2mfD-lwkK5SwpKdCtI8u5DVw7BHEuK3zKwitgum5mPMgyznof7sz6KVrLRYUeRFzu1y6fg2d7MfKIhI"}}

push.sendNotification(sub, 'Test Message');