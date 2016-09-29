$(document).foundation();



var points = [
	{
		pid: 'p9-0',
		name: 'Старт',
	},
	{
		pid: 'p8-0',
		name: 'Словения',
		price: 60
	},
	{
		pid: 'p7-0',
		name: 'Сундук сообщества'
	},
	{
		pid: 'p6-0',
		name: 'Швеция',
		price: 60
	},
	{
		pid: 'p5-0',
		name: 'Входящий налог',
		price: 10
	},
	{
		pid: 'p4-0',
		name: 'Железная дорога Реддинг',
		price: 2000
	},
	{
		pid: 'p3-0',
		name: 'Харватия',
		price: 1200
	},
	{
		pid: 'p2-0',
		name: 'Шанс'
	},
	{
		pid: 'p1-0',
		name: 'Венгрия',
		price: 1200
	},
	{
		pid: 'p0-0',
		name: 'Польша',
		price: 120
	},
	{
		pid: 'p0-0',
		name: 'Тюрьма'
	},
	{
		pid: 'p1'
	}

];



for(var x = 0; x < 10; x++){

	for(var y =0; y < 10; y++){
		var pid = x+'-'+y;

		if(x==0 || y==0|| x == 9 || y == 9){

			$('.board').append($('<div/>', {
				id: pid,
				text: '',
				class: "column point small-1 p"+pid
			} ));
		}
	}

}

