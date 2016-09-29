/**
 * Created by Administrator on 29/09/2016.
 */
function factorial(n) {
    if (typeof n != 'number') {
        return NaN;
    }
    if (n === parseInt(n)) {
        if (n <= 1) {
            return 1;
        } else {
            var result = 1;
            for (var i = 2; i <= n; i++) {
                result *= i;
            }
            return result;
        }
    } else {
        return NaN;
    }
}
console.log(factorial(4));