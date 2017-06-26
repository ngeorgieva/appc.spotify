const Requester = require("../lib/utility/request/requester");
module.exports = function getSearch(params, callback, optionalParams) {
    const options = optionalParams || require("../conf/config.js").getSearch;
    const Request = new Requester(options, params);
    Request.makeRequest(function (err, resp) {
        if (err) {
            callback(err)
        } else {
            callback(null, resp)
        }
    })
};