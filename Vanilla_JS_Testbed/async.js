async function f() {
  try {
    let response = await fetch("http://google.com");
    console.log();
    console.log(response);
  } catch (err) {
    console.log(err); // TypeError: failed to fetch
  }
}

f();
console.log("asdf");
