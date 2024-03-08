const { liveStock } = require('./index');


liveStock().then((res) => console.log(res)).catch((e) => console.log(e))