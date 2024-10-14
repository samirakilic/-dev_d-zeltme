document.getElementById("shop-form").addEventListener("click",(event)=>{
    event.preventDefault();

    const shop=document.getElementById("shop").value;

    fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({title:shop}),
    }).then((response)=>{
        if(!response.ok){
            throw new Error("Hata");
        }
        return response.json();
    }).then((data)=>{
        const shops=document.getElementById("shop-list");
        const li=document.createElement("li");
        li.textContent=data.title;
        shops.appendChild(li);

        document.getElementById("shop-form").reset();
    
    })
    .catch((err)=>{
        console.log("err",err);
    })
})