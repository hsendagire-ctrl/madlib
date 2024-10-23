document.getElementById("madlib1").addEventListener("click", madlib);
document.getElementById("madlib2").addEventListener("click", madlib2);

function madlib() {
  let pNoun = document.getElementById("p-noun").value;
  let adjective = document.getElementById("adj").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;

  let output = `"There are too many ${noun} on this ${adjective} airplane!" I screamed. "Somebody has to ${verb} on ${pNoun} to solve this problem!"`;
  document.getElementById("lastp").innerHTML = output;
}

function madlib2() {
  let pNoun = document.getElementById("p-noun").value;
  let adjective = document.getElementById("adj").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;
  let snoun = document.getElementById("snoun").value;

  let secondput = `"Now that those ${snoun} are gone, somebody needs to help us!" I screamed form my seat. "Who is willing to ${verb} that ${noun} for ${pNoun}`;
  document.getElementById("vlastp").innerHTML = secondput;
}
