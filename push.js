var push = require('web-push');

let vapidKeys = {
	  publicKey: 'BPQ7OIIq95ouaprp2or9U-uCN4FrxaAXk42RFwEUX-HavJEeeLvmmhny3QFGVPQwJvrRSdDhXG4BKLCIDi6Ng7M',
	  privateKey: 'YQpuWHvhgj9IYpdYzyG0cDhaFNzYAcpYBo-sLe5hfso'
	}

push.setVapidDetails('mailto:test@localsite.com',vapidKeys.publicKey,vapidKeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/cCb2elmoH9Y:APA91bEdo-gm7SyjPDj1ZuPgiuwqL7kXWWkkgqlG-JI8AiOZ5nGJFDJDVGPNt-aOBYD8Oyz7hliiBv5YcXI20H1HYdamwoJyQYSifaVpVKj5_RBcYc3WRQEpEBHy3cImLAHsr-oITcHd","expirationTime":null,"keys":{"p256dh":"BHvOWUWttybHpyHBbfU0OkvF3z95mipZKn7A8zllcb3Tdl1XkJSKTVhR8bXWj2iJPqu7IHLtG3MO2_XGeFwwa28","auth":"2r5oYQjpEWem8ktP8-PE6Q"}}

push.sendNotifcation(sub, 'Test Message');