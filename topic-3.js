// i++ => i=i+1
// i-- => i=i-1
/*

for(var i = 5; i<=10; i++){
    console.log("for -> ",i);
}

var dl = 0;
do{
    dl++;
    console.log("do ->", dl);
//    dl++;
} while(dl<=10);

var wl = 0;
while(wl<=10){
    console.log("while -> ", wl);
    wl++;
}
*/

for(var rno =1; rno <=5; rno++){
    // pre requasits
    var ccode = "c1";
    var year = "2020";

    // priparing HTNO
    var htno  = year + ccode + rno;

    console.log(rno, htno);
}

//login chek
var is_allowed = false;
var checks =1;
var uid, pd = "";

do{
    if(uid !="myid" && pd!="mypd"){
        console.log("do->Invalied user/pasword");
        checks++;
    }

    if(checks>3){
        is_allowed = false;
        console.log("User is blocked for 24hrs");
    }
}
while(is_allowed === true)

while(is_allowed === true){
    if(uid !="myid" && pd!="mypd"){
        console.log("Invalied user/pasword");
        checks++;
    }

    if(checks>3){
        is_allowed = false;
        console.log("while->User is blocked for 24hrs");
    }
}



