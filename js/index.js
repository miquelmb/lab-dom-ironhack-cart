// ITERATION 1

function updateSubtotal(product) {
    const price = product.querySelector(".price span").innerHTML;
    const quantity = product.querySelector(".quantity input").value;
    const subtotal = Number(price * quantity);
    const subtotalElement = product.querySelector(".subtotal span");
    subtotalElement.innerHTML = subtotal;
    return subtotal;
}

function calculateAll() {
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // ITERATION 2
  const productList = document.querySelectorAll(".product")

  let total = 0;
  productList.forEach((singleProduct) => {
      total += updateSubtotal(singleProduct);
  });

  // ITERATION 3
  const allSubtotals = document.querySelector("#total-value span");
  allSubtotals.innerHTML = total;
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //AL CREAR NEUVOS ELEMENTOS CON ITERACIÓN 5, DEJA DE FUNCIONAR REMOVE BUTTONS. INTENTAR ARREGLAS:
  target.parentElement.parentElement.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  let newProductName = document.querySelector('#newProduct');
  let newPrice = document.querySelector('#newPrice');
  const addToTheList = document.querySelector('#tbody');
  addToTheList.innerHTML += `
    <tr class="product">
      <td class="name">
        <span>${newProductName.value}</span>
      </td>
      <td class="price">$<span>${newPrice.value}</span></td>
      <td class="quantity"> 
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>
  `;
  
  //clear input fields
  newProductName.value = "Enter product name";
  newPrice.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //remove buttons
  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach((button) => button.onclick = removeProduct);

  const addElement = document.getElementById('create');
  addElement.addEventListener('click', createProduct);
});
