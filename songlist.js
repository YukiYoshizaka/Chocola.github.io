var song_list;
var song_list_num;
var $myList = $('#songlist');
var $linkList = $('#linklist');

var URL = "https://script.google.com/macros/s/AKfycbwy2CgiAolYHfMzIFTw0E3k2ajFL1RKi_u0mE57ufuGsoDrfkY/exec?sheetNo=1";

// XMLHttpRequestオブジェクトの作成
var request = new XMLHttpRequest();

// URLを開く
request.open('GET', URL, false);

// レスポンスが返ってきた時の処理を記述 
request.onload = function () {
	// レスポンスが返ってきた時の処理
	data = JSON.parse(request.response);
	song_list = formating_DataArtist(data);
	
	// 一文字目が変わったらidを追加してジャンプリンクできるようにする
	var first_song_word = "";
	var array_song_word = [];
	var link_data = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

	for(var i = 0; i < song_list.length; i++){
		
		for(var k = 0;k < song_list[i].Song.length; k++){
			// $myList.append($('<tr><td class="song_artist"><span class="artist_under"><a href="https://www.homepage-tukurikata.com/html/a-href.html">'+song_list[i].Artist+' / '+song_list[i].Song[k]+'</a></span><td></td>'));
			$myList.append($('<li><a href="'+song_list[i].URL+'">'+song_list[i].Artist+' / '+song_list[i].Song[k]+'</a></li>'));
		}
		$myList.hide().fadeIn(500);

	}
}
// リクエストをURLに送信
request.send();

function formating_DataArtist(data){
	var artist_data = [];
	var result = [];
	var temp_song = [];
	var temp_url = [];
	console.log(data[0]);
	for(var i = 0; i < data.length; i++){
		artist_data.push(data[i].Artist);
	}

	// artist_dataの重複削除
	artist_data = new Set(artist_data);
	artist_data = Array.from(artist_data);
	artist_data = artist_data.sort();
	// console.log(artist_data);

	for(var i = 0; i < artist_data.length; i++){
		for(var k = 0; k < data.length; k++){
			if(artist_data[i] == data[k].Artist){
				// result[artist_data[k]] = data[i].Song;
				temp_song.push(data[k].Song);
				temp_url.push(data[k].URL);
			}
		}
		
		result.push(
			{
				Artist:artist_data[i],
				Song:temp_song,
				URL:temp_url
			}
		);
		temp_song = [];
		temp_url = [];
	}
	return result;
}
