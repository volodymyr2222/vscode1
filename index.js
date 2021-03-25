//taska 1 (функція)
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  console.log( factorial(2) ); 




  //taska 2 
  

  let currentDate = prompt('Який зараз рік?','')
  let yearOfBirth = prompt('Рік твого народження?','')
  function sum() {
      let result = currentDate - yearOfBirth;
      console.log(result);
      
      return result;
      
      
  }
  
  if (sum() < 12) {
      alert('ur kid');
  } else if (sum() < 18) {
      alert('ur teen'); 
  } else {
      alert('ur adult')
  }