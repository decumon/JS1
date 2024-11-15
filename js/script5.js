let ch1=prompt("Введите первое число");
let ch2=prompt("Введите второе число");
let ch3=prompt("Введите третье число");
let ch4=prompt("Введите третье число");
let metod=prompt("Выберите способ решения");
if (isNaN(ch1) || (isNaN(ch2)) || isNaN(ch3) || isNaN(ch4) || isNaN(metod)){
    document.querySelector(".message").innerHTML="Вы ввели не число, обновиет страницу и попробуйте еще раз!!"
}
else {
   switch (metod){
    case ("1"):
        {
            let max=-9999;
            let max2=-9999;
            let max3=-9999;
            max=Math.max(ch1, ch2, ch3, ch4)

            max2=Math.max(ch1, ch2, ch3)
            if (max2!=max) max3=max2;
            max2=Math.max(ch1, ch2, ch4)
            if (max2!=max) max3=max2;
            max2=Math.max(ch1, ch3, ch4)
            if (max2!=max) max3=max2;
            max2=Math.max(ch4, ch2, ch3)
            if (max2!=max) max3=max2;

            console.log(+max3 + +max)
            break;
        }
        
    case ("2"):
        {
            let summ1=+ch1 + +ch2;
            let summ2=+ch1 + +ch3;
            let summ3=+ch1 + +ch4;
            let summ4=+ch2 + +ch3;
            let summ5=+ch2 + +ch4;
            let summ6=+ch3 + +ch4;
            console.log(Math.max(summ1, summ2, summ3, summ4, summ5, summ6))
            break;
         }
   }
}