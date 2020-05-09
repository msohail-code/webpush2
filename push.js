var push = require('web-push');

let vapidKeys = {
	  publicKey: 'BPQ7OIIq95ouaprp2or9U-uCN4FrxaAXk42RFwEUX-HavJEeeLvmmhny3QFGVPQwJvrRSdDhXG4BKLCIDi6Ng7M',
	  privateKey: 'YQpuWHvhgj9IYpdYzyG0cDhaFNzYAcpYBo-sLe5hfso'
	}

push.setVapidDetails('mailto:test@localsite.com',vapidKeys.publicKey,vapidKeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/e6jVnjd-zRY:APA91bG1oHd3GCRf4bpwcnIvKa5n4WDMWt6ZVLxZ8K8OQE1WhB_qPBWtPlk6_jPeHyzItYZq86gztSAMNzBRwGwK9Gq280Kh6qr4YOE7-H1NCNSwDIy22flL0XGvTPC1Q4XHE4ANWu6S","expirationTime":null,"keys":{"p256dh":"BNiFKWDovjGoALi3dI4keozmdwQpS4ubloZ0ylfsyAz8UmX-7XojRHp0zBL8Cwl2wwUFFfpj1bZAz_iuuqi4jWY","auth":"Kc1H-XeY-rQB_42qMwOJow"}}

push.sendNotifcation(sub, 'Test Message')