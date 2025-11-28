/* ---------------- BUILD & GROUP GALLERY ---------------- */
function buildGallery(){
  const gallery=document.querySelector(".gallery");
  const imgs=[...gallery.querySelectorAll("img")];
  gallery.innerHTML="";

  let i=0;
  while(i<imgs.length){
    if(i===imgs.length-1){ makeBanner(imgs[i]); break; }

    const a=imgs[i], b=imgs[i+1];
    const rA=a.naturalWidth/a.naturalHeight;
    const rB=b.naturalWidth/b.naturalHeight;

    if(rA>2.5 || rB>2.5){
      makeBanner(imgs[i]); i++; continue;
    }

    makeRow(a,b); i+=2;
  }
  scaleRows();
}

/* -------------- STRUCTURE COMPONENTS ---------------- */
function makeRow(a,b){
  const row=document.createElement("div");
  row.className="row";
  row.append(cell(a),cell(b));
  document.querySelector(".gallery").append(row);
}

function makeBanner(img){
  const full=document.createElement("div");
  full.className="full";
  full.append(cell(img));
  document.querySelector(".gallery").append(full);
}

function cell(img){
  const box=document.createElement("div");
  box.className="cell";

  const title=document.createElement("div");
  title.className="title";
  title.textContent=img.dataset.title||"Untitled";

  img.onclick = () => {
  const page = img.dataset.page;
  if(page) location.href = page;
  else openLightbox(img.src);
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

    const usable=row.clientWidth-10; // gutter accounted
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
