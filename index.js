//taska 1 (функція)
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  console.log( factorial(2) ); 

// зробив без рекурсії 
function factorial(n){
    let result = 1;
        for (i = 1; i <= n; i++){
    result *= i;
    }
    return result;
    }
    console.log(factorial(2));

//fdfdfd


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