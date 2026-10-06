const moedatiSections = (document.querySelector('.app-inner').querySelectorAll('section'));

const makeSS5ContainerMove = function(){
const slider = document.querySelector('.ss5-container');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
isDown = true;
slider.classList.add('active');
startX = e.pageX - slider.offsetLeft;
scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => isDown = false);
slider.addEventListener('mouseup', () => isDown = false);
slider.addEventListener('mousemove', e => {
if (!isDown) return;
e.preventDefault();
const x = e.pageX - slider.offsetLeft;
const walk = (x - startX) * 2;
slider.scrollLeft = scrollLeft - walk;
});
};
const pushProductsTosec5 = function(){
const cardsContEle = document.querySelector(".ss5-container");
for (const [i,product] of products.entries()){
cardsContEle.insertAdjacentHTML(
"afterbegin",
 `<a  class="sedig-card-anchor" href="${product.link}">
<div class="single-card-div flex-column">
<div class="sedig-cards-image-div flex-row">
<img class="product-img" src="${product.imglink}" alt="" />
</div>
<div class="body-div flex-column">
<div class="name-disc-div flex-column rtl-desi">
<span class="mycard-name-product-span">
${product.name}
</span>
<span class="mycard-body-product-span">
${product.discri}
</span>
</div>

<div class="sedig-price-div flex-row">
<div class="sedig-single-price-div flex-row">
<span class="sedig-card-product-price-span">
${sedigAddTaxWithDisc(product.price)}
</span>
<i class="sicon-sar my-sicon-sar"></i>
</div>
<div class="sedig-single-price-div sedig-single-old-price-div flex-row">
<span class="sedig-card-product-price-span sedig-card-product-old-price-span">
${sedigAddTax(product.price)}
</span>
<i class="sicon-sar my-sicon-sar sedig-card-product-old-price-span"></i>
</div>
</div>

<div class="sedig-cardicon-add-to-card-div flex-row">
<div class="cart-icon-div sedig-cards-btns-hover flex-row">
<i class="inline-block sicon-cart2"></i>
</div>
<div class="add-to-card-div sedig-cards-btns-hover flex-row">
<span class="add-to-card-span">شراء الآن</span>
</div>
</div>
</div>
</div>
</a>
`
);
if(i === 6){
cardsContEle.insertAdjacentHTML(
"beforeend",
`
<div class="single-card-div single-card-div-last-one flex-column">
<div class="ss5-other-items-imgs flex-row">
<div class="ss5-single-item-other  flex-row"      onclick='window.location.href="${products[6].link}";'
 >
<img src="${products[6].imglink}"  alt="" class="ss5-single-other-item-img">
</div>
<div class="ss5-single-item-other ss5-img-tansme flex-row"
 onclick='window.location.href="${products[7].link}";'
>
<img src="${products[7].imglink}"  alt="" class="ss5-single-other-item-img">
</div>
<div class="ss5-single-item-other flex-row"
onclick='window.location.href="${products[8].link}";'
>
<img src="${products[8].imglink}"  alt="" class="ss5-single-other-item-img">
</div>
<div class="ss5-single-item-other ss5-img-tansme flex-row"
onclick='window.location.href="${products[9].link}";'
>
<img src="${products[9].imglink}"  alt="" class="ss5-single-other-item-img">
</div>
<div class="ss5-single-item-other flex-row"
onclick='window.location.href="${products[10].link}";'
>
<img src="${products[10].imglink}"  alt="" class="ss5-single-other-item-img">
</div>
<div class="ss5-single-item-other ss5-img-tansme flex-row"
onclick='window.location.href="${products[11].link}";'
>
<img src="${products[11].imglink}"  alt="" class="ss5-single-other-item-img">
</div>
</div>
<div class="ss5-btn-show-more-div flex-row"
onclick='window.location.href="https://moedati.com/ar/redirect/pages/571218989";'
>
مشاهدة المزيد
</div>
</div>
`
);
break;
}
}
}
  
moedatiSections[2].insertAdjacentHTML('afterend', `
  <section >
  <div class="ss5-container">
  </div>
  </section>
`
);
if (isHomePage()){
makeSS5ContainerMove();
pushProductsTosec5 ();
}