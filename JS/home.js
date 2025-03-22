function isUserAuthenticated() {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFhZGl0eWFrdW1hd2F0MTExQGdtYWlsLmNvbSIsImlhdCI6MTc0MDM3NDYxNSwiZXhwIjoxNzQwNDYxMDE1fQ.nSDr9ZRIp1z1-a1W0OBXdNPB6NMFUVjNWbZGZvR4uz4");
    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };
    fetch("https://admin-dev-backend.edvice.in/ping", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            // if (result.success) {
            // let body = document.getElementsByTagName("body");
            // body[0].children[0].remove();
            // } else {
            // window.location.href = '/HTML/signUp.html'
            // console.log(result.error.explanation)
            // }
        })
        .catch((error) => console.error(error));
}
window.onload = isUserAuthenticated;
let datas = [
    {
        id: 1,
        images: "../HomeImages/image 1.png",
        p1: "Syltherine",
        p2: "Stylish cafe chair",
        p3: `Rp 2.500.000 <br> <span class="opacity-50"><del> Rp 3.500.000</del></span>`,
        discounts: "-30%"
    },
    {
        id: 2,
        images: "../HomeImages/bdb0310fb379a6b1828809d2c0652533.png",
        p1: "Leviosa",
        p2: "Stylish cafe chair",
        p3: "Rp 2.500.000",
        discounts: "New"
    },
    {
        id: 3,
        images: "../HomeImages/image 3.png",
        p1: "Lolito",
        p2: "Luxury big sofa",
        p3: `Rp 7.000.000 <br> <span class="opacity-50"><del> Rp 14.000.000</del></span>`,
        discounts: "-30%"
    },
    {
        id: 4,
        images: "../HomeImages/image 4.png",
        p1: "Respira",
        p2: "Outdoor bar table and stool",
        p3: "Rp 500.000",
        discounts: "New"
    },
    {
        id: 5,
        images: "../HomeImages/Images.png",
        p1: "Grifo",
        p2: "Night lamp",
        p3: "Rp 1.500.000",
        discounts: "-30%"
    },
    {
        id: 6,
        images: "../HomeImages/image 6.png",
        p1: "Muggo",
        p2: "Small mug",
        p3: "Rp 150.000",
        discounts: "New"
    },
    {
        id: 7,
        images: "../HomeImages/Images (1).png",
        p1: "Pingky",
        p2: "Cute bed set",
        p3: `Rp 7.000.000 <br> <span class="opacity-50"><del>Rp 14.000.000</del></span>`,
        btn: "Add to cart",
        discounts: "-30%"
    },
    {
        id: 8,
        images: "../HomeImages/Images (2).png",
        p1: "Potty",
        p2: "Minimalist flower pot",
        p3: "Rp 500.000",
        discounts: "New"
    }
]


let main_row = document.getElementById("div-row")
function getData() {
    datas.map((values) => {
        main_row.innerHTML += `
                        <div class="col-lg-3 col-md-4 col-sm-6 mt-3">
                            <div class="bg-body-secondary position-relative mainorder overflow-hidden"
                                style="height: 100%;">
                                <img width="100%" height="70%" style="object-fit: cover;"
                                    src="${values.images}" alt="">
                                <div class="positions">
                                    <p class="p-4 up">${values.discounts}</p>
                                </div>
                                <div class="p-3 mediatext">
                                    <p class="fs-5 fw-bold" style="margin-top: -10px;">${values.p1}</p>
                                    <p class="opacity-75" style="margin-top: -10px;">${values.p2}</p>
                                    <p class="fw-bold" style="margin-top: -10px;">${values.p3}</p>
                                </div>
                                <div class="p-4 topposition">
                                    <div class="text-center">
                                            <button class="upcart" id="upcart" onclick="addCartItem()">Add to cart</button>
                                        <div class="d-flex text-light gap-3 mt-3">
                                            <p><i class="fa-share-nodes fa-solid"></i>Share</p>
                                            <p><i class="fa-arrow-right-arrow-left fa-solid"></i>Compare</p>
                                            <p><i class="fa-heart fa-regular"></i>Like</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
    })
}
getData();
function placeHolder() {
    [1, 2, 3, 4, 5, 6, 7, 8].map(() => {
        let main_row = document.getElementById("main-row");
        let main_div = document.createElement("div")
        main_div.classList.add("col-sm-6", "col-lg-3", "col-md-4", "mt-3");
        main_row.appendChild(main_div)
        let card = document.createElement("div");
        card.classList.add("card")
        card.ariaHidden = "true"
        main_div.appendChild(card);
        let card_body = document.createElement("div");
        card_body.classList.add("card-body")
        card.appendChild(card_body);
        let h5 = document.createElement("h5");
        h5.classList.add("card-title", "placeholder-glow");
        card_body.appendChild(h5);
        let span = document.createElement("span");
        span.classList.add("placeholder", "col-6", "w-100");
        span.style.height = "200px";
        h5.appendChild(span);
        let p = document.createElement("p");
        p.classList.add("card-text", "placeholder-glow", "d-flex", "gap-3")
        p.style.flexDirection = "column";
        card_body.appendChild(p);
        let span1 = document.createElement("span");
        span1.classList.add("placeholder", "col-5", "mt-3");
        span1.style.height = "20px";
        let span2 = document.createElement("span");
        span2.classList.add("placeholder", "col-6");
        span2.style.height = "20px";
        let span3 = document.createElement("span");
        span3.classList.add("placeholder", "col-7");
        span3.style.height = "20px";
        p.appendChild(span1);
        p.appendChild(span2);
        p.appendChild(span3);
    })
};
placeHolder();

setTimeout(() => {
    let divRow = document.getElementById("div-row");
    divRow.style.display = "none"
}, 0);
setTimeout(() => {
    let mainRow = document.getElementById("main-row");
    mainRow.style.display = "none"
    let divRow = document.getElementById("div-row");
    divRow.style.display = "flex"
}, 3000);


function addCartItem() {
    let addCart = document.getElementById("upcart");
    addCart.addEventListener('click', () => {
        alert("Product Added in cart");
        productAddForCart()
    })
}


let addedCart = document.getElementById("addedCart");
function productAddForCart() {
    datas.map((value) => {
        addedCart.innerHTML += `
            <div class="d-flex align-items-center w-100 gap-4 mt-5">
                        <div style="background-color: #efe6d1; width: 50%; border-radius: 10px;">
                            <img style="border-radius: 10px; object-fit: cover;" width="100%" src="${value.images}"
                                alt="">
                        </div>
                        <div style="width: 50%;">
                            <p class="fw-bold">${value.p1}</p>
                                <p>${value.p3}</p>
                        </div>
                        <div>
                            <button id="deleteCartProduct" onclick="deleteCartProducts()"><i class="fa-circle-xmark fa-regular"></i></button>
                        </div>
                    </div>
        `
    })

}

function deleteCartProducts() {
    let deleteCartProduct = document.getElementById("deleteCartProduct");

    deleteCartProduct.addEventListener("click", () => {
        addedCart.innerHTML = ""
    })
}



