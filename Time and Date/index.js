let clock = document.querySelector("#saat")     //ID'si saat olan ilk öğeyi seçer
document.body.style.transition="all 0.8s"       //Body'nin geçiş hızı ( 1 = 1 saniyede yavaşça , 0 = anlık)
setInterval(() => {     //setInterval  aşağıdaki kod dizimlerini içeren Callback fonksiyon.(Belirli aralıklarla işlemleri yapar)
    let d = new Date(); //d değişkenine Date fonksiyonunu ata
    let hours = d.getHours();       //
    let mins = d.getMinutes();      //herşeyi yerinden alıp kısayol yap
    let secs = d.getSeconds();      //
    hours = hours < 10 ? "0" + hours : hours        //
    mins = mins < 10 ? "0" + mins : mins            //  Eğer saat , dakika , saniye 10'dan küçükse başına 0 koyar
    secs = secs < 10 ? "0" + secs : secs            //
    clock.innerHTML = `${hours} : ${mins} : ${secs}`//  clock olarak seçtiğimiz elementin innerHTML'ini düzenler
    clock.style.color =  `rgb(${hours*10},${mins*4},${secs*4})`    //clock elementinin style'ını düzenler
    document.body.style.background = `rgba(${hours *10},${mins * 4  },${secs *  4 },0.85)`//body objesinin arkaplan rengini düzenler
    
}, 1000);   //yukarıdaki işlemleri 1000 ms aralıklarla tekrarlar.

let day = document.querySelector("#text3")      //ID'si text3 olan ilk öğeyi seçer
var today = new Date();     //4. satırdakinin kardeşi
var dd = String(today.getDate()).padStart(2, '0');      //
var mm = String(today.getMonth() + 1).padStart(2, '0'); //  5-10. satırlar arasındaki işlemin farklı yazım biçimi
var yyyy = today.getFullYear();                         //

today = mm + '/' + dd + '/' + yyyy;     //Basit String birleştirme (Template Literal kullanılmadan)

setTimeout(() => {  //setTimeout  aşağıdaki kod dizimlerini içeren Callback fonksiyon.(İşlemi belli miktar bekleyip 1 kere yapar)
    day.innerHTML = today + " tarihinde"    //Basit string birleştirme
}, 3000);   //yukarıdaki işlemi 3000 ms sonra gerçekleştir.

let getName = prompt("Lütfen adınızı girin.")           //kullanıcıdan adını alır ve değişkene atar
let selectName = document.querySelector("#myName")      //ID'si myName olan ilk öğeyi seçer
selectName.innerHTML = `${getName}`         //seçtiği öğenin innerHTML'ini Template Literal ile yeniden düzenler.

// 4. satır JavaScript'in içerdiği Date fonksiyonunu değişkene atar.
// 5. 6. 7. satırda d değişkeninin saat, dakika, saniye değerlerini ayrı değişkenlere atar.
// 8. 9. 10. satırda Terminary Operator kullanıldı
// 11. satırda DOM elementleriyle etkileşim sağlandı ve Template Literal kullanılarak değer verildi.
// 12. 13.  satırda DOM elementleriyle etkileşim sağlandı ve Template Literal kullanılarak RGB olarak değer verildi.
// 14. satır setInterval'ın 2. parametresi
// 17. satır setTimeout'un 2. parametresi

// Dikkatinizi çekmesi için değiştirilen innerHTML alanlarına default değer eklendi.