let ch1=prompt("Введите первое число");
let ch2=prompt("Введите второе число");
let ch3=prompt("Введите третье число");
let exit;

if (isNaN(ch1) || (isNaN(ch2)) || isNaN(ch3)){
    document.querySelector(".message").innerHTML="Вы ввели не число, обновиет страницу и попробуйте еще раз!!"
}
else {
    let D=ch2**2-4*ch1*ch3;
    if (ch1==0) {
        console.log("У вас первый коэффициент =0, это не вадратное уравнение");
        exit=1;
    }
    if(exit!=1)
    {
        if (D>0) console.log("Уравнение имеет два корня")
        else if (D==0) console.log("Уравнение имеет один корень")
            else console.log("Уравнение не имеет корней")
        if (ch1<=0 || ch2<=0 || ch3<=0) console.log("Ваши стороны <=0")
            else if (((+ch1 + +ch2) > +ch3) && ((+ch1 + +ch3) > +ch2) && ((+ch2 + +ch3) > +ch1)) console.log("Такой тругольник может существовать")
                else console.log("Такого треугольника не существует")
    }
}