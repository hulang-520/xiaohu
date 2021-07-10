t = (require("./jf_util.js"));

var  func= function() {
	var request=require('request');
	var a = {
		queryDate: t.formatTime(new Date()),
		phone: "b89bbe54945645af9a3e4a943140a3f5"
	};
	var i = {
	    para: t.Encrypt(JSON.stringify(a))
	};
	var options = {
	    headers: {"Connection": "close"},
	    url: 'https://llhb.ah163.net/ah_red_come/app/userSign',
	    method: 'POST',
	    json:true,
	    body: i
	};
	
	function callback(error, response, data) {
	   console.log('----info------',t.Decrypt(data));
	}
	
	request(options, callback);
 }


module.exports = {
    func
}
