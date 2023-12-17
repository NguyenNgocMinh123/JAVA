// //let sum=0

// //for( i=0;i<10;i++)
// //{
//    // sum=sum+i;
//    // console.log(i);
// //}


// //khai bao 1 mang array

// //var myarray = [ 'Ngoc Minh','Bao','duc','quoc','nhan']


// //console.log(myarray.length)

// //for (let i = 0; i < myarray.length; i++) {
//     //console.log (myarray[i])
    
// //}

// //khai bao 1 object
// // var students =
// // [
// //     {
// //         name: 'Ngoc Minh' ,
// //         age : 18 
// //     },
// //     {
// //         name : 'Bao' ,
// //         age : 19
// //     },
// //     {
// //         name: 'Duc' ,
// //         age: 15
// //     },
// //     {
// //         name : 'Quoc',
// //         age : 15
// //     },
// //     {

// //         name :'Nhan' ,
// //         age : 15
// //     }
// // ];
// // for ( let a of students ){
// //  console.log (a.name+ ' '+a.age)
// // }

// function change_backgroud () {
//     var divs = document.getElementsByTagName('div');
//     for(var i = 0;i < divs.length; i++) {
//          if ((i + 1) % 2==0){
//             divs[i].style.background="red";
//          } else{
//             divs[i].style.background="blue";
//          }

//     }

// }

function inPrime (num) {
    if (num <=1) {
        return false;
    }

    //kiểm tra các số còn lại
    for (let i = 2; i < Math.sqrt(num); i++) {
        if ( num % i ==0) {
            return false ;
        }
        
    }
    return true;
}

let numberToCheck =44 ;
 if( inPrime(numberToCheck))
 {
    console.log( numberToCheck+ ' la so nguyen to')
 } else {
    console.log( numberToCheck+ ' khong phai la so nguyen to')
 }