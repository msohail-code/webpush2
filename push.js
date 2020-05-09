var push = require('web-push');

let vapidKeys = {
	  publicKey: 'BPQ7OIIq95ouaprp2or9U-uCN4FrxaAXk42RFwEUX-HavJEeeLvmmhny3QFGVPQwJvrRSdDhXG4BKLCIDi6Ng7M',
	  privateKey: 'YQpuWHvhgj9IYpdYzyG0cDhaFNzYAcpYBo-sLe5hfso'
	}

push.setVapidDetails('mailto:test@localsite.com',vapidKeys.publicKey,vapidKeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fSWsdxpPD4w:APA91bFILRxzkNbo116r9hy8xJeDNYMCexD2d-EXL_vyO06rUw5P2iuDWSkJR-xFUzAP1uMv-I_8zw4iY6yJw7qZbf57pP3PyiLzFi4hI3mtWrU9sdR2OdoQyaLbjDJ_TE5GTJNA9QjS","expirationTime":null,"keys":{"p256dh":"BJznKbgnIxdqiE6QwsXtJNG2Te36zTPOuiS6KQXCgs9kXqJJIFR23XlNb4DIrUMYKjkFnMGBDjIJH0qzHxiV9_0","auth":"USAa2hbnySh-Vt5Y3ET3BA"}}

push.sendNotification(sub, 'Test Message');