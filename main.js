class PrimeNumberList {
  static main(primesMustBeFounded) {
    const primeList = [];
    let nextNumber = 3;

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

    this.showResult(primesMustBeFounded, primeList);
  }

  static showResult(limit, list) {
  // building data structure
  const maxDataPerPage = 200;
  const maxRows = 50;
  const numberOfPages = Math.ceil(limit / maxDataPerPage);
  const pagesData = {};
  let nextIndex = 0;

  for (let p = 1; p <= numberOfPages; p++) {
    let rowIndex = 0;
    let columnIndex = 0;
    let registerCount = 1;

    pagesData[p] = [];

    for (let i = nextIndex; i < list.length; i++) {
      if (rowIndex < maxRows) {
        if (!pagesData[p][rowIndex]){
          pagesData[p][rowIndex] = [];
          pagesData[p][rowIndex][columnIndex] = list[i];
        } else {
          pagesData[p][rowIndex][columnIndex] = list[i];
        }
        
        rowIndex++;
      } else {
        rowIndex = 0;
        columnIndex++;

        if (columnIndex < 4) {
        }
        
        pagesData[p][rowIndex][columnIndex] = list[i];
        rowIndex++;
      }

      if (registerCount < maxDataPerPage) {
        registerCount++;
      } else {
        nextIndex = i + 1;
        break;
      }
    }
  }
    // Presenting data with pagination
    for (const [page, data] of Object.entries(pagesData)) {
      console.log("Page ", page);
      data.forEach(line => {
        console.log(line.join('|'));
      });
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
