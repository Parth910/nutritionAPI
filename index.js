var bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    cors = require('cors'),
    http = require('http'),
    express = require("express"),
    app = express();
    server = http.createServer(app),
    app.use(cors());

    app.use(express.static("public"));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(methodOverride('_method'));
const PORT = process.env.PORT || 5000;
    var mealType =[{
        "gender": "male",
        "minAge": 2,
        "maxAge": 3,
        "minCalories": 1000,
        "maxCalories": 1400,
        "type": "veg",
        "Protein": "20gms-30gms",
        "Fruits": "0.5 cups",
        "Vegetables": "0.5 cups",
        "Grains": "30gms-45gms",
        "Dairy": "0.5 cups"
      },
      {
        "gender": "female",
        "minAge": 2,
        "maxAge": 3,
        "minCalories": 1000,
        "maxCalories": 1400,
        "type": "veg",
        "Protein": "20gms-30gms",
        "Fruits": "0.5 cups",
        "Vegetables": "0.5 cups",
        "Grains": "30gms-45gms",
        "Dairy": "0.5 cups"
      },
      {
        "gender": "female",
        "minAge": 4,
        "maxAge": 8,
        "minCalories": 1200,
        "maxCalories": 1800,
        "type": "veg",
        "Protein": "30gms-50gms",
        "Fruits": "0.75 cups",
        "Vegetables": "0.8 cups",
        "Grains": "35gms-55gms",
        "Dairy": "0.75 cups"
      },
      {
        "gender": "male",
        "minAge": 4,
        "maxAge": 8,
        "minCalories": 1200,
        "maxCalories": 2000,
        "type": "veg",
        "Protein": "30gms-40gms",
        "Fruits": "0.75 cups",
        "Vegetables": "0.8 cups",
        "Grains": "35gms-55gms",
        "Dairy": "0.8 cups"
      },
      {
        "gender": "female",
        "minAge": 9,
        "maxAge": 13,
        "minCalories": 1200,
        "maxCalories": 2000,
        "type": "veg",
        "Protein": "40gms-58gms",
        "Fruits": "0.75 cups",
        "Vegetables": "1 cups",
        "Grains": "45gms-65gms",
        "Dairy": "1 cups"
      },
      {
        "gender": "male",
        "minAge": 9,
        "maxAge": 13,
        "minCalories": 1200,
        "maxCalories": 2000,
        "type": "veg",
        "Protein": "45gms-60gms",
        "Fruits": "0.8 cups",
        "Vegetables": "1.2 cups",
        "Grains": "55gms-70gms",
        "Dairy": "1 cups"
      }]
    var vege = [
    {
      "name":"Potato"
    },
    {
      "name":"ladies finger"
    },
    {
      "name":"Eggplant"
    },
    {
      "name":"Radish"
    },
    {
      "name":"Carrots"
    },
    {
      "name":"Beets"
    },
    {
      "name":"Sweet potato"
    },
    {
      "name":"Cabbage"
    },
    
    {
      "name":"Cucumber"
    },
    {
      "name":"Tomato"
    }
  ];
  var grains =[
    {
        "name": "Rice"
      },
      {
        "name": "Weat Roti"
      },
      {
        "name": "Jowar Roti"
      },
      {
        "name": "Bajra Roti"
      },
      {
        "name": "Weat Item"
      }
  ]
  var dairy =[
    {
        "name": "Milk"
      },
      {
        "name": "Curd"
      },
      {
        "name": "Fresh Cheez"
      }
  ]
  var nonVegPro=[
    {
        "name": "Pulses"
      },
      {
        "name": "Chicken Breast"
      },
      {
        "name": "Soya Nuggets"
      },
      {
        "name": "Eggs"
      }
  ]
  var vegPro =[ {
    "name": " Green Peas"
  },
  {
    "name": "Oats"
  },
  {
    "name": "Wild Rice"
  },
  {
    "name": "Nutritional Yeast"
  }];
  var fruits=[ {
    "name":"Apple"
  },
  {
    "name":"Orange"
  },
  {
    "name":"Banana"
  },
  {
    "name":"Papaya"
  },
  {
    "name":"Watermelon"
  },
  {
    "name":"Mango"
  },
  {
    "name":"Pomegranate"
  },
  {
    "name":"Sugar-Apple"
  },
  
  {
    "name":"Grapes"
  },
  {
    "name":"Guava"
  }]
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  app.get("/",(req,res)=>{
    const gender = req.query.gender;
    const age = req.query.age;
    const type= req.query.type;
    const weight= req.query.weight;
    const height = req.query.height;
    var calorieNeed = 0;
    if(gender === "male")
    calorieNeed = ((66.5+(13.8*weight)+(5*height))/(6.8*age))*1.3;
    
    
    if(gender==="female")
    calorieNeed = ((65.5+(9.6*weight)+(1.9*height))/(4.7*age))*1.3;
    var meatT = mealType.filter((m)=>{
                if(m.minAge<= age && m.maxAge >= age && m.gender=== gender)
                return m;
            })
            console.log(calorieNeed);
    var meal ={
        "calorie":Math.floor( (randomIntFromInterval(meatT[0].minCalories,meatT[0].maxCalories))/3),
        "protienItem":nonVegPro[randomIntFromInterval(0,3)].name,
        "protienQun":meatT[0].Protein,
        "fruitItem":fruits[randomIntFromInterval(0,9)].name,
        "fruitQun":meatT[0].Fruits,
        "vegeItem":vege[randomIntFromInterval(0,9)].name,
        "vegeQun":meatT[0].Vegetables,
        "grainItem":grains[randomIntFromInterval(0,4)].name,
        "grainQun":meatT[0].Grains,
        "dairyItem":dairy[randomIntFromInterval(0,2)].name,
        "dairyQun":meatT[0].Dairy,

    }
        res.send(meal);
})
app.listen(process.env.PORT || 3000,()=>console.log(`server at ${PORT}`)
);


   
