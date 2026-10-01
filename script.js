const products=[
{id:'w1',category:'women',name:'Gul-e-Lahore Peshwas',price:24500,occasion:'Wedding · Festive',fabric:'Chiffon · silk lining',color:'Rosewood',badge:'Hand-finished',image:'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1100&q=88',description:'A flowing peshwas with delicate floral threadwork, a softly gathered waist, and a dupatta made for a graceful entrance. Finished by hand for celebrations that stay with you.',sizes:['XS','S','M','L','XL'],detail:'Embroidered chiffon · 3-piece set · Dry clean'},
{id:'w2',category:'women',name:'Mehr Zari Anarkali',price:31800,occasion:'Formal · Nikkah',fabric:'Raw silk · organza dupatta',color:'Ivory gold',badge:'Bestseller',image:'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1100&q=88',description:'An heirloom-inspired Anarkali in luminous ivory raw silk. Fine zari follows the neckline and hem; the airy organza dupatta brings the whole look together.',sizes:['XS','S','M','L','XL'],detail:'Raw silk · 3-piece set · Lined bodice'},
{id:'w3',category:'women',name:'Chaandni Lawn Suit',price:12900,occasion:'Eid · Daywear',fabric:'Printed lawn · cotton voile',color:'Indigo garden',badge:'New season',image:'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1100&q=88',description:'An easy three-piece lawn suit with a hand-block inspired garden print, an embroidered neckline, and a light cotton voile dupatta for long summer afternoons.',sizes:['XS','S','M','L','XL'],detail:'Premium lawn · 3-piece set · Breathable cotton'},
{id:'m1',category:'men',name:'Shahkaar Embroidered Kurta',price:14900,occasion:'Eid · Formal',fabric:'Cotton silk · subtle zari',color:'Midnight navy',badge:'Signature',image:'https://images.unsplash.com/photo-1603217192097-13c306522271?auto=format&fit=crop&w=1100&q=88',description:'A clean, tailored kurta in a deep midnight tone, with restrained hand embroidery at the placket and cuffs. Refined enough for a formal evening, comfortable through the whole celebration.',sizes:['S','M','L','XL','XXL'],detail:'Cotton silk · Straight fit · Concealed buttons'},
{id:'m2',category:'men',name:'Badshahi Waistcoat Set',price:22900,occasion:'Wedding · Festive',fabric:'Jacquard waistcoat · cotton kurta',color:'Antique beige',badge:'Festive edit',image:'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1100&q=88',description:'A textured jacquard waistcoat paired with a crisp cotton kurta. Tonal woven motifs and antique-finish buttons bring a quiet richness to family celebrations.',sizes:['S','M','L','XL','XXL'],detail:'2-piece set · Woven jacquard · Side pockets'},
{id:'m3',category:'men',name:'Mehfil Classic Shalwar Kameez',price:11800,occasion:'Everyday · Eid',fabric:'Washed cotton · soft finish',color:'Warm sand',badge:'Everyday favourite',image:'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1100&q=88',description:'The classic, made especially comfortable. Soft washed cotton, an easy straight cut, and thoughtful finishing make this a dependable favourite from Friday prayers to Eid visits.',sizes:['S','M','L','XL','XXL'],detail:'2-piece set · 100% cotton · Relaxed fit'},
{id:'c1',category:'children',name:'Chand Sitara Mini Peshwas',price:8900,occasion:'Eid · Party',fabric:'Soft net · cotton lining',color:'Blush pink',badge:'Little celebration',image:'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=1100&q=88',description:'A twirl-ready mini peshwas with tiny star details, soft cotton lining, and a light dupatta. Thoughtfully made for little celebrations and very big smiles.',sizes:['2–3Y','4–5Y','6–7Y','8–9Y','10–11Y'],detail:'2-piece set · Gentle cotton lining · Easy back opening'},
{id:'c2',category:'children',name:'Rang Bagh Kids Kurta Set',price:7600,occasion:'Festive · Family',fabric:'Cotton jacquard · soft pajama',color:'Emerald green',badge:'Family favourite',image:'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1100&q=88',description:'A cheerful jacquard kurta set in a jewel tone, designed with a comfortable easy fit and soft pajama. A festive look that lets little ones stay little.',sizes:['2–3Y','4–5Y','6–7Y','8–9Y','10–11Y'],detail:'2-piece set · Soft cotton · Easy pull-on pajama'},
{id:'c3',category:'children',name:'Noor Little Waistcoat Set',price:10900,occasion:'Wedding · Eid',fabric:'Cotton kurta · woven waistcoat',color:'Ivory & gold',badge:'Mini formal',image:'https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=1100&q=88',description:'A mini formal look with an ivory cotton kurta and a lightweight woven waistcoat. Gold-toned buttons and neat finishing make it picture-ready and still easy to wear.',sizes:['2–3Y','4–5Y','6–7Y','8–9Y','10–11Y'],detail:'2-piece set · Breathable cotton · Soft inner seams'}
];
const categoryCopy={women:{count:'01 / 03',title:'For her, in bloom.',description:'Hand-finished details. Beautifully breathable fabrics. Occasionwear that feels like you.'},men:{count:'02 / 03',title:'For him, with distinction.',description:'Modern Pakistani menswear with thoughtful tailoring and tradition in every detail.'},children:{count:'03 / 03',title:'For little, big moments.',description:'Celebration-ready pieces with soft linings, easy fits, and room to play.'}};
const categoryNames={women:'Women',men:'Men',children:'Children'};let currentCategory='women',currentProduct=null,cart=JSON.parse(localStorage.getItem('dressup-bag')||'[]'),searchTerm='',toastTimer;
const grid=document.querySelector('.product-grid'),toast=document.querySelector('.toast'),money=n=>Number(n).toLocaleString('en-PK');
function paintProducts(){const list=products.filter(p=>p.category===currentCategory&&(!searchTerm||`${p.name} ${p.occasion} ${p.fabric} ${p.color} ${p.description}`.toLowerCase().includes(searchTerm)));const copy=categoryCopy[currentCategory];document.querySelector('.collection-count').textContent=copy.count;document.querySelector('.collection-title').innerHTML=copy.title.replace(/,? /,' <em>').replace(/\.$/,'</em>');document.querySelector('.collection-desc').textContent=copy.description;grid.innerHTML=list.length?list.map((p,i)=>`<article class="product-card" style="animation-delay:${i*70}ms"><div class="product-photo" role="button" tabindex="0" aria-label="View ${p.name}" style="background-image:url('${p.image}')" data-view="${p.id}"><span class="product-badge">${p.badge}</span><span class="view-details">Discover the details <b>↗</b></span></div><div class="product-data"><div class="product-top"><div><h3>${p.name}</h3><p>${p.occasion} · ${p.fabric.split(' · ')[0]}</p></div><span class="price">PKR ${money(p.price)}</span></div><div class="product-detail-line">${p.color} <span>·</span> Sizes ${p.sizes[0]}–${p.sizes[p.sizes.length-1]}</div><div class="product-foot"><span class="color-dots"><i style="--dot:${p.category==='women'?'#aa7069':p.category==='men'?'#343c50':'#7a8061'}"></i><i style="--dot:#c6ad82"></i><i style="--dot:#e5dccc"></i></span><button class="open-product" data-view="${p.id}">View full details ↗</button></div></div></article>`).join(''):`<div class="no-results">No ${categoryNames[currentCategory].toLowerCase()} pieces match that search. <button class="clear-search">Show all pieces</button></div>`;}
function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2400)}
document.querySelectorAll('.category-tab').forEach(button=>button.addEventListener('click',()=>{currentCategory=button.dataset.category;searchTerm='';document.querySelectorAll('.category-tab').forEach(t=>{t.classList.toggle('selected',t===button);t.setAttribute('aria-selected',String(t===button))});paintProducts()}));
grid.addEventListener('click',e=>{if(e.target.closest('.clear-search')){searchTerm='';paintProducts();return}const view=e.target.closest('[data-view]');if(view)openProduct(view.dataset.view)});grid.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('[data-view]')){e.preventDefault();openProduct(e.target.dataset.view)}});
const modal=document.querySelector('.product-modal'),modalBackdrop=document.querySelector('.modal-backdrop');function openProduct(id){currentProduct=products.find(p=>p.id===id);if(!currentProduct)return;const p=currentProduct;document.querySelector('.modal-photo').style.backgroundImage=`url('${p.image}')`;document.querySelector('.modal-category').textContent=`${categoryNames[p.category]} · ${p.occasion}`;document.querySelector('.modal-title').textContent=p.name;document.querySelector('.modal-price').textContent=`PKR ${money(p.price)}`;document.querySelector('.modal-description').textContent=p.description;document.querySelector('.detail-meta').innerHTML=`<span>Fabric: ${p.fabric}</span><span>Colour: ${p.color}</span><span>Details: ${p.detail}</span><span>Free size exchange within 7 days</span>`;document.querySelector('.size-select').innerHTML='<option value="">Choose your size</option>'+p.sizes.map(s=>`<option>${s}</option>`).join('');document.querySelector('.modal-add span').textContent=`PKR ${money(p.price)}`;modal.hidden=false;modalBackdrop.hidden=false;document.body.classList.add('modal-open')}
function closeProduct(){modal.hidden=true;modalBackdrop.hidden=true;document.body.classList.remove('modal-open')}document.querySelector('.modal-close').addEventListener('click',closeProduct);modalBackdrop.addEventListener('click',closeProduct);
document.querySelector('.modal-add').addEventListener('click',()=>{const size=document.querySelector('.size-select').value;if(!size){document.querySelector('.size-select').focus();showToast('Please choose a size first');return}addToCart(currentProduct,size);closeProduct();openBag()});
function saveCart(){localStorage.setItem('dressup-bag',JSON.stringify(cart));paintCart()}
function addToCart(product,size){const found=cart.find(x=>x.id===product.id&&x.size===size);if(found)found.qty++;else cart.push({id:product.id,size,qty:1});saveCart();showToast(`${product.name} added to your bag`)}
function cartTotals(items=cart){const subtotal=items.reduce((sum,item)=>sum+products.find(p=>p.id===item.id).price*item.qty,0),discount=subtotal>15000?Math.round(subtotal*.05):0,delivery=items.length?200:0;return{subtotal,discount,delivery,total:subtotal-discount+delivery}}
function paintCart(){const qty=cart.reduce((s,i)=>s+i.qty,0),totals=cartTotals();document.querySelector('.bag-count').textContent=qty;document.querySelector('.drawer-count').textContent=qty;document.querySelector('.subtotal-amount').textContent=money(totals.subtotal);document.querySelector('.checkout-subtotal').textContent=money(totals.subtotal);document.querySelector('.checkout-discount').textContent=money(totals.discount);document.querySelector('.checkout-delivery').textContent=money(totals.delivery);document.querySelector('.summary-discount').hidden=!totals.discount;document.querySelector('.checkout-total').textContent=money(totals.total);document.querySelector('.checkout-items').innerHTML=cart.map(item=>{const p=products.find(x=>x.id===item.id);return`<article class="checkout-item"><img src="${p.image}" alt="${p.name}" loading="lazy"><span><b>${p.name}</b><small>Size ${item.size} · Qty ${item.qty}</small></span><strong>PKR ${money(p.price*item.qty)}</strong></article>`}).join('');const target=document.querySelector('.bag-items');target.innerHTML=cart.length?cart.map((item,index)=>{const p=products.find(x=>x.id===item.id);return`<article class="bag-row"><div class="bag-row-photo" style="background-image:url('${p.image}')"></div><div><h3>${p.name}</h3><p>Size ${item.size} · PKR ${money(p.price)} each</p><div class="bag-row-controls"><button type="button" data-cart-qty="decrease" data-index="${index}" aria-label="Reduce ${p.name} size ${item.size} quantity">−</button><span aria-live="polite">${item.qty}</span><button type="button" data-cart-qty="increase" data-index="${index}" aria-label="Add ${p.name} size ${item.size} quantity">+</button><button type="button" data-remove="${index}">Remove</button></div></div><span>PKR ${money(p.price*item.qty)}</span></article>`}).join(''):'<div class="empty-bag"><span>✳</span><p>Your bag is waiting for something special.</p></div>'}
const bagDrawer=document.querySelector('.bag-drawer');function openBag(){document.body.classList.add('bag-open-state');bagDrawer.setAttribute('aria-hidden','false')}function closeBag(){document.body.classList.remove('bag-open-state');bagDrawer.setAttribute('aria-hidden','true')}document.querySelector('.bag-open').addEventListener('click',openBag);document.querySelector('.drawer-close').addEventListener('click',closeBag);document.querySelector('.bag-shade').addEventListener('click',closeBag);document.querySelector('.bag-items').addEventListener('click',e=>{
  const quantityControl=e.target.closest('[data-cart-qty]');
  if(quantityControl){
    const index=Number(quantityControl.dataset.index);
    const item=cart[index];
    if(!item)return;
    if(quantityControl.dataset.cartQty==='increase')item.qty++;
    else if(quantityControl.dataset.cartQty==='decrease'){
      item.qty--;
      if(item.qty<=0)cart.splice(index,1);
    }
    saveCart();
    return;
  }
  const remove=e.target.closest('[data-remove]');
  if(remove){cart.splice(Number(remove.dataset.remove),1);saveCart()}
});
const checkout=document.querySelector('.checkout-modal');document.querySelector('.cod-checkout').addEventListener('click',()=>{if(!cart.length){showToast('Add an outfit to your bag first');return}checkout.classList.remove('order-confirmed');document.querySelector('#order-form').hidden=false;document.querySelector('.order-success').hidden=true;checkout.hidden=false;closeBag();document.body.classList.add('checkout-open')});function closeCheckout(){checkout.hidden=true;checkout.classList.remove('order-confirmed');document.body.classList.remove('checkout-open')}document.querySelector('.checkout-close').addEventListener('click',closeCheckout);document.querySelector('.success-close').addEventListener('click',closeCheckout);
document.querySelector('#order-form').addEventListener('submit',async e=>{
  e.preventDefault();
  const form=e.currentTarget;
  if(!cart.length){showToast('Your bag is empty');return}
  const button=form.querySelector('.place-order');
  const originalLabel=button.textContent;
  const orderItems=cart.map(item=>({...item}));
  const totals=cartTotals(orderItems);
  const formData=new FormData(form);
  const tracking=`DU${Date.now().toString().slice(-7)}`;
  const itemLines=orderItems.map(item=>{
    const product=products.find(p=>p.id===item.id);
    return `${product.name} — size ${item.size} — qty ${item.qty} — PKR ${money(product.price*item.qty)}`;
  });
  const message=[
    `Tracking number: ${tracking}`,
    `Customer: ${formData.get('name')}`,
    `Phone: ${formData.get('phone')}`,
    `Address: ${formData.get('address')}`,
    `City: ${formData.get('city')}`,
    '',
    'Items:',
    ...itemLines,
    '',
    `Subtotal: PKR ${money(totals.subtotal)}`,
    `Discount: PKR ${money(totals.discount)}`,
    `Delivery: PKR ${money(totals.delivery)}`,
    `Total: PKR ${money(totals.total)}`
  ].join('\n');
  button.disabled=true;
  button.textContent='Submitting order…';
  try{
    const response=await fetch('https://formsubmit.co/ajax/funkyvibespk@gmail.com',{
      method:'POST',
      headers:{'Content-Type':'application/json','Accept':'application/json'},
      body:JSON.stringify({
        _subject:`New DressUp COD order ${tracking}`,
        name:formData.get('name'),
        phone:formData.get('phone'),
        address:formData.get('address'),
        city:formData.get('city'),
        tracking_number:tracking,
        order_items:itemLines.join('\n'),
        subtotal:`PKR ${money(totals.subtotal)}`,
        discount:`PKR ${money(totals.discount)}`,
        delivery:`PKR ${money(totals.delivery)}`,
        total:`PKR ${money(totals.total)}`,
        message
      })
    });
    const result=await response.json();
    if(!response.ok||result.success===false)throw new Error(result.message||'Unable to send order');
    document.querySelector('.tracking-number strong').textContent=tracking;
    form.hidden=true;
    document.querySelector('.order-success').hidden=false;
    checkout.classList.add('order-confirmed');
    cart=[];
    saveCart();
    form.reset();
  }catch(error){
    showToast('We could not send your order. Please try again.');
  }finally{
    button.disabled=false;
    button.textContent=originalLabel;
  }
});
document.querySelector('.search-open').addEventListener('click',()=>{document.body.classList.add('search-state');document.querySelector('.search-panel').setAttribute('aria-hidden','false');setTimeout(()=>document.querySelector('#search-form input').focus(),100)});function closeSearch(){document.body.classList.remove('search-state');document.querySelector('.search-panel').setAttribute('aria-hidden','true')}document.querySelector('.search-close').addEventListener('click',closeSearch);document.querySelector('#search-form').addEventListener('submit',e=>{e.preventDefault();searchTerm=e.currentTarget.querySelector('input').value.trim().toLowerCase();closeSearch();paintProducts();document.querySelector('#collections').scrollIntoView({behavior:'smooth'})});document.querySelectorAll('.search-hints button').forEach(b=>b.addEventListener('click',()=>{document.querySelector('#search-form input').value=b.textContent;document.querySelector('#search-form').requestSubmit()}));
const mobileNav=document.querySelector('.nav-glass'),mobileToggle=document.querySelector('.mobile-toggle');function setMobileMenu(open){mobileNav.classList.toggle('mobile-open',open);document.body.classList.toggle('mobile-navigation-open',open);mobileToggle.setAttribute('aria-expanded',String(open));mobileToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')}mobileToggle.addEventListener('click',()=>setMobileMenu(!mobileNav.classList.contains('mobile-open')));document.querySelector('.mobile-menu-close').addEventListener('click',()=>setMobileMenu(false));document.querySelectorAll('.nav-glass a,.nav-glass .search-open,.nav-glass .bag-open').forEach(item=>item.addEventListener('click',()=>setMobileMenu(false)));
document.querySelector('#newsletter-form').addEventListener('submit',async e=>{e.preventDefault();const form=e.currentTarget,input=form.querySelector('input[type="email"]'),button=form.querySelector('button'),note=document.querySelector('.newsletter-note'),address=input.value.trim();button.disabled=true;note.textContent='Sending your subscription…';try{const response=await fetch('https://formsubmit.co/ajax/funkyvibespk@gmail.com',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({email:address,_subject:'New subscription for goodies',message:`Please add ${address} to the DressUp newsletter.`})});const result=await response.json();if(!response.ok||result.success===false)throw new Error(result.message||'Unable to send subscription');note.textContent='Thank you — your subscription request was sent. If this is the first one, confirm the activation email in the DressUp inbox.';form.reset()}catch(error){note.textContent='We couldn’t send that just now. Please try again shortly.'}finally{button.disabled=false}});document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeProduct();closeBag();closeSearch();closeCheckout();closeContentModal();setMobileMenu(false)}});
paintProducts();paintCart();
document.querySelectorAll('[data-category-link]').forEach(link=>link.addEventListener('click',()=>{const category=link.dataset.categoryLink;currentCategory=category;searchTerm='';document.querySelectorAll('.category-tab').forEach(tab=>{const selected=tab.dataset.category===category;tab.classList.toggle('selected',selected);tab.setAttribute('aria-selected',String(selected))});paintProducts();document.querySelector('#collections').scrollIntoView({behavior:'smooth'});document.querySelector('.nav-glass').classList.remove('mobile-open')}));
const contentBackdrop=document.querySelector('.content-backdrop');let openContent=null;function closeContentModal(){if(openContent)openContent.hidden=true;openContent=null;contentBackdrop.hidden=true;document.body.classList.remove('modal-open')}document.querySelectorAll('[data-content-modal]').forEach(link=>link.addEventListener('click',e=>{e.preventDefault();openContent=document.querySelector(link.dataset.contentModal==='shipping'?'.content-modal:not(.contact-modal)':' .contact-modal'.trim());if(!openContent)return;contentBackdrop.hidden=false;openContent.hidden=false;document.body.classList.add('modal-open')}));document.querySelectorAll('.content-close').forEach(button=>button.addEventListener('click',closeContentModal));contentBackdrop.addEventListener('click',closeContentModal);
document.querySelector('#contact-form').addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.currentTarget));const body=`From: ${data.name} <${data.email}>\n\n${data.message}`;window.location.href=`mailto:funkyvibespk@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`});
const phoneField=document.querySelector('#order-form input[name="phone"]');phoneField.addEventListener('input',()=>phoneField.setCustomValidity(''));phoneField.addEventListener('invalid',()=>phoneField.setCustomValidity('Invalid mobile number. Enter 11 digits using one of the accepted network prefixes.'));
const backToTop=document.querySelector('.back-to-top');function updateBackToTop(){backToTop.classList.toggle('is-visible',window.scrollY>360)}window.addEventListener('scroll',updateBackToTop,{passive:true});backToTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));updateBackToTop();(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let lastX = -1000;
  let lastY = -1000;
  let lastTime = 0;

  function addSparkle(event) {
    const sparkle = document.createElement('span');
    sparkle.className = 'cursor-sparkle';
    sparkle.setAttribute('aria-hidden', 'true');
    sparkle.textContent = Math.random() > 0.45 ? '✦' : '✧';
    sparkle.style.left = `${event.clientX}px`;
    sparkle.style.top = `${event.clientY}px`;
    sparkle.style.fontSize = `${5 + Math.random() * 7}px`;
    sparkle.style.setProperty('--sparkle-drift-x', `${Math.random() * 28 - 14}px`);
    sparkle.style.setProperty('--sparkle-drift-y', `${-12 - Math.random() * 20}px`);
    sparkle.style.setProperty('--sparkle-duration', `${480 + Math.random() * 320}ms`);
    document.body.appendChild(sparkle);
    sparkle.addEventListener('animationend', () => sparkle.remove(), { once: true });
  }

  function trackPointer(event, force = false) {
    const now = performance.now();
    const dx = event.clientX - lastX;
    const dy = event.clientY - lastY;
    if (!force && (now - lastTime < 28 || dx * dx + dy * dy < 64)) return;

    lastTime = now;
    lastX = event.clientX;
    lastY = event.clientY;
    addSparkle(event);
  }

  document.addEventListener('pointermove', event => trackPointer(event), { passive: true });
  document.addEventListener('pointerdown', event => {
    if (event.pointerType === 'touch') trackPointer(event, true);
  }, { passive: true });
})();
(() => {
  const loader = document.querySelector('#site-loader');
  if (!loader) return;

  const startedAt = performance.now();
  let dismissScheduled = false;
  function dismissLoader() {
    if (dismissScheduled) return;
    dismissScheduled = true;
    const delay = Math.max(0, 650 - (performance.now() - startedAt));
    setTimeout(() => {
      loader.classList.add('is-hidden');
      loader.setAttribute('aria-hidden', 'true');
    }, delay);
  }

  if (document.readyState === 'complete') dismissLoader();
  else window.addEventListener('load', dismissLoader, { once: true });
  setTimeout(dismissLoader, 12000);
})();