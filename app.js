
  const celc = document.getElementsByClassName("celcius");
  console.log(celc);

  celc[0].addEventListener('click', function(){
    console.log("YES!");
  });

  celc[0].addEventListener('input', function(){
      console.log(celc[0].value);

  });

//display celc celcius value
