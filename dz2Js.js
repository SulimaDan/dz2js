const car = {
    manufacturer: "lamborghini",
    model: "huracan",
    year: 2014,
    avgSpeed: 120, 
  };

  function showCarInfo(car) {
    console.log(`Виробник: ${car.manufacturer}`);
    console.log(`Модель: ${car.model}`);
    console.log(`Рік випуску: ${car.year}`);
    console.log(`Середня швидкість: ${car.avgSpeed} км/год`);
  }

  function calculateTravelTime(distance, car) {
    const timeWithoutBreaks = distance / car.avgSpeed;
    const breaks = Math.floor(timeWithoutBreaks / 4); 
    const totalTime = timeWithoutBreaks + breaks;
    console.log(`Час для подолання ${distance} км: ${totalTime.toFixed(2)} год.`);
  }








  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b); 
  }
  
  function reduceFraction(fraction) {
    const divisor = gcd(fraction.numerator, fraction.denominator);
    return {
      numerator: fraction.numerator / divisor,
      denominator: fraction.denominator / divisor,
    };
  }
  
  function addFractions(f1, f2) {
    const numerator = f1.numerator * f2.denominator + f2.numerator * f1.denominator;
    const denominator = f1.denominator * f2.denominator;
    return reduceFraction({ numerator, denominator });
  }
  
  function subtractFractions(f1, f2) {
    const numerator = f1.numerator * f2.denominator - f2.numerator * f1.denominator;
    const denominator = f1.denominator * f2.denominator;
    return reduceFraction({ numerator, denominator });
  }
  
  function multiplyFractions(f1, f2) {
    const numerator = f1.numerator * f2.numerator;
    const denominator = f1.denominator * f2.denominator;
    return reduceFraction({ numerator, denominator });
  }
  
  function divideFractions(f1, f2) {
    const numerator = f1.numerator * f2.denominator;
    const denominator = f1.denominator * f2.numerator;
    return reduceFraction({ numerator, denominator });
  }
  
  const fraction1 = { numerator: 1, denominator: 2 }; 
  const fraction2 = { numerator: 3, denominator: 4 }; 
  
  console.log("Додавання:", addFractions(fraction1, fraction2));
  console.log("Віднімання:", subtractFractions(fraction1, fraction2));
  console.log("Множення:", multiplyFractions(fraction1, fraction2));
  console.log("Ділення:", divideFractions(fraction1, fraction2));
  










  


  const time = {
    hours: 20,
    minutes: 30,
    seconds: 45,
  };
  

  function showTime(time) {
    console.log(
      `${String(time.hours).padStart(2, "0")}:${String(time.minutes).padStart(
        2,
        "0"
      )}:${String(time.seconds).padStart(2, "0")}`
    );
  }
  

  function addSeconds(time, seconds) {
    let totalSeconds = time.seconds + seconds;
    time.seconds = totalSeconds % 60;
    let totalMinutes = time.minutes + Math.floor(totalSeconds / 60);
    time.minutes = totalMinutes % 60;
    time.hours = (time.hours + Math.floor(totalMinutes / 60)) % 24;
  }
  

  function addMinutes(time, minutes) {
    addSeconds(time, minutes * 60);
  }
  

  function addHours(time, hours) {
    time.hours = (time.hours + hours) % 24;
  }
  


  