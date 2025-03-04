const menu = {
  "Rice & Curry": [
    { name: "Chicken Curry with Rice", price: 800 },
    { name: "Fish Curry with Rice", price: 750 },
    { name: "Dhal Curry with Rice", price: 600 },
    { name: "Beef Curry with Rice", price: 850 },
    { name: "Vegetable Curry with Rice", price: 650 },
    { name: "Egg Curry with Rice", price: 700 },
    { name: "Prawn Curry with Rice", price: 900 },
    { name: "Lamprais", price: 1000 },
    { name: "Yellow Rice with Chicken Curry", price: 850 },
    { name: "Coconut Sambol with Rice", price: 500 },
  ],
  "Street Food & Short Eats": [
    { name: "Fish Cutlets", price: 100 },
    { name: "Vegetable Rolls", price: 100 },
    { name: "Egg Roti", price: 100 },
    { name: "Parippu Vade", price: 50 },
    { name: "Chicken Patties", price: 250 },
    { name: "Samosa", price: 150 },
    { name: "Kottu Roti (Small)", price: 400 },
    { name: "Ulundu Vade", price: 100 },
    { name: "Chicken Lollipops (4 pcs)", price: 600 },
    { name: "Fried Noodles (Small)", price: 450 },
  ],
  "Seafood Specials": [
    { name: "Grilled Jumbo Prawns", price: 1500 },
    { name: "Fish Ambul Thiyal (Sour Fish Curry)", price: 900 },
    { name: "Crab Curry", price: 1200 },
    { name: "Fried Calamari", price: 1000 },
    { name: "Seafood Kottu", price: 1100 },
    { name: "Garlic Butter Shrimp", price: 1300 },
    { name: "Fish and Chips", price: 950 },
    { name: "Prawn Fried Rice", price: 1000 },
    { name: "Seafood Platter (Grilled Fish, Prawns, Calamari)", price: 2000 },
    { name: "Coconut Milk Fish Curry", price: 850 },
  ],
  "Traditional Sri Lankan Dishes": [
    { name: "Hoppers (Plain)", price: 100 },
    { name: "String Hoppers (10 pcs)", price: 300 },
    { name: "Kiri Bath (Milk Rice)", price: 400 },
    { name: "Pol Roti (Coconut Roti)", price: 150 },
    { name: "Pittu", price: 350 },
    { name: "Kukul Mas Curry (Chicken Curry)", price: 800 },
    { name: "Wambatu Moju (Eggplant Pickle)", price: 400 },
    { name: "Gotu Kola Sambol", price: 300 },
    { name: "Jackfruit Curry", price: 600 },
    { name: "Polos Curry (Young Jackfruit Curry)", price: 700 },
  ],
  "Kottu/Kothu": [
    { name: "Chicken Kottu", price: 800 },
    { name: "Vegetable Kottu", price: 700 },
    { name: "Cheese Kottu", price: 900 },
    { name: "Egg Kottu", price: 750 },
    { name: "Seafood Kottu", price: 1100 },
    { name: "Beef Kottu", price: 950 },
    { name: "Mutton Kottu", price: 1000 },
    { name: "Chili Cheese Kottu", price: 1000 },
    { name: "Mushroom Kottu", price: 800 },
    { name: "Special Kottu (Chicken, Egg, Cheese)", price: 1200 },
  ],
  "Chicken Specials": [
    { name: "Fried Chicken (4 pcs)", price: 900 },
    { name: "Chicken Biryani", price: 850 },
    { name: "Chicken Curry", price: 800 },
    { name: "Grilled Chicken", price: 1000 },
    { name: "Chicken Noodles", price: 750 },
    { name: "Chicken Fried Rice", price: 800 },
    { name: "Chicken Satay (4 pcs)", price: 700 },
    { name: "Chicken Lasagna", price: 1100 },
    { name: "Chicken Burger", price: 600 },
    { name: "Chicken Pizza", price: 1200 },
  ],
  "Noodles": [
    { name: "Chicken Noodles", price: 750 },
    { name: "Vegetable Noodles", price: 650 },
    { name: "Seafood Noodles", price: 1000 },
    { name: "Egg Noodles", price: 700 },
    { name: "Spicy Noodles", price: 800 },
    { name: "Fried Noodles", price: 750 },
    { name: "Singapore Noodles", price: 900 },
    { name: "Hakka Noodles", price: 800 },
    { name: "Garlic Noodles", price: 750 },
    { name: "Special Noodles (Chicken, Egg, Veg)", price: 1000 },
  ],
  "Pizza": [
    { name: "Cheese Pizza", price: 1000 },
    { name: "Chicken Pizza", price: 1200 },
    { name: "Vegetable Pizza", price: 1100 },
    { name: "Seafood Pizza", price: 1500 },
    { name: "Pepperoni Pizza", price: 1300 },
    { name: "Mushroom Pizza", price: 1100 },
    { name: "BBQ Chicken Pizza", price: 1400 },
    { name: "Margherita Pizza", price: 1000 },
    { name: "Spicy Pizza", price: 1200 },
    { name: "Special Pizza (All Toppings)", price: 1800 },
  ],
  "Healthy & Vegetarian Options": [
    { name: "Vegetable Stir-Fry", price: 700 },
    { name: "Quinoa Salad", price: 800 },
    { name: "Grilled Veggie Wrap", price: 600 },
    { name: "Lentil Curry with Brown Rice", price: 750 },
    { name: "Avocado Toast", price: 500 },
    { name: "Vegetable Kottu", price: 700 },
    { name: "Fruit Platter", price: 600 },
    { name: "Green Smoothie", price: 400 },
    { name: "Steamed Vegetable Dumplings", price: 550 },
    { name: "Vegan Buddha Bowl", price: 900 },
  ],
  "Salads": [
    { name: "Garden Salad", price: 500 },
    { name: "Chicken Caesar Salad", price: 700 },
    { name: "Seafood Salad", price: 900 },
    { name: "Fruit Salad", price: 600 },
    { name: "Quinoa Salad", price: 800 },
    { name: "Avocado Salad", price: 700 },
    { name: "Greek Salad", price: 750 },
    { name: "Coleslaw", price: 400 },
    { name: "Pasta Salad", price: 600 },
    { name: "Cucumber Salad", price: 450 },
  ],
  "Western Classics": [
    { name: "Grilled Chicken with Mashed Potatoes", price: 1200 },
    { name: "Beef Steak", price: 1500 },
    { name: "Fish and Chips", price: 950 },
    { name: "Spaghetti Bolognese", price: 1000 },
    { name: "Chicken Alfredo Pasta", price: 1100 },
    { name: "Cheeseburger", price: 700 },
    { name: "Club Sandwich", price: 800 },
    { name: "BBQ Ribs", price: 1400 },
    { name: "Mac and Cheese", price: 900 },
    { name: "Chicken Quesadilla", price: 1000 },
  ],
  "Soups": [
    { name: "Chicken Soup", price: 400 },
    { name: "Vegetable Soup", price: 350 },
    { name: "Tomato Soup", price: 300 },
    { name: "Mushroom Soup", price: 400 },
    { name: "Seafood Soup", price: 600 },
    { name: "Corn Soup", price: 350 },
    { name: "Pumpkin Soup", price: 400 },
    { name: "Lentil Soup", price: 300 },
    { name: "Hot and Sour Soup", price: 450 },
    { name: "Cream of Chicken Soup", price: 500 },
  ],
  "Tandoori & Indian Flavors": [
    { name: "Chicken Tikka Masala", price: 1000 },
    { name: "Butter Chicken", price: 1100 },
    { name: "Vegetable Biryani", price: 800 },
    { name: "Garlic Naan", price: 200 },
    { name: "Paneer Tikka", price: 900 },
    { name: "Lamb Curry", price: 1200 },
    { name: "Palak Paneer", price: 800 },
    { name: "Chicken Biryani", price: 900 },
    { name: "Samosa Chaat", price: 400 },
    { name: "Gulab Jamun (2 pcs)", price: 300 },
  ],
  "Desserts & Sweets": [
    { name: "Watalappan", price: 300 },
    { name: "Kavum (Oil Cake)", price: 100 },
    { name: "Kokis", price: 150 },
    { name: "Chocolate Cake", price: 400 },
    { name: "Fruit Salad", price: 500 },
    { name: "Ice Cream (Vanilla)", price: 300 },
    { name: "Pudding", price: 350 },
    { name: "Caramel Custard", price: 400 },
    { name: "Cheesecake", price: 600 },
    { name: "Mango Mousse", price: 500 },
  ],
  "Beverages": [
    { name: "Ceylon Tea", price: 150 },
    { name: "Iced Coffee", price: 300 },
    { name: "Fresh Orange Juice", price: 400 },
    { name: "Mango Juice", price: 350 },
    { name: "Watermelon Juice", price: 350 },
    { name: "Coca-Cola", price: 200 },
    { name: "Sprite", price: 200 },
    { name: "Ginger Beer", price: 250 },
    { name: "Faluda", price: 400 },
    { name: "Lime Juice", price: 300 },
  ],
  "Kids' Menu": [
    { name: "Chicken Nuggets (6 pcs)", price: 500 },
    { name: "Fish Fingers (6 pcs)", price: 550 },
    { name: "Mini Pizza", price: 600 },
    { name: "Spaghetti with Tomato Sauce", price: 500 },
    { name: "Cheese Sandwich", price: 400 },
    { name: "French Fries", price: 300 },
    { name: "Chocolate Milkshake", price: 350 },
    { name: "Ice Cream Sundae", price: 400 },
    { name: "Mini Burger", price: 450 },
    { name: "Fruit Platter", price: 500 },
  ],
};

const orderItems = [];
let totalAmount = 0;

// Initialize the category dropdown
const categorySelect = document.getElementById("category-select");
const itemSelect = document.getElementById("item-select");

// Add default placeholder options
const defaultCategoryOption = document.createElement("option");
defaultCategoryOption.value = "";
defaultCategoryOption.textContent = "Select Category";
defaultCategoryOption.selected = true;
defaultCategoryOption.disabled = true;
categorySelect.appendChild(defaultCategoryOption);

// Populate category dropdown
for (const category in menu) {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  categorySelect.appendChild(option);
}

// Add default placeholder for item dropdown
const defaultItemOption = document.createElement("option");
defaultItemOption.value = "";
defaultItemOption.textContent = "Select Item";
defaultItemOption.selected = true;
defaultItemOption.disabled = true;
itemSelect.appendChild(defaultItemOption);

// Update item dropdown when category changes
categorySelect.addEventListener("change", updateItemDropdown);

// Function to update item dropdown based on selected category
function updateItemDropdown() {
  const selectedCategory = categorySelect.value;
  itemSelect.innerHTML = "";
  
  // Add the default placeholder for item dropdown
  const defaultItemOption = document.createElement("option");
  defaultItemOption.value = "";
  defaultItemOption.textContent = "Select Item";
  defaultItemOption.selected = true;
  defaultItemOption.disabled = true;
  itemSelect.appendChild(defaultItemOption);
  
  if (selectedCategory) {
    menu[selectedCategory].forEach(item => {
      const option = document.createElement("option");
      option.value = JSON.stringify(item);
      option.textContent = `${item.name} - LKR ${item.price}`;
      itemSelect.appendChild(option);
    });
  }
}

// Add selected item to order
function addSelectedItemToOrder() {
  const selectedItemJson = itemSelect.value;
  if (selectedItemJson) {
    const item = JSON.parse(selectedItemJson);
    addToOrder(item);
  } else {
    alert("Please select an item first.");
  }
}

// Add item to order
function addToOrder(item) {
  const existingItem = orderItems.find((orderItem) => orderItem.name === item.name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    orderItems.push({ ...item, quantity: 1 });
  }
  updateOrderTable();
}

// Remove item from order
function removeItem(index) {
  orderItems.splice(index, 1);
  updateOrderTable();
}

// Decrease item quantity
function decreaseQuantity(index) {
  if (orderItems[index].quantity > 1) {
    orderItems[index].quantity -= 1;
  } else {
    orderItems.splice(index, 1);
  }
  updateOrderTable();
}

// Increase item quantity
function increaseQuantity(index) {
  orderItems[index].quantity += 1;
  updateOrderTable();
}

// Clear all items from order and reset dropdowns to default values
function clearOrder() {
  // Clear the order items array
  orderItems.length = 0;
  
  // Reset dropdowns to their default values
  categorySelect.selectedIndex = 0;
  
  // Clear the item dropdown and reset to default
  itemSelect.innerHTML = "";
  const defaultItemOption = document.createElement("option");
  defaultItemOption.value = "";
  defaultItemOption.textContent = "Select Item";
  defaultItemOption.selected = true;
  defaultItemOption.disabled = true;
  itemSelect.appendChild(defaultItemOption);
  
  // Update the order table
  updateOrderTable();
}

// Update order table
function updateOrderTable() {
  const orderTable = document.getElementById("order-items").getElementsByTagName("tbody")[0];
  orderTable.innerHTML = "";
  totalAmount = 0;

  if (orderItems.length === 0) {
    const emptyRow = orderTable.insertRow();
    const emptyCell = emptyRow.insertCell(0);
    emptyCell.colSpan = 5;
    emptyCell.textContent = "No items in order";
    emptyCell.className = "empty-order";
    document.getElementById("total-amount").textContent = "0.00";
    return;
  }

  orderItems.forEach((item, index) => {
    const row = orderTable.insertRow();
    
    row.insertCell(0).textContent = item.name;
    
    // Create quantity cell with controls
    const quantityCell = row.insertCell(1);
    quantityCell.className = "quantity-cell";
    
    const decreaseBtn = document.createElement("button");
    decreaseBtn.textContent = "-";
    decreaseBtn.className = "quantity-btn";
    decreaseBtn.onclick = (e) => {
      e.stopPropagation();
      decreaseQuantity(index);
    };
    
    const quantitySpan = document.createElement("span");
    quantitySpan.textContent = item.quantity;
    quantitySpan.className = "quantity-value";
    
    const increaseBtn = document.createElement("button");
    increaseBtn.textContent = "+";
    increaseBtn.className = "quantity-btn";
    increaseBtn.onclick = (e) => {
      e.stopPropagation();
      increaseQuantity(index);
    };
    
    quantityCell.appendChild(decreaseBtn);
    quantityCell.appendChild(quantitySpan);
    quantityCell.appendChild(increaseBtn);
    
    row.insertCell(2).textContent = `LKR ${item.price}`;
    row.insertCell(3).textContent = `LKR ${item.price * item.quantity}`;
    
    // Add remove button
    const actionCell = row.insertCell(4);
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "×";
    removeBtn.className = "remove-btn";
    removeBtn.onclick = (e) => {
      e.stopPropagation();
      removeItem(index);
    };
    actionCell.appendChild(removeBtn);
    
    totalAmount += item.price * item.quantity;
  });

  document.getElementById("total-amount").textContent = totalAmount.toFixed(2);
}

// Get current date and time formatted nicely
function getCurrentDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString('en-LK', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  const time = now.toLocaleTimeString('en-LK', {
    hour: '2-digit',
    minute: '2-digit'
  });
  return `${date} ${time}`;
}

// Generate a unique order number
function generateOrderNumber() {
  const now = new Date();
  const year = now.getFullYear().toString().slice(-2);
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  
  return `HR-${year}${month}${day}-${hours}${minutes}${seconds}`;
}

// Generate bill with auto print - UPDATED
// Generate bill with optimized printing for 80mm POS printer
function generateBill() {
  if (orderItems.length === 0) {
    alert("Please add items to the order before generating a bill.");
    return;
  }
  
  const orderNumber = generateOrderNumber();
  const dateTime = getCurrentDateTime();
  
  // Create more compact bill content optimized for 80mm paper
  const billContent = `
    <h2>Hela Rasa</h2>
    <p class="info">Contact: 0763300542</p>
    <p class="info">Landline: 0452 231 493</p>
    <p class="info">ATI, Ratnapura</p>
    <hr>
    <p class="order-info"><strong>Order #:</strong> ${orderNumber}</p>
    <p class="order-info"><strong>Date:</strong> ${dateTime}</p>
    <hr>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Qty</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        ${orderItems
          .map(
            (item) => `
          <tr>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.price * item.quantity}</td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>
    <hr>
    <p class="total"><strong>Total: LKR ${totalAmount.toFixed(2)}</strong></p>
    <p class="thanks">Thank you for dining at Hela Rasa!</p>
    <p class="cut">--------- Cut Here ---------</p>
  `;

  const billWindow = window.open("", "Bill", "width=300,height=500");
  billWindow.document.write(`
    <html>
      <head>
        <title>Bill - ${orderNumber}</title>
        <style>
          @page {
            size: 80mm auto;  /* Width 80mm, height auto */
            margin: 0mm;     /* No margins */
          }
          body {
            font-family: Arial, sans-serif;
            font-size: 10px;
            width: 72mm;     /* Actual printable width on 80mm paper */
            margin: 2mm;     /* Small margin */
            padding: 0;
          }
          h2 {
            text-align: center;
            margin: 3px 0;
            font-size: 14px;
          }
          p {
            margin: 2px 0;
            text-align: center;
            line-height: 1.2;
          }
          .info {
            font-size: 9px;
          }
          .order-info {
            text-align: left;
            font-size: 10px;
            margin: 2px 0;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 9px;
            margin: 4px 0;
          }
          th, td {
            padding: 2px;
            text-align: left;
          }
          th:last-child, td:last-child {
            text-align: right;
          }
          th:nth-child(2), td:nth-child(2) {
            text-align: center;
            width: 20px;
          }
          hr {
            border: none;
            border-top: 1px dashed #000;
            margin: 4px 0;
          }
          .total {
            font-size: 12px;
            text-align: right;
            margin: 3px 0;
          }
          .thanks {
            font-size: 10px;
            text-align: center;
            margin-top: 5px;
          }
          .cut {
            font-size: 8px;
            text-align: center;
            margin-top: 10px;
          }
        </style>
        <script>
          // Auto print when loaded and close window after printing
          window.onload = function() {
            setTimeout(function() {
              window.print();
              setTimeout(function() { window.close(); }, 500);
            }, 300);
          }
        </script>
      </head>
      <body>
        ${billContent}
      </body>
    </html>
  `);
  billWindow.document.close();
  
  // Clear the order after generating the bill
  setTimeout(function() {
    clearOrder();
  }, 1000);
}

// Initial call to set up dropdowns
updateItemDropdown();

// Initialize table on page load
updateOrderTable();