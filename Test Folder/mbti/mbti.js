let a;
let b;
let c;
let d;
switch (prompt("Introvert or Extravert?")) {
  case "Introvert":
    a = "I";
    console.log(a);
    break;
  case "Extravert":
    a = "E";
    console.log(a);
    break;
    
}

switch (prompt("Sensing or Intuition?")) {
  case "Sensing":
    b = "S";
    console.log(b);
    break;
  case "Intuition":
    b = "N";
    console.log(b);
    break;
    
}

switch (prompt("Thinking or Feeling?")) {
  case "Thinking":
    c = "T";
    console.log(c);
    break;
  case "Feeling":
    c = "F";
    console.log(c);
    break;
    
}

switch (prompt("Judging or Perceiving?")) {
  case "Judging":
    d = "J";
    console.log(d);
    break;
  case "Perceiving":
    d = "P";
    console.log(d);
    break;
    
}

alert(a + b + c +d);