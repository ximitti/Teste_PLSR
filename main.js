class PrimeNumberList {
  static main(primesMustBeFounded) {
    const primeList = [];

    let nextNumber = 3;

    // still used to mount the output
    let PAGENUMBER = 0;
    let PAGEOFFSET = 0;
    let ROWOFFSET = 0;
    let C = 0;
    let RR = 50;
    let CC = 4;
    let M = primesMustBeFounded;

    // find all primes from first to the limit primesMustBeFounded
    while (primeList.length < primesMustBeFounded) {

      if (!primeList.length) {
        primeList.push(2);
        continue;
      }

      if (this.isPrime(nextNumber, primeList)) {
        primeList.push(nextNumber);
      }

      nextNumber += 2;
    }

    // 
    PAGENUMBER = 1;
    PAGEOFFSET = 1;

    while (PAGEOFFSET <= M) {
      console.log("Page ", PAGENUMBER);
      for (
        ROWOFFSET = PAGEOFFSET;
        ROWOFFSET <= PAGEOFFSET + RR - 1;
        ROWOFFSET++
      ) {
        let aux = [];
        for (C = 0; C <= CC - 1; C++) {
          if (ROWOFFSET + C * RR <= M) {
              aux.push(primeList[ROWOFFSET + C * RR]);
          }
        }
        console.log(aux.join('|'));
      }
      PAGENUMBER++;
      PAGEOFFSET += RR * CC;
    }
  }

  static isPrime(number, list) {
    switch (number) {
      case 2:
      case 3:
      case 5:
      case 7:
        return true;
    }

    if (number % 2 === 0) {
      return false;
    }

    if (number % 3 === 0) {
      return false;
    }

    if (number % 5 === 0) {
      return false;
    }

    for (let i = 3; i < list.length; i++) {
      const divisor = list[i];
      const rest = number % divisor;
      const quotient = Math.floor(number / divisor);

      if (rest === 0) {
        return false;
      }

      if (quotient < divisor) {
        return true;
      }
    }

    return false;
  }
}

PrimeNumberList.main(1000);
