var button = document.getElementById('btn');

button.addEventListener('click', function() {
	var result = document.getElementById('result');
	var xhr = new XMLHttpRequest();

	var handleOnload = function() {
		var data = JSON.parse(xhr.responseText);
		var htmlStr = '';
		console.log(data);
		all_attribute = Object.keys(data[0]) //取得所有屬性
		
		data.forEach(function(value, index) {
			console.log(value);
			for(let i=0 ; i<all_attribute.length; i++)
			{
				if(value[all_attribute[i]] == '')
				{
					value[all_attribute[i]] = '無紀錄'
				}
			}	
			htmlStr += '<div><p> 名稱:' + value['Name'] + '</p>' + 
					'<p>種類:' + value['Variety'] + '</p>' +
			 		'<p>年齡:' + value['Age'] + '</p>' +
					'<p>體重:' + value['Bodyweight'] + '</p>' +
					'<p>性別:' + value['Sex'] + '</p>' +
					'<p>類型:' + value['Type'] + '</p>' +
					'<p>絕育:' + value['IsSterilization'] + '</p>' +
					'<p>紀錄:' + value['Note'] + '</p>' +
					'<p>安置處:' + value['Resettlement'] + '</p>' +
					'<p><img src="' + value['ImageName'] + '" /></p> </div>'; 
		});
		result.innerHTML = htmlStr;
	}	
	var url = 'http://163.29.157.32:8080/dataset/6a3e862a-e1cb-4e44-b989-d35609559463/resource/f4a75ba9-7721-4363-884d-c3820b0b917c/download/393625397fc043188a3f8237c1da1c6f.json'
	xhr.open('GET', url, true);
	xhr.send();
	xhr.onload = handleOnload;
});