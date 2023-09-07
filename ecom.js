// Search box
const searchButton = document.getElementById("searchButton");
const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");

searchButton.addEventListener("click", () => {
  searchBox.classList.toggle("hidden");
  if (!searchBox.classList.contains("hidden")) {
    searchInput.focus();
  }
});


searchInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const searchTerm = searchInput.value.trim().toLowerCase(); // Convert the search term to lowercase for case-insensitive search
    if (searchTerm) {
      // Filter the products based on the search term
      const filteredProducts = mergedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      );

      // Display the filtered products
      displayProducts(filteredProducts);
    } else {
      // If the search term is empty, display all products
      displayProducts(mergedProducts);
    }
  }
});



function toggleForm() {
  const productForm = document.getElementById("productForm");
  productForm.classList.toggle("hidden");
}

const toggleFormButton = document.getElementById("toggleFormButton");
toggleFormButton.addEventListener("click", toggleForm);

// Product data
const prod = [
  {
    name: "Surface Laptop Studio",
    description: "Flex your creativity on Surface Laptop.",
    price: 99.99,
    imageUrl:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Studio-01-CP?wid=380&hei=213&fit=crop",
  },
  {
    name: "Microsoft 365",
    description: "Turn your ideas into reality.",
    price: 79.99,
    imageUrl:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-365-Lifestyle-Sandstone-Icon-Toss?wid=380&hei=213&fit=crop",
  },
  {
    name: "Xbox Series X",
    description: "The fastest, most powerful Xbox ever.",
    price: 99.99,
    imageUrl:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSX-CP-Xbox-Series-X?wid=380&hei=213&fit=crop",
  },
  {
    name: "Xbox Series S",
    description: "Next-gen performance in Xbox ever. ",
    price: 99.99,
    imageUrl:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSS-CP-Xbox-Series-S-Evergreen?wid=380&hei=213&fit=crop",
  },
];

// Display products
function displayProducts(products) {
  const card = document.getElementById("productCards");
  card.innerHTML = "";

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add(
      "product-card",
      "mx-4",
      "mb-4",
      "md:w-1/2",
      "lg:w-1/3",
      "xl:w-1/4",
      "max-w-[300px]",
      "border",
      "border-gray-300",
      "rounded-lg",
      "overflow-hidden"
    );

    productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${
      product.name
    }" class="w-full h-auto">
            <div class="p-4">
                <h3 class="text-lg font-semibold">${product.name}</h3>
                <p class="text-gray-600">${product.description}</p>
                <div class="mt-4 flex justify-between items-center">
                    <span class="text-xl font-bold text-black">$${product.price.toFixed(
                      2
                    )}</span>
                    <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">Buy Now</button>
                </div>
            </div>
        `;

    card.appendChild(productCard);
  });
}

// Add a product
function addProduct() {
  const productNameInput = document.getElementById("productName");
  const productDescriptionInput = document.getElementById("productDescription");
  const productPriceInput = document.getElementById("productPrice");
  const productimgip = document.getElementById("productimg");

  const productName = productNameInput.value;
  const productDescription = productDescriptionInput.value;
  const productPrice = parseFloat(productPriceInput.value);
  const productimg = productimgip.value;

  if (productName && productDescription && !isNaN(productPrice)) {
    const newProduct = {
      name: productName,
      description: productDescription,
      price: productPrice,
      imageUrl: productimg,
    };

    const storedProducts = JSON.parse(localStorage.getItem("prod")) || [];
    storedProducts.push(newProduct);

    localStorage.setItem("prod", JSON.stringify(storedProducts));

    productNameInput.value = "";
    productDescriptionInput.value = "";
    productPriceInput.value = "";
    productimgip.value = "";

    const mergedProducts = [...prod, ...storedProducts];
    displayProducts(mergedProducts);
  } else {
    alert("Please fill in all fields with valid values.");
  }
}

const addProductButton = document.getElementById("addProductButton");
addProductButton.addEventListener("click", addProduct);

// Retrieve and display products from local storage initially
const storedProducts = JSON.parse(localStorage.getItem("prod")) || [];
const mergedProducts = [...prod, ...storedProducts];
displayProducts(mergedProducts);

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Populate the product dropdown with options
function populateProductDropdown(products) {
  const productDropdown = document.getElementById("productDropdown");

  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.name.toLowerCase();
    option.textContent = product.name;
    productDropdown.appendChild(option);
  });
}

// Event listener for the product dropdown
document.getElementById("productDropdown").addEventListener("change", (event) => {
  const selectedProduct = event.target.value;

  if (selectedProduct) {
    const filteredProducts = mergedProducts.filter((product) =>
      product.name.toLowerCase() === selectedProduct
    );
    displayProducts(filteredProducts);
  } else {
    displayProducts(mergedProducts);
  }
});

// Call the function to populate the product dropdown
populateProductDropdown(mergedProducts);




// const arr1 = [
//   {
//     id: 1,
//     name: "Surface Laptop Studio",
//     description: "Flex your creativity on Surface Laptop.",
//     price: 99.99,
//     imageUrl:
//       "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Studio-01-CP?wid=380&hei=213&fit=crop",
//   },
//   {
//     id: 2,
//     name: "Microsoft 365",
//     description: "Turn your ideas into reality.",
//     price: 79.99,
//     imageUrl:
//       "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-365-Lifestyle-Sandstone-Icon-Toss?wid=380&hei=213&fit=crop",
//   },
//   {
//     id: 3,
//     name: "Xbox Series X",
//     description: "The fastest, most powerful Xbox ever.",
//     price: 99.99,
//     imageUrl:
//       "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSX-CP-Xbox-Series-X?wid=380&hei=213&fit=crop",
//   },
//   {
//     id: 4,
//     name: "Xbox Series S",
//     description: "Next-gen performance in Xbox ever.",
//     price: 99.99,
//     imageUrl:
//       "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSS-CP-Xbox-Series-S-Evergreen?wid=380&hei=213&fit=crop",
//   },
// ];

// const arr2 = [
//   {
//     productId: 1,
//     discount: 10,
//   },
//   {
//     productId: 3,
//     discount: 15,
//   },
//   {
//     productId: 2,
//     discount: 25,
//   },
// ];

// // for (let i = 0; i < arr1.length; i++) {
// //   for (let j = 0; j < arr2.length; j++) {
// //     if (arr1[i].id == arr2[j].productId) {
// //       arr1[i].discount = arr2[j].discount;
// //     }
// //   }
// // }
// const map = new Map()

// for (let i = 0; i < arr2.length; i++) {
//   const item = arr2[i];
// //   map[item.productId] = item.discount;
// map.set(item.productId, item.discount)
// }

// console.log(map);

// for (let i = 0; i < arr1.length; i++) {
//   const item = arr1[i];
//   const discount = map.get(item.id);
//   if (discount) arr1[i].discount = discount;
// }

// console.log(arr1);


// function f1 (num, a , b) {
//     if(num & 1 === 1) {
//         console.log("odd");
//     } else {
//         console.log("even");
//     }
// }

// // function f2 () {
// //     console.log('Even')
// // }

// // function f3 () {
// //     console.log('Odd')
// // }

// // f1(10, f2, f3)