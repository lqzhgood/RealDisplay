const fs = require("fs");

var ysJson = require("./screens.json");

var arr = [];
arr.push({
	"name": "Dell XPS 15 FHD",
	"w": 1920,
	"h": 1080,
	"d": 15.6,
	"dpr": 1,
	"dpi": 141
})

ysJson.forEach(v => {
	let obj = {};
	obj.name = v.name;
	obj.w = v.w;
	obj.h = v.h;
	obj.d = v.d;
	obj.dpr = v.dppx;
	obj.dpi = Math.sqrt(Math.pow(v.w, 2) + Math.pow(v.h, 2)) / v.d;

	// if (!obj.w || !obj.h || !obj.d || !obj.dpi || !obj.dpr) {
	// 	console.log('name', v)
	// }
	arr.push(obj);
})

fs.writeFileSync("all.js", "var screens = " + JSON.stringify(arr, null, 4));
