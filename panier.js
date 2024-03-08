
    const articles = document.querySelectorAll('.article');
    const totalPriceElement = document.querySelector('.total-price');
  
    let totalPrice = 0;
  
    articles.forEach(article => {
      const plusButton = article.querySelector('.plus');
      const moinsButton = article.querySelector('.moins');
      const quantityElement = article.querySelector('.quantity');
      const removeButton = article.querySelector('.remove');
      const likeButton = article.querySelector('.like');

      const chang1 = document.getElementById('modif1')
      chang1.addEventListener('click', changecolor)
      function changecolor(){
        this.style.color='green'
      }
      const chang2 = document.getElementById('modif2')
      chang2.addEventListener('click', changecolor)
      function changecolor(){
        this.style.color='green'
      }
      let quantity = parseInt(quantityElement.textContent);
      plusButton.addEventListener('click', function() {
        quantity++;
        quantityElement.textContent = quantity;
        updateTotalPrice();
      });
      
      // 
      moinsButton.addEventListener('click', function() {
        if (quantity > 0) {
          quantity--;
          quantityElement.textContent = quantity;
          updateTotalPrice();
        }
      });
  
      // fonction pour supprimer un article
      removeButton.addEventListener('click', function() {
        const price = 15000; // Prix de l'article à supprimer
        let totalPrice = quantity * price;
        totalPriceElement.textContent = totalPrice;
        article.remove();
      });

    });
  
    // mis à jour du prix total apres la suppression d'un article
    function updateTotalPrice() {
        let totalPrice = 0;
        articles.forEach(article => {
          let quantity = parseInt(article.querySelector('.quantity').textContent);
          const price = 15000; // Prix de chaque article
          totalPrice = totalPrice + (quantity * price) ;
        });
        totalPriceElement.textContent = totalPrice;
      } 
      updateTotalPrice()     
 
 
  