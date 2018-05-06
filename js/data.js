const countries = [
    { name: "Canada", continent: "North America", cities: ["Calgary","Montreal","Toronto"], photos: ["canada1.jpg","canada2.jpg","canada3.jpg"] },
    { name: "United States", continent: "North America", cities: ["Boston","Chicago","New York","Seattle","Washington"], photos: ["us1.jpg","us2.jpg"] },
    { name: "Italy", continent: "Europe", cities: ["Florence","Milan","Naples","Rome"], photos: ["italy1.jpg","italy2.jpg","italy3.jpg","italy4.jpg","italy5.jpg","italy6.jpg"] },
    { name: "Spain", continent: "Europe", cities: ["Almeria","Barcelona","Madrid"], photos: ["spain1.jpg","spain2.jpg"] }
];

let container=document.getElementsByTagName("div")[0];

function addbox(i){
    let box=document.createElement("div");
    container.appendChild(box);
    box.className="item";
    let h2=document.createElement("h2");
    box.appendChild(h2);
    h2.innerHTML=countries[i].name;
    let p=document.createElement("p");
    p.innerHTML=countries[i].continent;
    box.appendChild(p);
    let box1=document.createElement("div");
    box1.className="inner-box";
    box.appendChild(box1);
    let h3=document.createElement("h3");
    h3.innerHTML="Cities";
    box1.appendChild(h3);
    let ul=document.createElement("ul");
    for(let a=0;a<countries[i].cities.length;a++){
        let li=document.createElement("li");
        li.innerHTML=countries[i].cities[a];
        ul.appendChild(li);
    }
    box1.appendChild(ul);
    let box2=document.createElement("div");
    box2.className="inner-box";
    box.appendChild(box2);
    let h32=document.createElement("h3");
    h32.innerHTML="Popular Photos";
    box2.appendChild(h32);
    for(let a=0;a<countries[i].photos.length;a++){
        let photo=document.createElement("img");
        photo.src="images/"+countries[i].photos[a];
        photo.className="photo";
        box2.appendChild(photo);
    }
    let bt=document.createElement("button");
    bt.innerHTML="Visit";
    box.appendChild(bt);
}

addbox(0);
addbox(1);
addbox(2);
addbox(3);