

function init(){
    let map = new ymaps.Map('map',{
    center: [45.04915644250809,39.00994648999333],
    zoom: 12
    });
//координаты краснодара

let placemark1 = new ymaps.Placemark([45.05531953464786,39.03108233458325],{
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "shop.html">Выбрать магазин</a><br>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: '<img src="../img/magnit.jpg" height="50" width="165"> <br/>'+
    'Ул. имени 40-летия Победы,<br> д. 174, Краснодар.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>ООО "МАГНИТ"',
    // Зададим содержимое всплывающей подсказки.
},{
    
});
let placemark2 = new ymaps.Placemark([45.0644310094984,39.01478858631604],{
     // Зададим содержимое заголовка балуна.
     balloonContentHeader: '<a href = "shop.html">Выбрать магазин</a><br>',
     // Зададим содержимое основной части балуна.
     balloonContentBody: '<img src="../img/magnit.jpg" height="50" width="165"> <br/>'+
     'Ул. им. Артюшкова В.Д., 2<br> г. Краснодар.',
     // Зададим содержимое нижней части балуна.
     balloonContentFooter: 'Информация предоставлена:<br/>ООО "МАГНИТ"',
     // Зададим содержимое всплывающей подсказки.
},{
});
let placemark3 = new ymaps.Placemark([45.01906657457878,38.9986785],{
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "shop.html">Выбрать магазин</a><br>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: '<img src="../img/magnit.jpg" height="50" width="165"> <br/>'+
    'Ул. Ставропольская, Д. 100,<br> г. Краснодар.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>ООО "МАГНИТ"',
    // Зададим содержимое всплывающей подсказки.
},{
});
let placemark4 = new ymaps.Placemark([45.0709440745844,38.94734849999998],{
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "shop.html">Выбрать магазин</a><br>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: '<img src="../img/magnit.jpg" height="50" width="165"> <br/>'+
    'Ул. Симиренко, Д. 14/1,<br> г. Краснодар.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>ООО "МАГНИТ"',
    // Зададим содержимое всплывающей подсказки.
},{
});
let placemark5 = new ymaps.Placemark([45.02303557458898,38.93997349999995],{
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "shop.html">Выбрать магазин</a><br>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: '<img src="../img/magnit.jpg" height="50" width="165"> <br/>'+
    'Ул. Тургеневское Ш.,Д. 17,<br> аул Новая Адыгея,',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>ООО "МАГНИТ"',
    // Зададим содержимое всплывающей подсказки.
},{
});
let placemark6 = new ymaps.Placemark([45.067512574601174,38.97357049999998],{
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "shop.html">Выбрать магазин</a><br>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: '<img src="../img/magnit.jpg" height="50" width="165"> <br/>'+
    'Ул. Солнечная, Д. 42<br> г. Краснодар.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>ООО "МАГНИТ"',
    // Зададим содержимое всплывающей подсказки.
},{
});
let placemark7 = new ymaps.Placemark([45.0715290745859,39.00441849999994],{
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "shop.html">Выбрать магазин</a><br>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: '<img src="../img/magnit.jpg" height="50" width="165"> <br/>'+
    'Ул. имени Дзержинского,Д. 42<br> г. Краснодар.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>ООО "МАГНИТ"',
    // Зададим содержимое всплывающей подсказки.
},{
});
let placemark8 = new ymaps.Placemark([45.036916074599176,38.93256249999999],{
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "shop.html">Выбрать магазин</a><br>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: '<img src="../img/okey.png" height="50" width="165"> <br/>'+
    'Ул. Минская, Д. 120/8<br> г. Краснодар.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>ООО "ОКЕЙ"',
    // Зададим содержимое всплывающей подсказки.
},{
});
let placemark9 = new ymaps.Placemark([45.02982057460651,39.04623499999999],{
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "shop.html">Выбрать магазин</a><br>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: '<img src="../img/okey.png" height="50" width="165"> <br/>'+
    'Ул. Уральская, Д. 98/11<br> г. Краснодар.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>ООО "ОКЕЙ"',
    // Зададим содержимое всплывающей подсказки.
},{
});
let placemark10 = new ymaps.Placemark([45.087148074574884,39.012449499999896],{
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "shop.html">Выбрать магазин</a><br>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: '<img src="../img/lenta2.png" height="50" width="165"> <br/>'+
    'Ул. Российская, Д. 257<br> г. Краснодар.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>ООО "ЛЕНТА"',
    // Зададим содержимое всплывающей подсказки.
},{
});
let placemark11 = new ymaps.Placemark([45.037757074601345,39.126697],{
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "shop.html">Выбрать магазин</a><br>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: '<img src="../img/lenta2.png" height="50" width="165"> <br/>'+
    'Ул. Восточный обход, Д. 19<br> г. Краснодар.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>ООО "ЛЕНТА"',
    // Зададим содержимое всплывающей подсказки.
},{
});
let placemark12 = new ymaps.Placemark([45.08048457458331,38.893809],{
    // Зададим содержимое заголовка балуна.
    balloonContentHeader: '<a href = "shop.html">Выбрать магазин</a><br>',
    // Зададим содержимое основной части балуна.
    balloonContentBody: '<img src="../img/lenta2.png" height="50" width="165"> <br/>'+
    'Ул. ул. Западный Обход, Д. 29<br> г. Краснодар.',
    // Зададим содержимое нижней части балуна.
    balloonContentFooter: 'Информация предоставлена:<br/>ООО "ЛЕНТА"',
    // Зададим содержимое всплывающей подсказки.
},{
});
map.controls.remove('searchControl');//удаляем поиск
map.controls.remove('geolocationControl');
map.controls.remove('trafficControl');
map.controls.remove('typeSelector');
map.controls.remove('fullscreenControl');
map.controls.remove('rulerControl');
//map.controls.remove(['scrollZoom']);
map.controls.remove('zoomControl');

map.geoObjects.add(placemark1);
map.geoObjects.add(placemark2);
map.geoObjects.add(placemark3);
map.geoObjects.add(placemark4);
map.geoObjects.add(placemark5);
map.geoObjects.add(placemark6);
map.geoObjects.add(placemark7);
map.geoObjects.add(placemark8);
map.geoObjects.add(placemark9);
map.geoObjects.add(placemark10);
map.geoObjects.add(placemark11);
map.geoObjects.add(placemark12);
}


ymaps.ready(init); 