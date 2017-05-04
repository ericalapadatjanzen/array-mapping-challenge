var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(obj) {
// TODO: x squared + y squared = z squared  find  z

// LONG FORM!

// var xSquared = Math.pow(obj.x, 2);
// var ySquared = Math.pow(obj.y, 2);

// var added = xSquared + ySquared;
// var zSquared = Math.sqrt(added);

//   return zSquared;

//SHORT FORM:
var { x, y} = obj
return  Math.sqrt( (x*x) + (y*y));

  });

console.log(result)

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);