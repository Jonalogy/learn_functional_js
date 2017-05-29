let square = x => x * x

let piApprox = () => 22/7

let multiply = ( a , b )=>( a * b )

let getFormula = p =>(
  (radius) => {
    let area = multiply(p() , square(radius))
    return `Area of a circle of radius ${radius} is approximately ${area.toFixed(3)} unit square`
  }
)

let circleArea = getFormula(piApprox)
let circle_radius_1 = circleArea(1)

console.log(circle_radius_1);
