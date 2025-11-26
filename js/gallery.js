/* ALL CODE PROVIDED IN YOUR EXAMPLE — now external + working */

function buildGallery(){
    const gallery=document.querySelector(".gallery");
    const imgs=[...gallery.querySelectorAll("img")];
    gallery.innerHTML="";
    for(let i=0;i<imgs.length;){
        if(i===imgs.length-1){ makeBanner(imgs[i]); break; }
        const a=imgs[i], b=imgs[i+1];
        const ratioA=a.naturalWidth/a.naturalHeight;
        const ratioB=b.naturalWidth/b.naturalHeight;
        if(ratioA>2.5 || ratioB>2.5){ makeBanner(imgs[i]); i++; continue; }
        makeRow(a,b); i+=2;
    }
    scaleRows();
}

function makeRow(a,b){
    const row=document.createElement("div");
    row.className="row";
    row.appendChild(cellFromImg(a));
    row.appendChild(cellFromImg(b));
    document.querySelector(".gallery").appendChild(row);
}

function makeBanner(img){
    const full=document.createElement("div");
    full.className="full";
    full.appendChild(cellFromImg(img));
    document.querySelector(".gallery").appendChild(full);
}

function cellFromImg(img){
    const cell=document.createElement("div");
    cell.className="cell";
    const title=document.createElement("div");
    title.className="title";
    title.textContent = img.dataset.title || "Untitled";
    img.onclick=()=>openLightbox(img.src,img.dataset.title);
    cell.appendChild(img);
    cell.appendChild(title);
    return cell;
}

function scaleRows(){
    document.querySelectorAll(".row").forEach(row=>{
        const cells=[...row.children];
        const imgs=cells.map(c=>c.querySelector("img"));
        const ratios=imgs.map(i=>i.naturalWidth/i.naturalHeight);
        const total=ratios[0]+ratios[1];
        const gap=10;
        const width=row.clientWidth-gap;
        const H=width/total;
        cells.forEach((cell,i)=>{
            cell.style.flexBasis=(ratios[i]/total)*width+"px";
            cell.style.height=H+"px";
        });
    });
}

function openLightbox(src){
    document.getElementById("lightbox").style.display="flex";
    document.querySelector("#lightbox img").src=src;
}
window.onclick=e=>{
    if(e.target.id==="lightbox")document.getElementById("lightbox").style.display="none";
}

window.onload=()=>{
    buildGallery();
    window.addEventListener("resize",scaleRows);
};