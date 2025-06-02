<?php
$conn = new mysqli('localhost', 'root', '', 'LaBiga');
if ($conn->connect_error) {
    die('connection failed ' . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $nameOfOffer = $_POST['name-of-offer'];
    $dateOfEnd = $_POST['date-of-end'];
    $priceOfOffer = $_POST['price-of-offer'];
    $availableOffers = $_POST['available-product-in-offer-hidden-value'];
    $sql_query = "INSERT INTO `offers` (`id`, `name`, `available_offers`, `price`, `date_of_end`) VALUES (NULL, '$nameOfOffer', '$availableOffers', '$priceOfOffer', '$dateOfEnd');";
    $conn->query($sql_query);
}
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>dashboard</title>
    <link rel="stylesheet" href="../../styles/dashboardStyle.css">
    <link rel="stylesheet" href="../../styles/offersStyle.css">
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
                <div class="button-container" onclick="location.href='../../layouts/menu/'">
                    <div class="icon-part-of-button-of-features" id="menu"><i class="fa-solid fa-bars"></i></div>
                    <div class="text-part-of-button-of-features" id="menu-text"></div>
                </div>
            </div>
            <div class="container-of-button-in-features">
                <div class="button-container" onclick="location.href='../../layouts/orders/'">
                    <div class="icon-part-of-button-of-features" id="orders"><i class="fa-solid fa-pizza-slice"></i></div>
                    <div class="text-part-of-button-of-features" id="orders-text"></div>
                </div>
            </div>
            <div class="container-of-button-in-features">
                <div class="button-container" onclick="location.href='../../layouts/offers/'">
                    <div class="icon-part-of-button-of-features" id="offers"><i class="fa-solid fa-percent"></i></div>
                    <div class="text-part-of-button-of-features" id="offers-text"></div>
                </div>
            </div>
            <div class="container-of-button-in-features">
                <div class="button-container" onclick="location.href='../../layouts/settings/'">
                    <div class="icon-part-of-button-of-features" id="settings"><i class="fa-solid fa-gear"></i></div>
                    <div class="text-part-of-button-of-features" id="settings-text"></div>
                </div>
            </div>
            <div class="container-of-button-in-features">
                <div class="button-container" onclick="location.href='../../layouts/tirelire/'">
                    <div class="icon-part-of-button-of-features" id="tirelire"><i class="fa-solid fa-money-check-dollar"></i></div>
                    <div class="text-part-of-button-of-features" id="tirelire-text"></div>
                </div>
            </div>
            <div class="container-of-button-in-features">
                <div class="button-container" onclick="location.href='../../layouts/expenses/'">
                    <div class="icon-part-of-button-of-features" id="expenses"><i class="fa-solid fa-basket-shopping"></i></div>
                    <div class="text-part-of-button-of-features" id="expenses-text"></div>
                </div>
            </div>
            <div class="container-of-button-in-features">
                <div class="button-container" onclick="location.href='../../layouts/profile/'">
                    <div class="icon-part-of-button-of-features" id="profile"><i class="fa-solid fa-user"></i></div>
                    <div class="text-part-of-button-of-features" id="profile-text"></div>
                </div>
            </div>
        </div>
    </div>
    <!--  -->
    <div class="selected-features-content-container">
        <div id="container-of-offers">
            <!-- filling by js functions -->
            <div id="container-of-show-offers">
                <!--  -->
            </div>
            <!--  -->
            <div id="contaier-of-form-of-add-new-offer" style="display: none;">
                <div class="part-of-add-product-into-offer">
                    <div id="part-of-select-category-in-add-new-offer">
                        <!-- filling by js -->
                    </div>
                    <div id="part-of-select-product-in-add-new-offer">
                        <!-- filling by js -->
                    </div>
                    <div class="container-of-single-componant-in-add-new-offer"><input type="number" id="products-number-in-offer"></div>
                    <div class="container-of-single-componant-in-add-new-offer"><button onclick="addProductIntoOffer()"
                            id="add-product-in-offer-button"></button></div>
                    <div class="container-of-single-componant-in-add-new-offer"><button onclick="backToShowOffersPage()"
                            id="back-to-show-offers-button"></button></div>
                </div>

                <div class="part-of-confirm-or-ignore-created-offer">
                    <form method="POST" style="height: 100%;width:100%;">
                        <div class="offer-name-in-form-of-add-offer">
                            <input type="text" name="name-of-offer" id="name-of-offer">
                            <input type="date" name="date-of-end">
                            <input type="number" name="price-of-offer" id="price-of-offer">
                        </div>
                        <div class="available-products-in-offer-container">
                            <input type="hidden" id="available-product-in-offer-hidden-value"
                                name="available-product-in-offer-hidden-value">
                            <div id="available-product-in-offer">
                                <!-- filling by js -->
                            </div>
                        </div>
                        <div class="container-of-button-in-form-of-add-offer"><input type="submit"
                                id="confirm-add-offer-button"></div>
                        <div class="container-of-button-in-form-of-add-offer"><input type="button"
                                id="ignore-add-offer-button"></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
</body>
<script src="../../../Constants/language.js"></script>
<script src="../../../Controllers/dashboard controllers/dashboardController.js"></script>
<script src="../../../Controllers/offers controllers/offersController.js"></script>
<script src=""></script>

</html>