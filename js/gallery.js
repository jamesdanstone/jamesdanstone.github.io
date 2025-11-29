/* ---------------- BUILD & GROUP GALLERY ---------------- */
function buildGallery(){
  const gallery=document.querySelector(".gallery");
  const imgs=[...gallery.querySelectorAll("img")];
  gallery.innerHTML="";

  let i=0;
  let rowCount=0;

  while(i<imgs.length){

    /* Every 3rd row → Banner */
    if(rowCount===1){
      makeBanner(imgs[i]);
      i++;
      rowCount=0;
      continue;
    }

    /* Last item OR natural banner */
    if(i===imgs.length-1 || isBanner(imgs[i])){
      makeBanner(imgs[i]);
      i++;
      rowCount=0;
      continue;
    }

    /* Row of two */
    makeRow(imgs[i],imgs[i+1]);
    i+=2;
    rowCount++;
  }

  scaleRows();
  staggerReveal();  // ← NEW animation trigger
}

/* ----------------- Helpers ----------------- */
function isBanner(img){
  return (img.naturalWidth/img.naturalHeight) > 2.5;
}

/* -------------- STRUCTURE COMPONENTS ---------------- */
function makeRow(a,b){
  const row=document.createElement("div");
  row.className="row gallery-item";
  row.append(cell(a),cell(b));
  document.querySelector(".gallery").append(row);
}

function makeBanner(img){
  const full=document.createElement("div");
  full.className="full gallery-item";
  full.append(cell(img));
  document.querySelector(".gallery").append(full);
}

function cell(img){
  const box=document.createElement("div");
  box.className="cell";

  const title=document.createElement("div");
  title.className="title";
  title.textContent=img.dataset.title||"Untitled";

  img.onclick=()=>{
    const page=img.dataset.page;
    if(page) location.href=page;
    else openLightbox(img.src);
  };

  box.append(img,title);
  return box;
}

/* ----------- RESPONSIVE ROW SCALING ----------- */
function scaleRows(){
  document.querySelectorAll(".row").forEach(row=>{
    const imgs=[...row.querySelectorAll("img")];
    const r=imgs.map(i=>i.naturalWidth/i.naturalHeight);
    const sum=r[0]+r[1];

    const usable=row.clientWidth-10;
    const H=usable/sum;

    [...row.children].forEach((c,i)=>{
      c.style.flexBasis=(r[i]/sum)*usable+"px";
      c.style.height=H+"px";
    });
  });
}

/* ---------------- LIGHTBOX ---------------- */
function openLightbox(src){
  const lb=document.getElementById("lightbox");
  lb.querySelector("img").src=src;
  lb.style.display="flex";
}
document.getElementById("lightbox").onclick=e=>{
  if(e.target.id==="lightbox") e.target.style.display="none";
};

/* ---------------- LAZY FADE-IN ---------------- */
function lazyLoad(){
  document.querySelectorAll(".gallery img").forEach(img=>{
    const loader=new Image();
    loader.src=img.src;
    loader.onload=()=>img.classList.add("loaded");
  });
}

/* ---------------- ♠ NEW: STAGGERED LAYOUT REVEAL ---------------- */
function staggerReveal(){
  const items=document.querySelectorAll(".gallery-item");
  items.forEach((el,i)=>{
    el.style.opacity=0;
    el.style.transform="translateY(30px)";
    setTimeout(()=>{ 
      el.style.transition="opacity .6s ease, transform .6s ease";
      el.style.opacity=1;
      el.style.transform="translateY(0)";
    }, 120 * i); // delay per item
  });

  document.querySelector(".gallery").classList.add("loaded");
}

/* ---------------- INIT ---------------- */
window.onload=()=>{
  buildGallery();
  lazyLoad();
  scaleRows();

  window.addEventListener("resize",scaleRows);
};    else openLightbox(img.src);
  };

  box.append(img,title);
  return box;
}


/* ----------- PERFECT RESPONSIVE ROW SCALING ----------- */
function scaleRows(){
  document.querySelectorAll(".row").forEach(row=>{
    const imgs=[...row.querySelectorAll("img")];
    const r=imgs.map(i=>i.naturalWidth/i.naturalHeight);
    const sum=r[0]+r[1];

    const usable=row.clientWidth-10;
    const H=usable/sum;

    [...row.children].forEach((c,i)=>{
      c.style.flexBasis=(r[i]/sum)*usable+"px";
      c.style.height=H+"px";
    });
  });
}

/* ---------------- LIGHTBOX ---------------- */
function openLightbox(src){
  const lb=document.getElementById("lightbox");
  lb.querySelector("img").src=src;
  lb.style.display="flex";
}
document.getElementById("lightbox").onclick=e=>{
  if(e.target.id==="lightbox") e.target.style.display="none";
};

/* ---------------- LAZY FADE-IN ---------------- */
function lazyLoad(){
  document.querySelectorAll(".gallery img").forEach(img=>{
    const loader=new Image();
    loader.src=img.src;
    loader.onload=()=>img.classList.add("loaded");
  });
}

/* ---------------- INIT ---------------- */
window.onload=()=>{
  buildGallery();
  lazyLoad();
  window.addEventListener("resize",scaleRows);
};
