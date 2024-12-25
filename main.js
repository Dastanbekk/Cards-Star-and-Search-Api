const cards = document.getElementById("cards")
let allProducts = [];
fetch("./db.json")
.then((resolve)=>{
    return resolve.json()
    
}).then((data)=>{
    data.forEach(element => {
        
        let card = document.createElement("card")
        card.classList.add("card")
        card.innerHTML=`
            <img class="productImg" src="${element.image}"/>
            <div>
            <div class="productsTitle">
            <h3>${element.title.slice(0,20)}</h3>
            <h2>${element.price}$</h2>
            </div>
            <p class="productsDesc">${element.description.slice(0,60)}</p>
            </div>

            <div class="stars" id="stars">
                ${generateStars(element.rating.rate)}
              </div>

            <button>Add the cart</button>
        `

        cards.append(card)
    });
    function generateStars(rate) {
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
          starsHTML += `<span class="star ${i <= rate ? 'active' : ''}">&#9733;</span>`;
        }
        return starsHTML;
      }

    document.getElementById("search").addEventListener("input",function(e){
        const query = e.targer.value.toLowerCase();
        const filterProducts = allProducts.filter(data=>{
            data.title.toLowerCase().includes(query)
        })
    })
    
      
}).catch((err)=>{
    console.log(err);  
})


