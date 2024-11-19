let ts  = "1:12:50";
let offset = "30";


let ts_arr = ts.split(':')

console.log(ts_arr);

// ts_arr = parseInt(ts_arr);

let hr = parseInt(ts_arr[0]);
let mn = parseInt(ts_arr[1]);
let s = parseInt(ts_arr[2]);


console.log(typeof(hr));

s = s + parseInt(offset);



if(s > 59){
    mn = mn + (s - 59);
    s = 0;
}

if(mn > 59){
    hr = hr + (mn - 59);
    mn = 0;
}


let result = hr + ':' + mn + ':' + s;

console.log(result);




console.log(parseInt(ts_arr[0]));



// console.log(ts_arr);