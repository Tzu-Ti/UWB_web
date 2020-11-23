window.onload=function(){
	draw_map()
}

function draw_map() {
	let canvas = document.getElementById("Map");
	let ctx = canvas.getContext("2d");

	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;

	ctx.beginPath();
	ctx.fillStyle = "#F0F0F0"

	var middle = canvas.width / 2
	var up = 50
	ctx.moveTo(middle, up)
	ctx.lineTo((middle+200), up)
	ctx.lineTo((middle+200), (up+400))
	ctx.lineTo((middle-200), (up+400))
	ctx.lineTo((middle-200), up)
	ctx.closePath()
	ctx.stroke()
	ctx.fill()

	var img = document.getElementById("baseStation")
	img_h = img.height / 11
	img_w = img.width / 11
	ctx.drawImage(img, ((middle-200)-(img_w/2)), (up-img_h/2), img_w, img_h)
	ctx.drawImage(img, ((middle+200)-(img_w/2)), (up-img_h/2), img_w, img_h)
	ctx.drawImage(img, (middle-(img_w/2)), ((up+400)-img_h/2), img_w, img_h)
}

