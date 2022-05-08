var $self_introduction = $('#self_introduction');
var $top_img = $('#top_img');

function get_home_img(){
	var URL = "https://script.google.com/macros/s/AKfycbwy2CgiAolYHfMzIFTw0E3k2ajFL1RKi_u0mE57ufuGsoDrfkY/exec?sheetNo=4";

	// XMLHttpRequestオブジェクトの作成
	var request = new XMLHttpRequest();
	
	// URLを開く
	request.open('GET', URL, false);
	
	// レスポンスが返ってきた時の処理を記述 
	request.onload = function () {
		// レスポンスが返ってきた時の処理
		data = JSON.parse(request.response);
		for(var i = 0; i < data.length; i++){
			$top_img.append($('<img src="'+data[i].img_url+'">'));
			$top_img.hide().fadeIn(1500);
		}
	}
	
	// リクエストをURLに送信
	request.send();
	
}

function get_self_introduction(){
	var URL = "https://script.google.com/macros/s/AKfycbwy2CgiAolYHfMzIFTw0E3k2ajFL1RKi_u0mE57ufuGsoDrfkY/exec?sheetNo=3";

	// XMLHttpRequestオブジェクトの作成
	var request = new XMLHttpRequest();
	
	// URLを開く
	request.open('GET', URL, false);
	
	// レスポンスが返ってきた時の処理を記述 
	request.onload = function () {
		// レスポンスが返ってきた時の処理
		data = JSON.parse(request.response);
		console.log(data);
		for(var i = 0; i < data.length; i++){
			$self_introduction.append($('<pre>'+data[i].self_introduction+'</pre>'));
			$self_introduction.hide().fadeIn(1500);
		}
	}
	
	// リクエストをURLに送信
	request.send();
}

//画像を取得
get_home_img();

// 自己紹介を取得する関数
get_self_introduction();