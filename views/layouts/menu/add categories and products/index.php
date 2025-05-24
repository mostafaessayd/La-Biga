<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>dashboard</title>
    <link rel="stylesheet" href="../../../styles/dashboardStyle.css">
    <link rel="stylesheet" href="../../../styles/addCategoriesProductsController.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <div class="features-container">
        <div class="logo-container">
            <div class="first-part-in-logo" style="height: 100%;width:10%;"></div>
            <div class="middle-part-in-logo" style="height: 100%;width:80%; border-bottom:1px solid black;"></div>
            <div class="last-part-in-logo" style="height: 100%;width:10%;"></div>
        </div>
        <div class="available-features-container">
            <div class="container-of-button-in-features">
                <div class="button-container" onclick="location.href='../../../layouts/menu/'">
                    <div class="icon-part-of-button-of-features" id="menu"><i class="fa-solid fa-bars"></i></div>
                    <div class="text-part-of-button-of-features" id="menu-text"></div>
                </div>
            </div>
            <div class="container-of-button-in-features">
                <div class="button-container" onclick="location.href='../../../layouts/orders/'">
                    <div class="icon-part-of-button-of-features" id="orders"><i class="fa-solid fa-pizza-slice"></i></div>
                    <div class="text-part-of-button-of-features" id="orders-text"></div>
                </div>
            </div>
            <div class="container-of-button-in-features">
                <div class="button-container" onclick="location.href='../../../layouts/offers/'">
                    <div class="icon-part-of-button-of-features" id="offers"><i class="fa-solid fa-percent"></i></div>
                    <div class="text-part-of-button-of-features" id="offers-text"></div>
                </div>
            </div>
            <div class="container-of-button-in-features">
                <div class="button-container" onclick="location.href='../../../layouts/settings/'">
                    <div class="icon-part-of-button-of-features" id="settings"><i class="fa-solid fa-gear"></i></div>
                    <div class="text-part-of-button-of-features" id="settings-text"></div>
                </div>
            </div>
            <div class="container-of-button-in-features">
                <div class="button-container" onclick="location.href='../../../layouts/tirelire/'">
                    <div class="icon-part-of-button-of-features" id="tirelire"><i class="fa-solid fa-money-check-dollar"></i></div>
                    <div class="text-part-of-button-of-features" id="tirelire-text"></div>
                </div>
            </div>
            <div class="container-of-button-in-features">
                <div class="button-container" onclick="location.href='../../../layouts/expenses/'">
                    <div class="icon-part-of-button-of-features" id="expenses"><i class="fa-solid fa-basket-shopping"></i></div>
                    <div class="text-part-of-button-of-features" id="expenses-text"></div>
                </div>
            </div>
            <div class="container-of-button-in-features">
                <div class="button-container" onclick="location.href='../../../layouts/profile/'">
                    <div class="icon-part-of-button-of-features" id="profile"><i class="fa-solid fa-user"></i></div>
                    <div class="text-part-of-button-of-features" id="profile-text"></div>
                </div>
            </div>
        </div>
    </div>
    <!--  -->
    <div class="selected-features-content-container">
        <form id="add-category-form" class="form-of-container-card-of-add-categories-and-products" action="../../../../Data/add categories and products/addCategoriesProducts.php" method="post">
            <input type="hidden" name="table" value="categories">
            <div class="container-card-of-add-categories-and-products">
                <div id="card-of-add-category-in-add-categories-and-products">
                    <div class="container-of-single-node-in-card-of-add-category-in-add-categories-and-products">
                        <input type="text" id="add-category-name" name="category_name" placeholder="أدخل إسم الصنف">
                    </div>
                    <div class="container-of-single-node-in-card-of-add-category-in-add-categories-and-products">
                        <button id="button-of-add-category" type="submit"></button>
                    </div>
                    <div class="container-of-single-node-in-card-of-add-category-in-add-categories-and-products">
                        <button id="button-of-ignore-category" type="button"></button>
                    </div>
                    <div class="container-of-single-node-in-card-of-add-category-in-add-categories-and-products">
                        <button id="button-of-go-to-add-product-card" type="button" onclick="convertCardIntoAddProduct()"></button>
                    </div>
                </div>
            </div>
        </form>
        <!--  -->
        <form style="display: none;" id="add-product-form" class="form-of-container-card-of-add-categories-and-products" action="../../../../Data/add categories and products/addCategoriesProducts.php" method="post">
            <input type="hidden" name="table" value="products">
            <input type="hidden" id="description" name="description" value="good">
            <div class="container-card-of-add-categories-and-products">
                <div id="card-of-add-product-in-add-categories-and-products">
                    <div class="container-of-single-node-in-card-of-add-product-in-add-categories-and-products">
                        <input type="text" id="product_name" name="product_name" placeholder="أدخل إسم المنتج">
                    </div>
                    <div class="container-of-single-node-in-card-of-add-product-in-add-categories-and-products"
                    id="select-categories-in-add-product">
                        <!-- <input type="text" id="category" name="category" placeholder="إختر إسم الصنف"> -->
                    </div>
                    <div class="container-of-single-node-in-card-of-add-product-in-add-categories-and-products">
                        <input type="number" id="price" name="price" placeholder="أدخل السعر">
                    </div>
                    <div class="container-of-single-node-in-card-of-add-product-in-add-categories-and-products">
                        <button id="button-of-add-product" type="submit"></button>
                    </div>
                    <div class="container-of-single-node-in-card-of-add-product-in-add-categories-and-products">
                        <button id="button-of-ignore-product" type="button"></button>
                    </div>
                    <div class="container-of-single-node-in-card-of-add-product-in-add-categories-and-products">
                        <button id="button-of-go-to-add-category-card" type="button" onclick="convertCardIntoAddCategory()"></button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</body>
<script src="../../../../Constants/language.js"></script>
<script src="../../../../Controllers/dashboard controllers/dashboardController.js"></script>
<script src="../../../../Controllers/menu controllers/addCategoriesProductsController.js"></script>

</html>