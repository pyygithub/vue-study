let http = require('http');
let fs = require('fs');
let url = require('url')

// 获取热门图书数据
function read(callback) {
  fs.readFile('./category.json','utf8',function(err, data) {
    if(err || data.length == 0) {
      callback([]);
    } else {
      callback(JSON.parse(data));
    }
  });
}

function write(data, callback) {
  fs.writeFile('./category.json', JSON.stringify(data), callback);
}


http.createServer((req, resp) => {
  // 解决Node跨域问题
  resp.setHeader('Access-Control-Allow-Origin', '*');
  resp.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  resp.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') return resp.end();

  let {pathname, query} = url.parse(req.url, true); // true 将query转换为对象
  // 轮播图
  if(pathname == '/tags') {
    read(function(tags){
      resp.setHeader('Content-type','application/json;charset=utf8')
      resp.end(JSON.stringify(tags));
    })
    return;
  }

  // 首页项目列表
  let topic = require('./homeItemList.js');
  if(pathname == '/topic') {

    setTimeout(function() {
      resp.setHeader('Content-type','application/json;charset=utf8')
      resp.end(JSON.stringify(topic));
    }, 200);


    return;
  }



}).listen(9000);
