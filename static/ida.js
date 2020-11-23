$(function(){
        csmapi.set_endpoint ('https://5.iottalk.tw');
        var profile = {
		    'dm_name': 'Dummy_Device',
			'odf_list': [Dummy_Control],
            'd_name': 'Dummy_web',
        };
		
        function Dummy_Sensor(){
            return Math.random();
        }
        function Dummy_Control(data) {
            data = data[0]
            p1 = data["Car1"]
            console.log(p1)
            drawCar(p1)
        }
      
/*******************************************************************/                
        function ida_init(){
	    	console.log(profile.d_name);
	}
        var ida = {
            'ida_init': ida_init,
        }; 
        dai(profile,ida);     
});

function drawCar(p){
    draw_map()
    let canvas = document.getElementById("Map");
    let ctx = canvas.getContext("2d");
    var middle = canvas.width / 2
    var up = 50
    var img_car = document.getElementById("car_red")
    img_h = img_car.height / 11
    img_w = img_car.width / 11
    p[0] = p[0] * 2.5 + (middle - 200) - (img_w / 2)
    p[1] = p[1] * 2.5 + up - (img_h / 2)
    ctx.drawImage(img_car, p[0], p[1], img_w, img_h)
}
