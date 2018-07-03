
  const cel = document.getElementsByClassName("celsius");
  const fah = document.getElementsByClassName("fahrenheit");
  const kel = document.getElementsByClassName("kelvin");

  cel[0].addEventListener('input', function(){
      //display celc celcius value in fah and kel
      fah[0].value = cel[0].value * 9/5 + 32;
      kel[0].value = parseFloat(cel[0].value) + 273.15;
  });
  fah[0].addEventListener('input', function(){
      //display fah celcius value in cel and kel
      cel[0].value = fah[0].value * 5/9 - 32;
      kel[0].value = (parseFloat(fah[0].value) + 459.67) * 5/9;
  });
  kel[0].addEventListener('input', function(){
      //display kel celcius value in fah and cel
      fah[0].value = kel[0].value * 9/5 - 459.67;
      cel[0].value = parseFloat(kel[0].value) - 273.15;
  });
