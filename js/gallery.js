/* ===============================
 GALLERY – FIXED VERSION
 Now waits for images to load before grouping
===============================*/

let imagesLoaded = 0;

function initGallery(){
    const imgs = document.querySelectorAll(".gallery img");
    imgs.forEach(img => {
        const temp = new Image();
        temp.src = img.src;
        temp.onload = () => {
            img.classList.add("loaded");
            imagesLoaded++;

            /* Only build layout once ALL images have dimensions */
            if(imagesLoaded === imgs.length){
                buildGallery();
                lazyFade();
                window.addEventListener("resize", scaleRows);
            }
        };
    });
}

function buildGallery(){
    const gallery=document.querySelector(".gallery");
    const imgs=[...gallery.querySelectorAll("img")];
    gallery.innerHTML="";

    for(let i=0;i<imgs.length;){
        if(i===imgs.length-1){
            makeBanner(imgs[i]); break;
        }

        const A=imgs[i], B=imgs[i+1];
        const rA=A.naturalWidth/A.naturalHeight;
        const rB=B.naturalWidth/B.naturalHeight;

        if(rA>2.6 || rB>2.6){
            makeBanner(imgs[i]); i++; continue;
        }

        makeRow(A,B); i+=2;
    }
    scaleRows();
}

function makeRow(a,b){
    const row=document.createElement("div");
    row.className="row";
    row.appendChild(cell(a));
    row.appendChild(cell(b));
    document.querySelector(".gallery").appendChild(row);
}
function makeBanner(img){
    const full=document.createElement("div");
    full.className="full";
    full.appendChild(cell(img));
    document.querySelector(".gallery").appendChild(full);
}

/* Wrap image + title overlay */
function cell(img){
    const box=document.createElement("div");
    box.className="cell";

    const title=document.createElement("div");
    title.className="title";
    title.textContent=(img.dataset.title || "Untitled");

    box.appendChild(img);
    box.appendChild(title);

    img.onclick=()=>openLightbox(img.src);
    return box;
}

/* Row height calc */
function scaleRows(){
    document.querySelectorAll(".row").forEach(row=>{
        const imgs=[...row.querySelectorAll("img")];
        const ratios=imgs.map(i=>i.naturalWidth/i.naturalHeight);
        const total=ratios[0]+ratios[1];
        const full=row.clientWidth-10;
        const H=full/total;

        row.children[0].style.cssText=`flex:${ratios[0]};height:${H}px`;
        row.children[1].style.cssText=`flex:${ratios[1]};height:${H}px`;
    });
}

/* Smooth fade like reference */
function lazyFade(){
    document.querySelectorAll(".gallery img").forEach(img=> img.classList.add("loaded") );
}

/* Lightbox */
function openLightbox(src){
    const lb=document.getElementById("lightbox");
    lb.querySelector("img").src=src;
    lb.style.display="flex";
    lb.onclick=()=>lb.style.display="none";
}

/* NOW WORKS CONSISTENTLY */
initGallery();