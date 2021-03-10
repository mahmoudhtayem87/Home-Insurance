export class Vehicles
{
    public getVehiclesByMake(make:string)
    {
        return this.Vehicles.filter(vehicle=> vehicle.make === make);
    }
    public get Makes()
    {
        return this._Makes;
    }
    _Makes = [
        {
          "make": "Acura"
        },
        {
          "make": "Alfa Romeo"
        },
        {
          "make": "Aston Martin"
        },
        {
          "make": "Audi"
        },
        {
          "make": "Bentley"
        },
        {
          "make": "BMW"
        },
        {
          "make": "Buick"
        },
        {
          "make": "Cadillac"
        },
        {
          "make": "Chevrolet"
        },
        {
          "make": "Chrysler"
        },
        {
          "make": "Dodge"
        },
        {
          "make": "Ferrari"
        },
        {
          "make": "FIAT"
        },
        {
          "make": "Ford"
        },
        {
          "make": "Freightliner"
        },
        {
          "make": "Genesis"
        },
        {
          "make": "GMC"
        },
        {
          "make": "Honda"
        },
        {
          "make": "Hyundai"
        },
        {
          "make": "INFINITI"
        },
        {
          "make": "Jaguar"
        },
        {
          "make": "Jeep"
        },
        {
          "make": "Kia"
        },
        {
          "make": "Lamborghini"
        },
        {
          "make": "Land Rover"
        },
        {
          "make": "Lexus"
        },
        {
          "make": "Lincoln"
        },
        {
          "make": "Maserati"
        },
        {
          "make": "MAZDA"
        },
        {
          "make": "McLaren"
        },
        {
          "make": "Mercedes-Benz"
        },
        {
          "make": "MINI"
        },
        {
          "make": "Mitsubishi"
        },
        {
          "make": "Nissan"
        },
        {
          "make": "Porsche"
        },
        {
          "make": "Ram"
        },
        {
          "make": "Rolls-Royce"
        },
        {
          "make": "smart"
        },
        {
          "make": "Subaru"
        },
        {
          "make": "Tesla"
        },
        {
          "make": "Toyota"
        },
        {
          "make": "Volkswagen"
        },
        {
          "make": "Volvo"
        }
      ];
    Vehicles = [
        {
          "year": 2019,
          "make": "Acura",
          "model": "ILX",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Acura",
          "model": "MDX",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Acura",
          "model": "MDX Sport Hybrid",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Acura",
          "model": "NSX",
          "body_styles": [
            "Coupe"
          ]
        },
        {
          "year": 2019,
          "make": "Acura",
          "model": "RDX",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Acura",
          "model": "RLX",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Acura",
          "model": "RLX Sport Hybrid",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Acura",
          "model": "TLX",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Alfa Romeo",
          "model": "4C Spider",
          "body_styles": [
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "Alfa Romeo",
          "model": "Giulia",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Alfa Romeo",
          "model": "Stelvio",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Aston Martin",
          "model": "DB11",
          "body_styles": [
            "Coupe",
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "Aston Martin",
          "model": "DBS Superleggera",
          "body_styles": [
            "Coupe"
          ]
        },
        {
          "year": 2019,
          "make": "Aston Martin",
          "model": "Vantage",
          "body_styles": [
            "Coupe"
          ]
        },
        {
          "year": 2019,
          "make": "Audi",
          "model": "A3",
          "body_styles": [
            "Convertible",
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Audi",
          "model": "A4",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Audi",
          "model": "A4 allroad",
          "body_styles": [
            "Wagon"
          ]
        },
        {
          "year": 2019,
          "make": "Audi",
          "model": "A5",
          "body_styles": [
            "Coupe",
            "Sedan",
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "Audi",
          "model": "A6",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Audi",
          "model": "A7",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Audi",
          "model": "A8",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Audi",
          "model": "e-tron",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Audi",
          "model": "Q3",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Audi",
          "model": "Q5",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Audi",
          "model": "Q7",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Audi",
          "model": "Q8",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Audi",
          "model": "RS 3",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Audi",
          "model": "RS 5",
          "body_styles": [
            "Sedan",
            "Coupe"
          ]
        },
        {
          "year": 2019,
          "make": "Audi",
          "model": "S3",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Audi",
          "model": "S4",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Audi",
          "model": "S5",
          "body_styles": [
            "Sedan",
            "Coupe",
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "Audi",
          "model": "SQ5",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Audi",
          "model": "TT",
          "body_styles": [
            "Coupe"
          ]
        },
        {
          "year": 2019,
          "make": "Bentley",
          "model": "Bentayga",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Bentley",
          "model": "Mulsanne",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "BMW",
          "model": "2 Series",
          "body_styles": [
            "Coupe",
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "BMW",
          "model": "3 Series",
          "body_styles": [
            "Sedan",
            "Wagon"
          ]
        },
        {
          "year": 2019,
          "make": "BMW",
          "model": "4 Series",
          "body_styles": [
            "Convertible",
            "Sedan",
            "Coupe"
          ]
        },
        {
          "year": 2019,
          "make": "BMW",
          "model": "5 Series",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "BMW",
          "model": "6 Series",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "BMW",
          "model": "7 Series",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "BMW",
          "model": "8 Series",
          "body_styles": [
            "Coupe",
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "BMW",
          "model": "i3",
          "body_styles": [
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "BMW",
          "model": "i8",
          "body_styles": [
            "Convertible",
            "Coupe"
          ]
        },
        {
          "year": 2019,
          "make": "BMW",
          "model": "M2",
          "body_styles": [
            "Coupe"
          ]
        },
        {
          "year": 2019,
          "make": "BMW",
          "model": "M4",
          "body_styles": [
            "Coupe",
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "BMW",
          "model": "M5",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "BMW",
          "model": "M6",
          "body_styles": [
            "Coupe"
          ]
        },
        {
          "year": 2019,
          "make": "BMW",
          "model": "X1",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "BMW",
          "model": "X2",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "BMW",
          "model": "X3",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "BMW",
          "model": "X4",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "BMW",
          "model": "X5",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "BMW",
          "model": "X6",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "BMW",
          "model": "X6 M",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "BMW",
          "model": "X7",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "BMW",
          "model": "Z4",
          "body_styles": [
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "Buick",
          "model": "Cascada",
          "body_styles": [
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "Buick",
          "model": "Enclave",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Buick",
          "model": "Encore",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Buick",
          "model": "Envision",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Buick",
          "model": "LaCrosse",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Buick",
          "model": "Regal Sportback",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Buick",
          "model": "Regal TourX",
          "body_styles": [
            "Wagon"
          ]
        },
        {
          "year": 2019,
          "make": "Cadillac",
          "model": "ATS",
          "body_styles": [
            "Coupe"
          ]
        },
        {
          "year": 2019,
          "make": "Cadillac",
          "model": "ATS-V",
          "body_styles": [
            "Coupe"
          ]
        },
        {
          "year": 2019,
          "make": "Cadillac",
          "model": "CT6",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Cadillac",
          "model": "CT6-V",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Cadillac",
          "model": "CTS",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Cadillac",
          "model": "CTS-V",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Cadillac",
          "model": "Escalade",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Cadillac",
          "model": "Escalade ESV",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Cadillac",
          "model": "XT4",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Cadillac",
          "model": "XT5",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Cadillac",
          "model": "XTS",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Blazer",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Bolt EV",
          "body_styles": [
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Camaro",
          "body_styles": [
            "Coupe",
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Colorado Crew Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Colorado Extended Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Corvette",
          "body_styles": [
            "Coupe",
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Cruze",
          "body_styles": [
            "Sedan",
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Equinox",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Express 2500 Cargo",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Express 2500 Passenger",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Express 3500 Cargo",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Express 3500 Passenger",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Impala",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Malibu",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Silverado 1500 Crew Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Silverado 1500 Double Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Silverado 1500 LD Double Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Silverado 1500 Regular Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Silverado 2500 HD Crew Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Silverado 2500 HD Double Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Silverado 2500 HD Regular Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Silverado 3500 HD Crew Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Sonic",
          "body_styles": [
            "Sedan",
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Spark",
          "body_styles": [
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Suburban",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Suburban 3500HD",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Tahoe",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Traverse",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Trax",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Chevrolet",
          "model": "Volt",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Chrysler",
          "model": 300,
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Chrysler",
          "model": "Pacifica",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Chrysler",
          "model": "Pacifica Hybrid",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Dodge",
          "model": "Challenger",
          "body_styles": [
            "Coupe"
          ]
        },
        {
          "year": 2019,
          "make": "Dodge",
          "model": "Charger",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Dodge",
          "model": "Durango",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Dodge",
          "model": "Grand Caravan Passenger",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Dodge",
          "model": "Journey",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Ferrari",
          "model": "488 GTB",
          "body_styles": [
            "Coupe"
          ]
        },
        {
          "year": 2019,
          "make": "Ferrari",
          "model": "488 Spider",
          "body_styles": [
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "Ferrari",
          "model": "812 Superfast",
          "body_styles": [
            "Coupe"
          ]
        },
        {
          "year": 2019,
          "make": "Ferrari",
          "model": "GTC4Lusso",
          "body_styles": [
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "FIAT",
          "model": "124 Spider",
          "body_styles": [
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "FIAT",
          "model": 500,
          "body_styles": [
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "FIAT",
          "model": "500 Abarth",
          "body_styles": [
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "FIAT",
          "model": "500c",
          "body_styles": [
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "FIAT",
          "model": "500c Abarth",
          "body_styles": [
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "FIAT",
          "model": "500e",
          "body_styles": [
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "FIAT",
          "model": "500L",
          "body_styles": [
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "FIAT",
          "model": "500X",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "EcoSport",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "Edge",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "Escape",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "Expedition",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "Expedition MAX",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "Explorer",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "F150 Regular Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "F150 Super Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "F150 SuperCrew Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "F250 Super Duty Crew Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "F250 Super Duty Regular Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "F250 Super Duty Super Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "F350 Super Duty Crew Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "F350 Super Duty Regular Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "F350 Super Duty Super Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "F450 Super Duty Crew Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "F450 Super Duty Regular Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "Fiesta",
          "body_styles": [
            "Hatchback",
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "Flex",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "Fusion",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "Fusion Energi",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "Mustang",
          "body_styles": [
            "Coupe",
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "Ranger SuperCab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "Ranger SuperCrew",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "Taurus",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "Transit 150 Van",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "Transit 150 Wagon",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "Transit 250 Van",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "Transit 350 HD Van",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "Transit 350 Van",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "Transit 350 Wagon",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "Transit Connect Cargo",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Ford",
          "model": "Transit Connect Passenger",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Freightliner",
          "model": "Sprinter 1500 Cargo",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Freightliner",
          "model": "Sprinter 1500 Passenger",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Freightliner",
          "model": "Sprinter 2500 Cargo",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Freightliner",
          "model": "Sprinter 2500 Crew",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Freightliner",
          "model": "Sprinter 2500 Passenger",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Freightliner",
          "model": "Sprinter 3500 Cargo",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Freightliner",
          "model": "Sprinter 3500 Crew",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Freightliner",
          "model": "Sprinter 3500 XD Crew",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Freightliner",
          "model": "Sprinter 3500XD Cargo",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Freightliner",
          "model": "Sprinter 4500 Cargo",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Freightliner",
          "model": "Sprinter 4500 Crew",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Genesis",
          "model": "G70",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Genesis",
          "model": "G80",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Genesis",
          "model": "G90",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "GMC",
          "model": "Acadia",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "GMC",
          "model": "Canyon Crew Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "GMC",
          "model": "Canyon Extended Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "GMC",
          "model": "Savana 2500 Cargo",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "GMC",
          "model": "Savana 2500 Passenger",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "GMC",
          "model": "Savana 3500 Cargo",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "GMC",
          "model": "Savana 3500 Passenger",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "GMC",
          "model": "Sierra 1500 Crew Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "GMC",
          "model": "Sierra 1500 Double Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "GMC",
          "model": "Sierra 1500 Limited Double Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "GMC",
          "model": "Sierra 1500 Regular Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "GMC",
          "model": "Sierra 2500 HD Crew Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "GMC",
          "model": "Sierra 2500 HD Double Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "GMC",
          "model": "Sierra 2500 HD Regular Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "GMC",
          "model": "Sierra 3500 HD Crew Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "GMC",
          "model": "Terrain",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "GMC",
          "model": "Yukon",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "GMC",
          "model": "Yukon XL",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Honda",
          "model": "Accord",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Honda",
          "model": "Accord Hybrid",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Honda",
          "model": "Civic",
          "body_styles": [
            "Coupe",
            "Sedan",
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "Honda",
          "model": "Civic Type R",
          "body_styles": [
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "Honda",
          "model": "Clarity Electric",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Honda",
          "model": "Clarity Fuel Cell",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Honda",
          "model": "Clarity Plug-in Hybrid",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Honda",
          "model": "CR-V",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Honda",
          "model": "Fit",
          "body_styles": [
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "Honda",
          "model": "HR-V",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Honda",
          "model": "Insight",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Honda",
          "model": "Odyssey",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Honda",
          "model": "Passport",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Honda",
          "model": "Pilot",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Honda",
          "model": "Ridgeline",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Hyundai",
          "model": "Accent",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Hyundai",
          "model": "Elantra",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Hyundai",
          "model": "Elantra GT",
          "body_styles": [
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "Hyundai",
          "model": "Ioniq Electric",
          "body_styles": [
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "Hyundai",
          "model": "Ioniq Hybrid",
          "body_styles": [
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "Hyundai",
          "model": "Ioniq Plug-in Hybrid",
          "body_styles": [
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "Hyundai",
          "model": "Kona",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Hyundai",
          "model": "Kona Electric",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Hyundai",
          "model": "NEXO",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Hyundai",
          "model": "Santa Fe",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Hyundai",
          "model": "Santa Fe XL",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Hyundai",
          "model": "Sonata",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Hyundai",
          "model": "Sonata Hybrid",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Hyundai",
          "model": "Sonata Plug-in Hybrid",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Hyundai",
          "model": "Tucson",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Hyundai",
          "model": "Veloster",
          "body_styles": [
            "Coupe"
          ]
        },
        {
          "year": 2019,
          "make": "INFINITI",
          "model": "Q50",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "INFINITI",
          "model": "Q60",
          "body_styles": [
            "Coupe"
          ]
        },
        {
          "year": 2019,
          "make": "INFINITI",
          "model": "Q70",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "INFINITI",
          "model": "QX30",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "INFINITI",
          "model": "QX50",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "INFINITI",
          "model": "QX60",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "INFINITI",
          "model": "QX80",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Jaguar",
          "model": "E-PACE",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Jaguar",
          "model": "F-PACE",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Jaguar",
          "model": "F-TYPE",
          "body_styles": [
            "Convertible",
            "Coupe"
          ]
        },
        {
          "year": 2019,
          "make": "Jaguar",
          "model": "I-PACE",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Jaguar",
          "model": "XE",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Jaguar",
          "model": "XF",
          "body_styles": [
            "Wagon",
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Jaguar",
          "model": "XJ",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Jeep",
          "model": "Cherokee",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Jeep",
          "model": "Compass",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Jeep",
          "model": "Grand Cherokee",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Jeep",
          "model": "Renegade",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Jeep",
          "model": "Wrangler",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Jeep",
          "model": "Wrangler Unlimited",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Kia",
          "model": "Cadenza",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Kia",
          "model": "Forte",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Kia",
          "model": "K900",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Kia",
          "model": "Niro",
          "body_styles": [
            "Wagon"
          ]
        },
        {
          "year": 2019,
          "make": "Kia",
          "model": "Niro EV",
          "body_styles": [
            "Wagon"
          ]
        },
        {
          "year": 2019,
          "make": "Kia",
          "model": "Niro Plug-in Hybrid",
          "body_styles": [
            "Wagon"
          ]
        },
        {
          "year": 2019,
          "make": "Kia",
          "model": "Optima",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Kia",
          "model": "Optima Hybrid",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Kia",
          "model": "Optima Plug-in Hybrid",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Kia",
          "model": "Rio",
          "body_styles": [
            "Sedan",
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "Kia",
          "model": "Sedona",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Kia",
          "model": "Sorento",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Kia",
          "model": "Soul",
          "body_styles": [
            "Wagon"
          ]
        },
        {
          "year": 2019,
          "make": "Kia",
          "model": "Soul EV",
          "body_styles": [
            "Wagon"
          ]
        },
        {
          "year": 2019,
          "make": "Kia",
          "model": "Sportage",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Kia",
          "model": "Stinger",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Lamborghini",
          "model": "Aventador",
          "body_styles": [
            "Coupe",
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "Lamborghini",
          "model": "Huracan",
          "body_styles": [
            "Convertible",
            "Coupe"
          ]
        },
        {
          "year": 2019,
          "make": "Lamborghini",
          "model": "Urus",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Land Rover",
          "model": "Discovery",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Land Rover",
          "model": "Discovery Sport",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Land Rover",
          "model": "Range Rover",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Land Rover",
          "model": "Range Rover Evoque",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Land Rover",
          "model": "Range Rover Sport",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Land Rover",
          "model": "Range Rover Velar",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Lexus",
          "model": "ES",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Lexus",
          "model": "GS",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Lexus",
          "model": "GX",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Lexus",
          "model": "IS",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Lexus",
          "model": "LC",
          "body_styles": [
            "Coupe"
          ]
        },
        {
          "year": 2019,
          "make": "Lexus",
          "model": "LS",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Lexus",
          "model": "LX",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Lexus",
          "model": "NX",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Lexus",
          "model": "RC",
          "body_styles": [
            "Coupe"
          ]
        },
        {
          "year": 2019,
          "make": "Lexus",
          "model": "RX",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Lexus",
          "model": "UX",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Lincoln",
          "model": "Continental",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Lincoln",
          "model": "MKC",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Lincoln",
          "model": "MKT",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Lincoln",
          "model": "MKZ",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Lincoln",
          "model": "Nautilus",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Lincoln",
          "model": "Navigator",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Lincoln",
          "model": "Navigator L",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Maserati",
          "model": "Ghibli",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Maserati",
          "model": "GranTurismo",
          "body_styles": [
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "Maserati",
          "model": "Levante",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Maserati",
          "model": "Quattroporte",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "MAZDA",
          "model": "CX-3",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "MAZDA",
          "model": "CX-5",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "MAZDA",
          "model": "CX-9",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "MAZDA",
          "model": "MAZDA3",
          "body_styles": [
            "Sedan",
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "MAZDA",
          "model": "MAZDA6",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "MAZDA",
          "model": "MX-5 Miata",
          "body_styles": [
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "MAZDA",
          "model": "MX-5 Miata RF",
          "body_styles": [
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "McLaren",
          "model": "570GT",
          "body_styles": [
            "Coupe"
          ]
        },
        {
          "year": 2019,
          "make": "McLaren",
          "model": "570S",
          "body_styles": [
            "Coupe",
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "McLaren",
          "model": "600LT",
          "body_styles": [
            "Coupe"
          ]
        },
        {
          "year": 2019,
          "make": "McLaren",
          "model": "720S",
          "body_styles": [
            "Coupe",
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "A-Class",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "C-Class",
          "body_styles": [
            "Convertible",
            "Sedan",
            "Coupe"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "CLA",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "CLS",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "E-Class",
          "body_styles": [
            "Coupe",
            "Sedan",
            "Wagon",
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "G-Class",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "GLA",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "GLC",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "GLC Coupe",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "GLE",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "GLS",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Mercedes-AMG C-Class",
          "body_styles": [
            "Sedan",
            "Convertible",
            "Coupe"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Mercedes-AMG CLA",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Mercedes-AMG CLS",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Mercedes-AMG E-Class",
          "body_styles": [
            "Coupe",
            "Convertible",
            "Sedan",
            "Wagon"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Mercedes-AMG G-Class",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Mercedes-AMG GLA",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Mercedes-AMG GLC",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Mercedes-AMG GLC Coupe",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Mercedes-AMG GLE",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Mercedes-AMG GLE Coupe",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Mercedes-AMG GLS",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Mercedes-AMG GT",
          "body_styles": [
            "Coupe",
            "Sedan",
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Mercedes-AMG S-Class",
          "body_styles": [
            "Sedan",
            "Coupe",
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Mercedes-AMG SL",
          "body_styles": [
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Mercedes-AMG SLC",
          "body_styles": [
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Mercedes-Maybach S-Class",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Metris Cargo",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Metris Passenger",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Metris WORKER Cargo",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Metris WORKER Passenger",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "S-Class",
          "body_styles": [
            "Coupe",
            "Sedan",
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "SL",
          "body_styles": [
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "SLC",
          "body_styles": [
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Sprinter 1500 Cargo",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Sprinter 1500 Passenger",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Sprinter 2500 Cargo",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Sprinter 2500 Crew",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Sprinter 2500 Passenger",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Sprinter 3500 Cargo",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Sprinter 3500 Crew",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Sprinter 3500 XD Cargo",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Sprinter 3500 XD Crew",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Sprinter 4500 Cargo",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Mercedes-Benz",
          "model": "Sprinter 4500 Crew",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "MINI",
          "model": "Clubman",
          "body_styles": [
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "MINI",
          "model": "Convertible",
          "body_styles": [
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "MINI",
          "model": "Countryman",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "MINI",
          "model": "Hardtop 2 Door",
          "body_styles": [
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "MINI",
          "model": "Hardtop 4 Door",
          "body_styles": [
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "Mitsubishi",
          "model": "Eclipse Cross",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Mitsubishi",
          "model": "Mirage",
          "body_styles": [
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "Mitsubishi",
          "model": "Mirage G4",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Mitsubishi",
          "model": "Outlander",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Mitsubishi",
          "model": "Outlander PHEV",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Mitsubishi",
          "model": "Outlander Sport",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Nissan",
          "model": "370Z",
          "body_styles": [
            "Coupe",
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "Nissan",
          "model": "Altima",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Nissan",
          "model": "Armada",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Nissan",
          "model": "Frontier Crew Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Nissan",
          "model": "Frontier King Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Nissan",
          "model": "GT-R",
          "body_styles": [
            "Coupe"
          ]
        },
        {
          "year": 2019,
          "make": "Nissan",
          "model": "Kicks",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Nissan",
          "model": "LEAF",
          "body_styles": [
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "Nissan",
          "model": "Maxima",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Nissan",
          "model": "Murano",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Nissan",
          "model": "NV1500 Cargo",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Nissan",
          "model": "NV200",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Nissan",
          "model": "NV200 Taxi",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Nissan",
          "model": "NV2500 HD Cargo",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Nissan",
          "model": "NV3500 HD Cargo",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Nissan",
          "model": "NV3500 HD Passenger",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Nissan",
          "model": "Pathfinder",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Nissan",
          "model": "Rogue",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Nissan",
          "model": "Rogue Sport",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Nissan",
          "model": "Sentra",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Nissan",
          "model": "Titan Crew Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Nissan",
          "model": "Titan King Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Nissan",
          "model": "TITAN Single Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Nissan",
          "model": "TITAN XD Crew Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Nissan",
          "model": "TITAN XD King Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Nissan",
          "model": "TITAN XD Single Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Nissan",
          "model": "Versa",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Nissan",
          "model": "Versa Note",
          "body_styles": [
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "Porsche",
          "model": "718 Boxster",
          "body_styles": [
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "Porsche",
          "model": "718 Cayman",
          "body_styles": [
            "Coupe"
          ]
        },
        {
          "year": 2019,
          "make": "Porsche",
          "model": 911,
          "body_styles": [
            "Coupe",
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "Porsche",
          "model": "Cayenne",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Porsche",
          "model": "Macan",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Porsche",
          "model": "Panamera",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Ram",
          "model": "1500 Classic Crew Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Ram",
          "model": "1500 Classic Quad Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Ram",
          "model": "1500 Classic Regular Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Ram",
          "model": "1500 Crew Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Ram",
          "model": "1500 Quad Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Ram",
          "model": "2500 Crew Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Ram",
          "model": "2500 Mega Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Ram",
          "model": "2500 Regular Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Ram",
          "model": "3500 Crew Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Ram",
          "model": "3500 Mega Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Ram",
          "model": "3500 Regular Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Ram",
          "model": "ProMaster Cargo Van",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Ram",
          "model": "ProMaster City",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Ram",
          "model": "ProMaster Window Van",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Rolls-Royce",
          "model": "Cullinan",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Rolls-Royce",
          "model": "Dawn",
          "body_styles": [
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "Rolls-Royce",
          "model": "Ghost",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Rolls-Royce",
          "model": "Phantom",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Rolls-Royce",
          "model": "Wraith",
          "body_styles": [
            "Coupe"
          ]
        },
        {
          "year": 2019,
          "make": "smart",
          "model": "fortwo EQ cabrio",
          "body_styles": [
            "Convertible"
          ]
        },
        {
          "year": 2019,
          "make": "smart",
          "model": "fortwo EQ coupe",
          "body_styles": [
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "Subaru",
          "model": "Ascent",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Subaru",
          "model": "BRZ",
          "body_styles": [
            "Coupe"
          ]
        },
        {
          "year": 2019,
          "make": "Subaru",
          "model": "Crosstrek",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Subaru",
          "model": "Forester",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Subaru",
          "model": "Impreza",
          "body_styles": [
            "Sedan",
            "Wagon"
          ]
        },
        {
          "year": 2019,
          "make": "Subaru",
          "model": "Legacy",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Subaru",
          "model": "Outback",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Subaru",
          "model": "WRX",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Tesla",
          "model": "Model 3",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Tesla",
          "model": "Model S",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Tesla",
          "model": "Model X",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Toyota",
          "model": "4Runner",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Toyota",
          "model": 86,
          "body_styles": [
            "Coupe"
          ]
        },
        {
          "year": 2019,
          "make": "Toyota",
          "model": "Avalon",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Toyota",
          "model": "Avalon Hybrid",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Toyota",
          "model": "Camry",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Toyota",
          "model": "Camry Hybrid",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Toyota",
          "model": "C-HR",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Toyota",
          "model": "Corolla",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Toyota",
          "model": "Corolla Hatchback",
          "body_styles": [
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "Toyota",
          "model": "Highlander",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Toyota",
          "model": "Highlander Hybrid",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Toyota",
          "model": "Land Cruiser",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Toyota",
          "model": "Mirai",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Toyota",
          "model": "Prius",
          "body_styles": [
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "Toyota",
          "model": "Prius c",
          "body_styles": [
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "Toyota",
          "model": "Prius Prime",
          "body_styles": [
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "Toyota",
          "model": "RAV4",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Toyota",
          "model": "RAV4 Hybrid",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Toyota",
          "model": "Sequoia",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Toyota",
          "model": "Sienna",
          "body_styles": [
            "Van/Minivan"
          ]
        },
        {
          "year": 2019,
          "make": "Toyota",
          "model": "Tacoma Access Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Toyota",
          "model": "Tacoma Double Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Toyota",
          "model": "Tundra CrewMax",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Toyota",
          "model": "Tundra Double Cab",
          "body_styles": [
            "Pickup"
          ]
        },
        {
          "year": 2019,
          "make": "Toyota",
          "model": "Yaris",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Volkswagen",
          "model": "Arteon",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Volkswagen",
          "model": "Atlas",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Volkswagen",
          "model": "Beetle",
          "body_styles": [
            "Convertible",
            "Coupe",
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "Volkswagen",
          "model": "e-Golf",
          "body_styles": [
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "Volkswagen",
          "model": "Golf",
          "body_styles": [
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "Volkswagen",
          "model": "Golf Alltrack",
          "body_styles": [
            "Wagon"
          ]
        },
        {
          "year": 2019,
          "make": "Volkswagen",
          "model": "Golf GTI",
          "body_styles": [
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "Volkswagen",
          "model": "Golf R",
          "body_styles": [
            "Hatchback"
          ]
        },
        {
          "year": 2019,
          "make": "Volkswagen",
          "model": "Golf SportWagen",
          "body_styles": [
            "Wagon"
          ]
        },
        {
          "year": 2019,
          "make": "Volkswagen",
          "model": "Jetta",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Volkswagen",
          "model": "Jetta GLI",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Volkswagen",
          "model": "Passat",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Volkswagen",
          "model": "Tiguan",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Volvo",
          "model": "S60",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Volvo",
          "model": "S90",
          "body_styles": [
            "Sedan"
          ]
        },
        {
          "year": 2019,
          "make": "Volvo",
          "model": "V60",
          "body_styles": [
            "Wagon"
          ]
        },
        {
          "year": 2019,
          "make": "Volvo",
          "model": "V90",
          "body_styles": [
            "Wagon"
          ]
        },
        {
          "year": 2019,
          "make": "Volvo",
          "model": "XC40",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Volvo",
          "model": "XC60",
          "body_styles": [
            "SUV"
          ]
        },
        {
          "year": 2019,
          "make": "Volvo",
          "model": "XC90",
          "body_styles": [
            "SUV"
          ]
        }
      ]
}