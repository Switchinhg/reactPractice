const prods = [
    {id:1,name:"Valorant", price:0, desc:"Shooter", img:"N/A"},
    {id:2,name:"Minecraft", price:25, desc:"Building", img:"N/A"},
    {id:3,name:"Cult of the lamb", price:10, desc:"Cultist", img:"N/A"},
    {id:4,name:"Gas station simulator", price:5, desc:"Simulation", img:"N/A"},
]


export const getFetch = (id)=>{
    return new Promise ((resolve)=>{
        setTimeout(() => {
            id?resolve(prods.filter(e=>e.id===id))
            :
            resolve(prods)
        }, 1000);
    })
}