var song_list;
var song_list_num;
var $myList = $('#songlist');

var URL = "https://script.google.com/macros/s/AKfycbwy2CgiAolYHfMzIFTw0E3k2ajFL1RKi_u0mE57ufuGsoDrfkY/exec?sheetNo=1";

// function songAllCallBack(){
// 	fetch("https://script.google.com/macros/s/AKfycbwy2CgiAolYHfMzIFTw0E3k2ajFL1RKi_u0mE57ufuGsoDrfkY/exec")
// 		.then(response => {
// 			return response.json();
			
// 		})
// 		.then(data => {
// 			// デバッグ用
// 			song_list = data;
// 			song_list_num = data.length;
// 		})
// 		.catch(error => {
// 			console.log("失敗しました");
// 		});
//     setTimeout(()=>{
// 		var $myList = $('#songlist');
// 		for(var i = 0; i < song_list_num; i++){
// 			$myList.append($('<tr><td class="song_artist"><div class="tb_td"><span class="song_under">'+song_list[i].Song+'</span><br><span class="artist_under">'+song_list[i].Artist+'</span></div></td><td></dt></tr>'));
			
// 		}
// 		// 仮テキスト
// 		$("#p_loading").text("");
//     },5000);
// 	// 仮テキスト
// 	// ここ画像にしたい・・・
// 	$("#p_loading").text("Now Loading...");
// }
// songAllCallBack();

// XMLHttpRequestオブジェクトの作成
var request = new XMLHttpRequest();

// URLを開く
request.open('GET', URL, false);

// レスポンスが返ってきた時の処理を記述 
request.onload = function () {
	// レスポンスが返ってきた時の処理
	song_list = JSON.parse(request.response);
    console.log(song_list);
	for(var i = 0; i < song_list.length; i++){
		$myList.append($('<tr><td class="song_artist"><div class="tb_td"><span class="song_under">'+song_list[i].Song+'</span><br><span class="artist_under">'+song_list[i].Artist+'</span></div></td><td></dt></tr>'));
		$myList.hide().fadeIn(1500);
	}
}

// リクエストをURLに送信
request.send();