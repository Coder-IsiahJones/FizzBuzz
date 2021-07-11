// Get the values from the page. Need fizz and buzz value.
function getValues() {
   let fizzValue = document.getElementById("fizzValue").value;
   let buzzValue = document.getElementById("buzzValue").value;

   // Parse into integer
   fizzValue = parseInt(fizzValue);
   buzzValue = parseInt(buzzValue);

   // Conditional Statement
   // Validate input 
   if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
      // Call fizzBuzz
      let fbData = FizzBuzz(fizzValue, buzzValue);

      // Call displayData()
      displayData(fbData);
   } else {
      alert("You must enter integers");
   }
}

// Traditional Solve Fizz Buzz with a for loop
// Use "for-loop" to count form 1 to 100
function FizzBuzz(fizzValue, buzzValue) {
   // Init array
   let returnArray = [];

   // Loop
   for (let i = 1; i <= 100; i++) {
      if (i % fizzValue == 0 && i % buzzValue == 0) {
         returnArray.push("FizzBuzz");
      } else if (i % fizzValue == 0) {
         returnArray.push("Fizz");
      } else if (i % buzzValue == 0) {
         returnArray.push("Buzz");
      } else {
         returnArray.push(i);
      }
   }
   return returnArray;
}

// Custom display function.
function displayData(fbData) {

   //get the table body element from the page
   let tableBody = document.getElementById("results");

   //get the row from the template
   let templateRow = document.getElementById("fbTemplate");

   //clear table first
   tableBody.innerHTML = "";

   for (let i = 0; i < fbData.length; i += 5) {
      const tableRow = document.importNode(templateRow.content, true);
      //grab only the columns in the template
      rowCols = tableRow.querySelectorAll("td");

      rowCols[0].classList.add(fbData[i]);
      rowCols[0].textContent = fbData[i];

      rowCols[1].classList.add(fbData[i + 1]);
      rowCols[1].textContent = fbData[i + 1];

      rowCols[2].classList.add(fbData[i + 2]);
      rowCols[2].textContent = fbData[i + 2];

      rowCols[3].classList.add(fbData[i + 3]);
      rowCols[3].textContent = fbData[i + 3];

      rowCols[4].classList.add(fbData[i + 4]);
      rowCols[4].textContent = fbData[i + 4];

      tableBody.appendChild(tableRow);
   }
}

// Alternative methods of completing the fizzBuzz function.
// Switch
function fizzBuzzB(fizzValue, buzzValue) {
   let returnArray = [];
   let Fizz = false;
   let Buzz = false;

   for (let i = 1; i < 100; i++) {
      Fizz = i % fizzValue == 0;
      Buzz = i % buzzValue == 0;

      switch (true) {
         case Fizz && Buzz: {
            returnArray.push('FizzBuzz');
            break;
         }
         case Fizz: {
            returnArray.push('Fizz');
            break;
         }
         case Buzz: {
            returnArray.push('Buzz');
            break;
         }
         default:
            returnArray.push(i);
            break;
      }
   }
  return returnArray;
}

//  Ternary Operators
function fizzBuzzC(fizzValue, buzzValue) {
   let returnArray = [];

   for (let i = 1; i <= 100; i++) {
      let value = ((i % fizzValue == 0 ? 'Fizz' : '') + (i % buzzValue == 0 ? 'Buzz' : '') || i);

      returnArray.push(value);
   }
   return returnArray;
}