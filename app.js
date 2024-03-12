const gbtn=document.getElementById("genebtn");
const singlehex=()=>{
    const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hexcolor="#";
    for(let i=0;i<6;i++)
    {
       let random=Math.floor(Math.random()*hex.length);
       hexcolor += hex[random];
    }
     return hexcolor;
};

const colourpallet=()=>{
    const color=[];
    for(let i=0;i<4;i++)
    {
       color.push(singlehex());
    }
    return color;
}

const rendercolourpallet = ()=>{

    const colourscontainer=document.querySelector(".colours_container");
    colourscontainer.innerHTML="";
    const hex= colourpallet();
    hex.forEach((color,i)=>{
        const colourdiv=document.createElement("div");
        colourdiv.id=`color${i+1}`;
        colourdiv.style.background=color;
        colourdiv.className='colorbox';

        const colortag=document.createElement('p');
        colortag.id='color${i+1}tag';
        colortag.className='colortag';
        colortag.innerHTML=color;
        colourdiv.appendChild(colortag);
        colourscontainer.append(colourdiv);
    });
}

gbtn.addEventListener('click',rendercolourpallet);