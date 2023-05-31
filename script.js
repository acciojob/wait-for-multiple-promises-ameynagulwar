//your JS code here. If required.
//your JS code here. If required.
let tbody = document.getElementById("output");

let timearr = [0,0,0];
function timeadd (obj) {
    switch (obj.time) {
        case "time1":
            timearr[0]=obj.timer;
            break;
        case "time2":
            timearr[1]=obj.timer;
             break;
        case "time3":
            timearr[2]=obj.timer;
            break;  
    }
	
}

let totaltime=0;

let time1s = new Date().getTime();
let promise1 =new Promise(func1);

function func1(resolve) {
	setTimeout(()=>{resolve();
        let time1e=new Date().getTime();
        let timetaken = (time1e-time1s)/1000;
        let obj = { "time":"time1",
                        "timer":timetaken}
        timeadd(obj);
        totaltime=totaltime+timetaken;},2000)
}
let time2s = new Date().getTime();
 let promise2 =new Promise(func2);


function func2(resolve) {
	setTimeout(()=>{
     resolve();
     let time2e=new Date().getTime();
	let timetaken = (time2e-time2s)/1000;
	let obj = { "time":"time2",
                        "timer":timetaken}
        timeadd(obj);
	totaltime=totaltime+timetaken;
    console.log(totaltime);
    },1000)
	
}

let time3s = new Date().getTime();
let promise3 =new Promise(func3);


function func3(resolve) {
	setTimeout(()=>{
        resolve();
        let time3e = new Date().getTime();
	let timetaken = (time3e-time3s)/1000;
	let obj = { "time":"time3",
                        "timer":timetaken}
        timeadd(obj);
	totaltime=totaltime+timetaken;
    console.log(totaltime);
    },3000)
	
}


let finalPromise = Promise.all([promise1,promise2,promise3])

finalPromise.then(addtoui);

function addtoui() {
	tbody.innerHTML="";
	    tbody.innerHTML =`<tr> <td>Promise 1</td>  <td>${timearr[0]}</td> </tr>
        <tr> <td>Promise 2</td> <td>${timearr[1]}</td> </tr>
        <tr> <td>Promise 3</td> <td>${timearr[2]}</td> </tr>
        <tr> <td>Total</td> <td>${totaltime}</td> </tr>`
}