var t = function(t) {
    return (t = t.toString())[1] ? t : "0" + t;
};

module.exports = {
    formatTime: function(e) {
        var r = e.getFullYear(), n = e.getMonth() + 1, o = e.getDate(), a = e.getHours(), u = e.getMinutes(), i = e.getSeconds();
        return [ r, n, o ].map(t).join("-") + " " + [ a, u, i ].map(t).join(":");
    }
};

var e = require("./jf_aes.js"), r = e.enc.Utf8.parse("hbdxWxSmall96548"), n = e.enc.Utf8.parse("6606136474185246");

module.exports.Decrypt = function(t) {
    var o = e.enc.Hex.parse(t), a = e.enc.Base64.stringify(o);
    return e.AES.decrypt(a, r, {
        iv: n,
        mode: e.mode.CBC,
        padding: e.pad.Pkcs7
    }).toString(e.enc.Utf8).toString();
}, module.exports.Encrypt = function(t) {
    var o = e.enc.Utf8.parse(t);
    return e.AES.encrypt(o, r, {
        iv: n,
        mode: e.mode.CBC,
        padding: e.pad.Pkcs7
    }).ciphertext.toString();
}, module.exports.strIsNull = function(t) {
    return null == t || (null == t || ("" == t || 0 == t.length));
};