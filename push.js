var push = require('web-push');

let vapidKeys = {
	  publicKey: 'BPQ7OIIq95ouaprp2or9U-uCN4FrxaAXk42RFwEUX-HavJEeeLvmmhny3QFGVPQwJvrRSdDhXG4BKLCIDi6Ng7M',
	  privateKey: 'YQpuWHvhgj9IYpdYzyG0cDhaFNzYAcpYBo-sLe5hfso'
	}

push.setVapidDetails('mailto:test@localsite.com',vapidKeys.publicKey,vapidKeys.privateKey)

let sub = {};

push.sendNotifcation(sub, 'Test Message')