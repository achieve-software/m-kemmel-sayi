//Mükemmel sayı, sayılar teorisinde, kendisi hariç pozitif
//tam bölenlerinin toplamı kendisine eşit olan sayı. Diğer bir ifadeyle,
//bir mükemmel sayı, bütün pozitif tam bölenlerinin toplamının yarısına eşittir.

isPerfectNumber(28);

function isPerfectNumber(number) {
  let toplam = 0;
  for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      toplam += i;
    }
  }
  toplam += 1 + number;

  if (toplam == number * 2) {
    console.log("mükemmel sayıdır");
  } else {
    console.log("mükemmel sayı değildir");
  }
}
