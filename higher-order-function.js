let square = x => x * x

let pi = () => 3.14159

let multiply = ( a , b )=>( a * b )

let areaCircle = p =>(
  radius => multiply( p() , square(radius) )
)

let circle = areaCircle(pi)
let circle_radius_1 = circle(1)

console.log(circle_radius_1);
