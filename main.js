var song_list;
var song_list_num;
function songAllCallBack(){
	fetch("https://script.google.com/macros/s/AKfycbwy2CgiAolYHfMzIFTw0E3k2ajFL1RKi_u0mE57ufuGsoDrfkY/exec")
		.then(response => {
			return response.json();
			
		})
		.then(data => {
			// デバッグ用
			song_list = data;
			song_list_num = data.length;
		})
		.catch(error => {
			console.log("失敗しました");
		});
    setTimeout(()=>{
		var $myList = $('#songlist');
		for(var i = 0; i < song_list_num; i++){
			$myList.append($('<tr><td>'+song_list[i].Artist+'</td><td>'+song_list[i].Song+'</td></tr>'));
		}
		$("#p_loading").text("");
    },5000);
	$("#p_loading").text("Now Loading...");
}
songAllCallBack();