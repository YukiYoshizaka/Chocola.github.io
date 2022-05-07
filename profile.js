var song_list;
var song_list_num;
var $profile = $('#profile');
var $prof_img = $('#prof_img');
function get_prof_img(){
	var URL = "https://script.google.com/macros/s/AKfycbwy2CgiAolYHfMzIFTw0E3k2ajFL1RKi_u0mE57ufuGsoDrfkY/exec?sheetNo=5";

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
			$prof_img.append($('<img src="'+data[i].img_url+'">'));
			$prof_img.hide().fadeIn(1500);
		}
	}

	// リクエストをURLに送信
	request.send();
}


function get_prof(){
	var URL = "https://script.google.com/macros/s/AKfycbwy2CgiAolYHfMzIFTw0E3k2ajFL1RKi_u0mE57ufuGsoDrfkY/exec?sheetNo=2";

	// XMLHttpRequestオブジェクトの作成
	var request = new XMLHttpRequest();
	
	// URLを開く
	request.open('GET', URL, false);
	
	// レスポンスが返ってきた時の処理を記述 
	request.onload = function () {
		// レスポンスが返ってきた時の処理
		data = JSON.parse(request.response);
		for(var i = 0; i < data.length; i++){
			$profile.append($('<ul class="profile"><li class="on">'+data[i].item+'</li><li>'+data[i].contents+'</li></ul>'));
			$profile.hide().fadeIn(1500);
		}
	}

	// リクエストをURLに送信
	request.send();
}

// 画像を取得
get_prof_img();

// プロフィールを取得
get_prof()
