var cheerio = require("cheerio");
var server = require("./http");
 
var url = "http://www.zhangxinxu.com/wordpress/"

server.download(url, function(data) {
  if (data) {
    var $ = cheerio.load(data);

    $(".entry-title").each(function(i, e) {
        console.log("【"+i+"】：" ,$(e).text())
    });
 
  } else {
      console.log("error");
  } 
});