// function Loadjson(file,callback)
// {
// 	var xhr = new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json");
// 	xhr.open("GET",file,true);
// 	xhr.onreadystatechange=function(){
// 		if (xhr.readyState === 4 && xhr.status == "200"){
// 			callback(xhr.responseText);
// 		}
// 	};
// xhr.send(null);
// }

// Loadjson("data.json",function(text){
// 	var data = JSON.parse(text);
// console.log(data);
//  basics(data.details);
// 	careerinfo(data.career);
// 	educationinfo(data.education);
// 	skillset(data.skills);
// 	achivementsinfo(data.achivements);
// })
function loadjson(file){
	return new Promise((resolve,reject)=>{
	return fetch(file).then(response=>{
		if(response.ok){
			resolve(response.json());
		}
		else{
			reject(new Error('Error'));
		}
		})
	})
}
var newfile = loadjson("data.json");
newfile.then(data=>{
console.log(data);
 basics(data.details);
 	careerinfo(data.career);
 	educationinfo(data.education);
 	skillset(data.skills);
 	achivementsinfo(data.achivements);
 })
var left=document.querySelector(".left")
function basics(det){
	var img = document.createElement("img");
	img.src = det.image;
	left.appendChild(img);
	var name1 = document.createElement("h3");
	name1.textContent = det.name;
	left.appendChild(name1);
	var phoneno1 = document.createElement("h3");
	phoneno1.textContent = det.phoneno;
	left.appendChild(phoneno1);
	var email = document.createElement("a");
	email.href = "mailto:husnaparvin20@gmail.com";
	email.textContent = det.email;
	left.appendChild(email);
	var add = document.createElement("h2");
	add.textContent = "address";
	left.appendChild(add);
	var hr = document.createElement("hr");
	left.appendChild(hr);
	var add1 = document.createElement("p");
	add1.textContent = det.address;
	left.appendChild(add1);
}
var right = document.querySelector(".right")
function careerinfo(infom){
	var add2 = document.createElement("h2");
	add2.textContent = "CAREER OBJECTIVE";
	right.appendChild(add2);
	var hr = document.createElement("hr");
	right.appendChild(hr);
	var add3 = document.createElement("p");
	add3.textContent = infom.info;
	right.appendChild(add3);
	var add4 = document.createElement("h2");
}
function educationinfo(edu){
	var ed = document.createElement("h3");
	ed.textContent = "Educational qualifications";
	right.appendChild(ed);
	var hr = document.createElement("hr");
	right.appendChild(hr);
	var table1 = document.createElement("table");
	table1.border = "1";
	right.appendChild(table1);
	tabledata = " ";
	for(i=0;i<edu.length;i++){
		tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].yearofpassing+"</td><td>"+edu[i].percentage+"</td></tr>";
	}
	table1.innerHTML = tabledata;
}
function skillset(skill){
	var sk = document.createElement("h1");
	sk.textContent = "technical skills";
	right.appendChild(sk);
	var hr = document.createElement("hr");
	right.appendChild(hr);
	for(i=0;i<skill.length;i++){
		var s = document.createElement("h1");
		s.textContent = skill[i].title;
		right.appendChild(s);
		var ul = document.createElement("ul");
		var li = document.createElement("li");
		li.textContent = skill[i].info;
		ul.appendChild(li);
		right.appendChild(ul);
	}
}
function achivementsinfo(achive){
	var sd = document.createElement("h1");
	sd.textContent = "achivements";
	right.appendChild(sd);
	var hr = document.createElement("hr");
	right.appendChild(hr);
	for(i=0;i<achive.length;i++){
		var a = document.createElement("h3");
		a.textContent = achive[i].title;
		right.appendChild(a);
		var ul = document.createElement("ul");
		var li = document.createElement("li");
		li.textContent = achive[i].info;
		ul.appendChild(li);
		right.appendChild(ul);
	}

}
function openpage(){
	window.open("resume.html","_self",true)
}