/**
 * Created by Administrator on 29/09/2016.
 */
var cars = ['BMW', 'Saab', 'Volvo'];
// console.log(cars.valueOf());

// for(var i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }
// console.log(cars.join(' and ')); // chuyển mảng thành chuỗi
cars.push('Honda');
cars.push('Yamaha');
console.log(cars.valueOf());
// while (cars.length > 0) {
//     cars.pop();
//     console.log(cars.valueOf());
// }

while (cars.length > 0) {
    cars.shift();
    console.log(cars.valueOf());
}