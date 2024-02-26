<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Car Information</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 800px;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            text-align: center;
            color: #333;
        }

        .car-info {
            margin-top: 20px;
            border-top: 1px solid #ccc;
            padding-top: 20px;
        }

        .car-info h2 {
            color: #555;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Car Information</h1>
        <?php
        // Define a basic class 'Car'
        class Car {
            public $brand;
            public $color;

            // Constructor
            public function __construct($brand, $color) {
                $this->brand = $brand;
                $this->color = $color;
                echo "<div class='car-info'>A new $this->color $this->brand car created.</div>";
            }

            // Method to display car information
            public function displayInfo(){
                echo "<div class='car-info'>This is a $this->color $this->brand.</div>";
            }

            // Destructor
            public function __destruct() {
                echo "<div class='car-info'>The $this->color $this->brand car is being destroyed.</div>";
            }
        }

        // Inheriting class 'Car' into 'SportsCar'
        class SportsCar extends Car {
            public $speed;

            // Constructor Overloading within inherited class
            public function __construct($brand, $color, $speed) {
                parent::__construct($brand, $color);
                $this->speed = $speed;
            }

            // Method Overriding
            public function displayInfo(){
                echo "<div class='car-info'>This is a $this->color $this->brand and can speed up to $this->speed mph.</div>";
            }
        }

        // Creating objects from the classes
        $car1 = new Car("Toyota", "red");
        $car1->displayInfo();

        $sportsCar1 = new SportsCar("Ferrari", "red", 200);
        $sportsCar1->displayInfo();
        ?>
    </div>
</body>
</html>
