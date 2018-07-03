
  const cel = document.getElementsByClassName("celcius");
  const fah = document.getElementsByClassName("fahrenheit");
  const kel = document.getElementsByClassName("kelvin");
  console.log(cel, fah, kel);


  cel[0].addEventListener('input', function(){
      console.log(cel[0].value);
      //display celc celcius value in fah and kel
      fah[0].value = cel[0].value;
  });
