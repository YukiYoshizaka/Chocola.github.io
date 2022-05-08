var song_list;
var song_list_num;
var $myList = $('#songlist');

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
	console.log(song_list);
	for(var i = 0; i < song_list.length; i++){
		$myList.append($('<tr><td class="song_artist"><span class="artist_under">'+song_list[i].Artist+'</span>'));
		for(var k = 0; k < song_list[i].Song.length; k++){
			$myList.append($('<span class="song_under">'+song_list[i].Song[k]+'</span><br>'));
		}
		$myList.append($('</td></tr>'));
		$myList.hide().fadeIn(1500);
	}
}

// リクエストをURLに送信
request.send();

function formating_DataArtist(data){
	var artist_data = [];
	var result = [];
	var temp_song = [];
	for(var i = 0; i < data.length; i++){
		artist_data.push(data[i].Artist);
	}

	// artist_dataの重複削除
	artist_data = new Set(artist_data);
	artist_data = Array.from(artist_data);
	artist_data = artist_data.sort();
	console.log(artist_data);

	for(var i = 0; i < artist_data.length; i++){
		for(var k = 0; k < data.length; k++){
			if(artist_data[i] == data[k].Artist){
				// result[artist_data[k]] = data[i].Song;
				temp_song.push(data[k].Song);
			}
		}
		result.push(
			{
				Artist:artist_data[i],
				Song:temp_song
			}
		);
		temp_song = [];
	}
	return result;
}
