var CronJob = require("cron").CronJob;
var request = require('request');

var CRON_TIME = process.env.CRON_TIME;
var port = process.env.PORT || 3000;

if (CRON_TIME) {
  new CronJob({
    cronTime: CRON_TIME,
    onTick: function () {
	console.log(CRON_TIME);
	request("http://localhost:" + port+ "/hn");
    },
    start: true
  });
}
