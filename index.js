var bodyParser = require("body-parser"),
  methodOverride = require("method-override"),
  cors = require('cors'),
  express = require("express"),
  app = express();
 
//server = http.createServer(app),
app.use(cors());

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
const PORT = process.env.PORT || 5000;

var mealTypeOnetoThree =[
  {
    "Mon":{
      "breakfast":"1 cup milk with 1 tsp jaggery, Apple: 1 no  ",
      "lunch":"Rice: 1/2 cup, drumstick dal: 1/2 cup, ghee: 1 tsp, curd: 1/2 cup",
      "dinner":"Potato Peas paratha: 1 no., curd: 1/2 cup",
    },
    "Tues":{
      "breakfast":"1 cup milk with 1 tsp jaggery, Guava: 1 no",
      "lunch":"Vegetable Pulao: 1/2 cup, raita: 1/2 cup",
      "dinner":"Chapatti : 1 no, ghee: 1 tsp, Beetroot vegetable: 1/2 cup",
    },
    "Wed":{
      "breakfast":"1 cup milk with 1 tsp jaggery, banana: 1/2 no",
      "lunch":"Rice: 1/2 cup, dal palak: 1/2 cup, ghee: 1 tsp, curd: 1/2 cup",
      "dinner":"Vegetable Kichadi: 1/2 cup, curd: 1/2 cup",
    },
    "Thurs":{
      "breakfast":"1 cup milk with 1 tsp jaggery, Papaya: 1/2 cup",
      "lunch":"Mixed vegetable rice: 1/2 cup, dal fry: 1/2 cup",
      "dinner":"Paratha: 1 no., dal fry: 1/2 cup, ghee: 1 tsp",
    },
    "Fri":{
      "breakfast":"1 cup milk with 1 tsp jaggery, pomegranate: 1/2 cup",
      "lunch":"Rice: 1/2 cup, bottle gourd dal : 1/2 cup, ghee: 1 tsp",
      "dinner":"Chapatti: 1 no, panner and peas vegetable: 1/2 cup, ghee: 1 tsp",
    },
    "Sat":{
      "breakfast":"1 cup milk with 1 tsp jaggery, Water melon: 1/2 cup",
      "lunch":"Chapatti: 1 No., ghee: 1 tsp., carrot and potato vegetable - 1/2 cup",
      "dinner":"Rice: 1/2 cup, bottle gourd dal : 1/2 cup, ghee: 1 tsp",
    },
    "Sun":{
      "breakfast":"1 cup mango milkshake with 1 tsp jaggery, dates: 3-4 no",
      "lunch":"Rice: 1/2 cup, Green gram dal: 1/2 cup, ghee: 1 tsp, curd: 1/2, cup",
      "dinner":"Vegetable Pulao: 1/2 cup, Beetroot vegetable: 1/2 cup",
    }
  },
  {
    "Mon":{
      "breakfast":"1 cup milk with 1 tsp jaggery, Water melon: 1/2 cup",
      "lunch":"Rice: 1/2 cup, Green gram dal: 1/2 cup, ghee: 1 tsp, curd: 1/2, cup",
      "dinner":"Vegetable Kichadi: 1/2 cup, curd: 1/2 cup",
    },
    "Tues":{
      "breakfast":"1 cup milk with 1 tsp jaggery, pomegranate: 1/2 cup",
      "lunch":"Rice: 1/2 cup, dal palak: 1/2 cup, ghee: 1 tsp, curd: 1/2 cup",
      "dinner":"Paratha: 1 no., dal fry: 1/2 cup, ghee: 1 tsp",
    },
    "Wed":{
      "breakfast":"1 cup milk with 1 tsp jaggery, Papaya: 1/2 cup",
      "lunch":"Mixed vegetable rice: 1/2 cup, dal fry: 1/2 cup",
      "dinner":"Chapatti: 1 no, panner and peas vegetable: 1/2 cup, ghee: 1 tsp",
    },
    "Thurs":{
      "breakfast":"1 cup mango milkshake with 1 tsp jaggery, pineapple: 1/2 cup",
      "lunch":"Chapatti: 1 No., ghee: 1 tsp., carrot and potato vegetable - 1/2 cup",
      "dinner":"Vegetable Pulao: 1/2 cup, Beetroot vegetable: 1/2 cup",
    },
    "Fri":{
      "breakfast":"1 cup milk with 1 tsp jaggery, dates:3-4 no",
      "lunch":"Rice: 1/2 cup, bottle gourd dal : 1/2 cup, ghee: 1 tsp",
      "dinner":"Potato Peas paratha: 1 no., curd: 1/2 cup",
    },
    "Sat":{
      "breakfast":"1 cup milk with 1 tsp jaggery, Apple: 1 no",
      "lunch":"Chapatti: 1 no, panner and peas vegetable: 1/2 cup, ghee: 1 tsp",
      "dinner":'Chapatti : 1 no, ghee: 1 tsp, Beetroot vegetable: 1/2 cup',
    },
    "Sun":{
      "breakfast":"1 cup milk with 1 tsp jaggery, banana: 1/2 no",
      "lunch":"Rice: 1/2 cup, drumstick dal: 1/2 cup, ghee: 1 tsp, curd: 1/2 cup",
      "dinner":"Potato Peas paratha: 1 no., curd: 1/2 cup",
    }
  },
  {
    "Mon":{
      "breakfast":"1 cup milk with 1 tsp jaggery, banana: 1/2 no",
      "lunch":"Mixed vegetable rice: 1/2 cup, dal fry: 1/2 cup",
      "dinner":"Paratha: 1 no., dal fry: 1/2 cup, ghee: 1 tsp",
    },
    "Tues":{
      "breakfast":"1 cup milk with 1 tsp jaggery, Guava: 1 no",
      "lunch":"Chapatti: 1 No., ghee: 1 tsp., carrot and potato vegetable - 1/2 cup",
      "dinner":"Potato Peas paratha: 1 no., curd: 1/2 cup",
    },
    "Wed":{
      "breakfast":"1 cup mango milkshake with 1 tsp jaggery, pineapple: 1/2 cup",
      "lunch":"Rice: 1/2 cup, drumstick dal: 1/2 cup, ghee: 1 tsp, curd: 1/2 cup",
      "dinner":"Chapatti : 1 no, ghee: 1 tsp, Beetroot vegetable: 1/2 cup",
    },
    "Thurs":{
      "breakfast":"1 cup milk with 1 tsp jaggery, mixfruits : 1 cup",
      "lunch":"Rice: 1/2 cup, dal palak: 1/2 cup, ghee: 1 tsp, curd: 1/2 cup",
      "dinner":"Vegetable Kichadi: 1/2 cup, curd: 1/2 cup",
    },
    "Fri":{
      "breakfast":"1 cup milk with 1 tsp jaggery, dryfriuts: 1/4 cup",
      "lunch":"Chapatti: 1 no, panner and peas vegetable: 1/2 cup, ghee: 1 tsp",
      "dinner":"",
    },
    "Sat":{
      "breakfast":"1 cup milk with 1 tsp jaggery, apple: 1 no",
      "lunch":"Rice: 1/2 cup, Green gram dal: 1/2 cup, ghee: 1 tsp, curd: 1/2, cup",
      "dinner":'Vegetable Pulao: 1/2 cup, Beetroot vegetable: 1/2 cup',
    },
    "Sun":{
      "breakfast":"1 cup milk with 1 tsp jaggery, Papaya: 1/2 cup",
      "lunch":"Rice: 1/2 cup, bottle gourd dal : 1/2 cup, ghee: 1 tsp",
      "dinner":"Chapatti: 1 no, panner and peas vegetable: 1/2 cup, ghee: 1 tsp",
    }
  }
];
var mealTypeFourtoSix =[{
  "Mon":{
    "breakfast":"1 cup milk with 1 tsp jaggery, Papaya: 1/2 cup, Rava idli: 2 no, coconut chutney: 2 tbsp",
    "lunch":"Rice: 1 cup, potato and tomato curry: 1 cup, cucumber salad: 1/2 cup",
    "dinner":"Panner paratha: 1 no., curd: 1/2 cup",
  },
  "Tues":{
    "breakfast":"1 cup milk with 1 tsp jaggery, Apple: 1/2 cup, Ragi dosa: 1 no, coconut chutney: 2 tbsp",
    "lunch":"Rice: 1 cup, Rajmah curry: 1 cup",
    "dinner":"Vegetable fried rice: 1 cup",
  },
  "Wed":{
    "breakfast":"Fruit salad: 1 cup, Vegetable cutlet: 4-5 no	",
    "lunch":"Chapatti: 1 no., capsicum and paneer gravy: 1 cup",
    "dinner":"Peas and potato stuffed paratha: 1 no., cucumber and carrot salad : 1/2 cup",
  },
  "Thurs":{
    "breakfast":"1 cup chikoo milkshake with 1 tsp. jaggery, Dhalia (broken wheat) with vegetable upma: 1 cup ",
    "lunch":"Corn and mint rice: 1 cup, dal tadka: 1/2 cup, raita: 1/2 cup",
    "dinner":"Chapatti: 1 no., mixed vegetable kurma: 1 cup",
  },
  "Fri":{
    "breakfast":"1 cup milk with 1 tsp jaggery, Banana: 1/2 cup, Ragi dosa: 1 no, coconut chutney: 2 tbsp",
    "lunch":"Vegetable khichdi: 1 cup, curd: 1/2 cup",
    "dinner":"Mixed vegetable rice: 1 cup, dal tadka: 1/2 cup",
  },
  "Sat":{
    "breakfast":"1 cup Mango juice , Dates: 1/2 cup, Orange: 1 no, Vegetable cutlet: 1 no",
    "lunch":"Rice: 1/2 cup, dal palak: 1 cup, curd: 1/2 cup",
    "dinner":'Panner paratha: 1 no., curd: 1/2 cup',
  },
  "Sun":{
    "breakfast":"1 cup milk with 1 tsp. jaggery, Rava idli: 2 nos., coconut chutney: 2 tbsp ",
    "lunch":"Rice: 1 cup, potato and tomato curry: 1 cup, cucumber salad: 1/2 cup",
    "dinner":"Cabbage stuffed paratha: 1 no., dal: 1/2 cup",
  }
},
{
  "Mon":{
    "breakfast":"Fruit salad: 1 cup, Vegetable cutlet: 4-5 no	",
    "lunch":"Chapatti: 1 no., capsicum and paneer gravy: 1 cup",
    "dinner":"Vegetable fried rice: 1 cup",
  },
  "Tues":{
    "breakfast":"1 cup chikoo milkshake with 1 tsp. jaggery, Dhalia (broken wheat) with vegetable upma: 1 cup ",
    "lunch":"Corn and mint rice: 1 cup, dal tadka: 1/2 cup, raita: 1/2 cup",
    "dinner":"Mixed vegetable rice: 1 cup, dal tadka: 1/2 cup",
  },
  "Wed":{
    "breakfast":"1 cup milk with 1 tsp jaggery, Banana: 1/2 cup, Ragi dosa: 1 no, coconut chutney: 2 tbsp",
    "lunch":"Rice: 1/2 cup, dal palak: 1 cup, curd: 1/2 cup",
    "dinner":"Chapatti: 1 no., mixed vegetable kurma: 1 cup",
  },
  "Thurs":{
    "breakfast":"1 cup milk with 1 tsp. jaggery, Rava idli: 2 nos., coconut chutney: 2 tbsp",
    "lunch":"Rice: 1 cup, potato and tomato curry: 1 cup, cucumber salad: 1/2 cup",
    "dinner":"Cabbage stuffed paratha: 1 no., dal: 1/2 cup",
  },
  "Fri":{
    "breakfast":"1 cup milk with 1 tsp jaggery, Papaya: 1/2 cup, Rava idli: 2 no, coconut chutney: 2 tbsp",
    "lunch":"Vegetable khichdi: 1 cup, curd: 1/2 cup",
    "dinner":"Peas and potato stuffed paratha: 1 no., cucumber and carrot salad : 1/2 cup",
  },
  "Sat":{
    "breakfast":"1 cup Mango juice , Dates: 1/2 cup, Orange: 1 no, Vegetable cutlet: 1 no",
    "lunch":"Corn and mint rice: 1 cup, dal tadka: 1/2 cup, raita: 1/2 cup",
    "dinner":'Panner paratha: 1 no., curd: 1/2 cup',
  },
  "Sun":{
    "breakfast":"1 cup milk with 1 tsp jaggery, Apple: 1/2 cup, Ragi dosa: 1 no, coconut chutney: 2 tbsp",
    "lunch":"Rice: 1 cup, potato and tomato curry: 1 cup, cucumber salad: 1/2 cup",
    "dinner":"Chapatti: 1 no., mixed vegetable kurma: 1 cup",
  }
},
{
  "Mon":{
    "breakfast":"1 cup chikoo milkshake with 1 tsp. jaggery, Dhalia (broken wheat) with vegetable upma: 1 cup ",
    "lunch":"Rice: 1 cup, Rajmah curry: 1 cup",
    "dinner":"Peas and potato stuffed paratha: 1 no., cucumber and carrot salad : 1/2 cup",
  },
  "Tues":{
    "breakfast":"1 cup Mango juice , Dates: 1/2 cup, Orange: 1 no, Vegetable cutlet: 1 no",
    "lunch":"Vegetable khichdi: 1 cup, curd: 1/2 cup",
    "dinner":"Chapatti: 1 no., mixed vegetable kurma: 1 cup",
  },
  "Wed":{
    "breakfast":"1 cup milk with 1 tsp jaggery, Banana: 1/2 cup, Ragi dosa: 1 no, coconut chutney: 2 tbsp",
    "lunch":"Rice: 1 cup, potato and tomato curry: 1 cup, cucumber salad: 1/2 cup",
    "dinner":"Vegetable fried rice: 1 cup",
  },
  "Thurs":{
    "breakfast":"1 cup milk with 1 tsp jaggery, Apple: 1/2 cup, Ragi dosa: 1 no, coconut chutney: 2 tbsp",
    "lunch":"Corn and mint rice: 1 cup, dal tadka: 1/2 cup, raita: 1/2 cup",
    "dinner":"Panner paratha: 1 no., curd: 1/2 cup",
  },
  "Fri":{
    "breakfast":"1 cup milk with 1 tsp. jaggery, Rava idli: 2 nos., coconut chutney: 2 tbsp",
    "lunch":"Chapatti: 1 no., capsicum and paneer gravy: 1 cup",
    "dinner":"Vegetable fried rice: 1 cup",
  },
  "Sat":{
    "breakfast":"1 cup milk with 1 tsp jaggery, Papaya: 1/2 cup, Rava idli: 2 no, coconut chutney: 2 tbsp",
    "lunch":"Rice: 1 cup, potato and tomato curry: 1 cup, cucumber salad: 1/2 cup",
    "dinner":'Cabbage stuffed paratha: 1 no., dal: 1/2 cup',
  },
  "Sun":{
    "breakfast":"Fruit salad: 1 cup, Vegetable cutlet: 4-5 no	",
    "lunch":"Rice: 1/2 cup, dal palak: 1 cup, curd: 1/2 cup",
    "dinner":"Mixed vegetable rice: 1 cup, dal tadka: 1/2 cup",
  }
}];
var mealTypeSeventoNine =[{
  "Mon":{
    "breakfast":"Fruit salad: 1 cup, Vegetable cutlet: 4-5 no",
    "lunch":"Rice: 1 cup, dal palak: 1 cup, curd: 1/2 cup",
    "dinner":"Mixed vegetable rice: 1 cup, dal tadka: 1/2 cup",
  },
  "Tues":{
    "breakfast":"1 cup milk with 1 tsp jaggery, Papaya: 1/2 cup, Rava idli: 3 no, coconut chutney: 2 tbsp",
    "lunch":"Rice: 1 cup, potato and tomato curry: 1 cup, cucumber salad: 1/2 cup",
    "dinner":"Cabbage stuffed paratha: 1 no., dal: 1/2 cup",
  },
  "Wed":{
    "breakfast":"1 cup Mango juice , Dates: 1/2 cup, Orange: 1 no, Vegetable cutlet: 1 no",
    "lunch":"Chapatti: 1 no., capsicum and paneer gravy: 1 cup",
    "dinner":"Vegetable fried rice: 1 cup",
  },
  "Thurs":{
    "breakfast":"1 cup chikoo milkshake with 1 tsp. jaggery, Dhalia (broken wheat) with vegetable upma: 1 cup ",
    "lunch":"Rice: 1 cup, potato and tomato curry: 1 cup, cucumber salad: 1/2 cup",
    "dinner":"Panner paratha: 1 no., curd: 1/2 cup",
  },
  "Fri":{
    "breakfast":"1 cup milk with 1 tsp. jaggery, Rava idli: 2 nos., coconut chutney: 2 tbsp",
    "lunch":"Vegetable khichdi: 1 cup, curd: 1/2 cup",
    "dinner":"Peas and potato stuffed paratha: 1 no., cucumber and carrot salad : 1/2 cup",
  },
  "Sat":{
    "breakfast":"1 cup milk with 1 tsp jaggery, Apple: 1/2 cup, Ragi dosa: 1 no, coconut chutney: 2 tbsp",
    "lunch":"Rice: 1 cup, Rajmah curry: 1 cup",
    "dinner":'Mixed vegetable rice: 1 cup, dal tadka: 1/2 cup',
  },
  "Sun":{
    "breakfast":"1 cup milk with 1 tsp. jaggery, Rava idli: 2 nos., coconut chutney: 2 tbsp",
    "lunch":"Vegetable khichdi: 1 cup, curd: 1/2 cup",
    "dinner":"Vegetable fried rice: 1 cup",
  }
},
{
  "Mon":{
    "breakfast":"1 cup milk with 1 tsp jaggery, Apple: 1/2 cup, Ragi dosa: 1 no, coconut chutney: 2 tbsp",
    "lunch":"Rice: 1 cup, potato and tomato curry: 1 cup, cucumber salad: 1/2 cup",
    "dinner":"Cabbage stuffed paratha: 1 no., dal: 1/2 cup",
  },
  "Tues":{
    "breakfast":"1 cup milk with 1 tsp. jaggery, Rava idli: 2 nos., coconut chutney: 2 tbsp",
    "lunch":"Vegetable khichdi: 1 cup, curd: 1/2 cup",
    "dinner":"Peas and potato stuffed paratha: 1 no., cucumber and carrot salad : 1/2 cup",
  },
  "Wed":{
    "breakfast":"1 cup Mango juice , Dates: 1/2 cup, Orange: 1 no, Vegetable cutlet: 1 n",
    "lunch":"Chapatti: 1 no., capsicum and paneer gravy: 1 cup",
    "dinner":"Mixed vegetable rice: 1 cup, dal tadka: 1/2 cup",
  },
  "Thurs":{
    "breakfast":"1 cup chikoo milkshake with 1 tsp. jaggery, Dhalia (broken wheat) with vegetable upma: 1 cup ",
    "lunch":"Vegetable khichdi: 1 cup, curd: 1/2 cup",
    "dinner":"Mixed vegetable rice: 1 cup, dal tadka: 1/2 cup",
  },
  "Fri":{
    "breakfast":"1 cup milk with 1 tsp. jaggery, Rava idli: 2 nos., coconut chutney: 2 tbsp",
    "lunch":"Rice: 1 cup, potato and tomato curry: 1 cup, cucumber salad: 1/2 cup",
    "dinner":"Mixed vegetable rice: 1 cup, dal tadka: 1/2 cup",
  },
  "Sat":{
    "breakfast":"1 cup Mango juice , Dates: 1/2 cup, Orange: 1 no, Vegetable cutlet: 1 no",
    "lunch":"Rice: 1 cup, Rajmah curry: 1 cup",
    "dinner":'Peas and potato stuffed paratha: 1 no., cucumber and carrot salad : 1/2 cup',
  },
  "Sun":{
    "breakfast":"Fruit salad: 1 cup, Vegetable cutlet: 4-5 no",
    "lunch":"Rice: 1 cup, potato and tomato curry: 1 cup, cucumber salad: 1/2 cup",
    "dinner":"Peas and potato stuffed paratha: 1 no., cucumber and carrot salad : 1/2 cup",
  }
}
];
var mealTypeTentoTwl =[{
  "Mon":{
    "breakfast":"1 cup milk with 1 tsp jaggery, Apple: 1 cup, Ragi dosa: 2 no, coconut chutney: 3 tbsp",
    "lunch":"Rice: 1 cup, potato and tomato curry: 1 cup, cucumber salad: 1 cup",
    "dinner":"Cabbage stuffed paratha: 1.5 no., dal: 1 cup",
  },
  "Tues":{
    "breakfast":"1 cup milk with 1 tsp. jaggery, Rava idli: 5 nos., coconut chutney: 3 tbsp",
    "lunch":"Vegetable khichdi: 1 cup, curd: 1 cup",
    "dinner":"Peas and potato stuffed paratha: 1.5 no., cucumber and carrot salad : 1 cup",
  },
  "Wed":{
    "breakfast":"1 cup Mango juice , Dates: 1 cup, Orange: 2 no, Vegetable cutlet: 4 no",
    "lunch":"Chapatti: 3 no., capsicum and paneer gravy: 1 cup",
    "dinner":"Mixed vegetable rice: 2 cup, dal tadka: 1 cup",
  },
  "Thurs":{
    "breakfast":"1 cup chikoo milkshake with 1 tsp. jaggery, Dhalia (broken wheat) with vegetable upma: 2 cup",
    "lunch":"Vegetable khichdi: 2 cup, curd: 1 cup",
    "dinner":"Mixed vegetable rice: 2 cup, dal tadka: 1 cup",
  },
  "Fri":{
    "breakfast":"1 cup milk with 1 tsp. jaggery, Rava idli: 4 nos., coconut chutney: 3 tbsp",
    "lunch":"Rice: 2 cup, potato and tomato curry: 2 cup, cucumber salad: 1 cup",
    "dinner":"Mixed vegetable rice: 2 cup, dal tadka: 1 cup",
  },
  "Sat":{
    "breakfast":"1 cup Mango juice , Dates: 1/2 cup, Orange: 2no, Vegetable cutlet: 3 no",
    "lunch":"Rice: 2 cup, Rajmah curry: 2 cup",
    "dinner":'Peas and potato stuffed paratha: 1.5 no., cucumber and carrot salad : 1 cup',
  },
  "Sun":{
    "breakfast":"Fruit salad: 2 cup, Vegetable cutlet: 4-6 no",
    "lunch":"Rice: 2 cup, potato and tomato curry: 1 cup, cucumber salad: 1 cup",
    "dinner":"Peas and potato stuffed paratha: 1.5 no., cucumber and carrot salad : 1 cup",
  }
},
{
  "Mon":{
    "breakfast":"1 cup Mango juice , Dates: 1/2 cup, Orange: 2no, Vegetable cutlet: 3 no",
    "lunch":"Rice: 2 cup, Rajmah curry: 2 cup",
    "dinner":'Peas and potato stuffed paratha: 1.5 no., cucumber and carrot salad : 1 cup',
  },
  "Tues":{
    "breakfast":"1 cup milk with 1 tsp. jaggery, Rava idli: 4 nos., coconut chutney: 3 tbsp",
    "lunch":"Rice: 2 cup, potato and tomato curry: 2 cup, cucumber salad: 1 cup",
    "dinner":"Mixed vegetable rice: 2 cup, dal tadka: 1 cup",
  },
  "Wed":{
    "breakfast":"1 cup milk with 1 tsp. jaggery, Rava idli: 2 nos., coconut chutney: 2 tbsp",
    "lunch":"Rice: 1 cup, potato and tomato curry: 1 cup, cucumber salad: 1/2 cup",
    "dinner":"Mixed vegetable rice: 1 cup, dal tadka: 1/2 cup",
  },
  "Thurs":{
    "breakfast":"1 cup Mango juice , Dates: 1/2 cup, Orange: 2no, Vegetable cutlet: 3 no",
    "lunch":"Rice: 2 cup, Rajmah curry: 2 cup",
    "dinner":'Peas and potato stuffed paratha: 1.5 no., cucumber and carrot salad : 1 cup',
  },
  "Fri":{
    "breakfast":"1 cup milk with 1 tsp. jaggery, Rava idli: 5 nos., coconut chutney: 3 tbsp",
    "lunch":"Vegetable khichdi: 1 cup, curd: 1 cup",
    "dinner":"Peas and potato stuffed paratha: 1.5 no., cucumber and carrot salad : 1 cup",
  },
  "Sat":{
    "breakfast":"1 cup milk with 1 tsp jaggery, Apple: 1 cup, Ragi dosa: 2 no, coconut chutney: 3 tbsp",
    "lunch":"Rice: 1 cup, potato and tomato curry: 1 cup, cucumber salad: 1 cup",
    "dinner":"Cabbage stuffed paratha: 1.5 no., dal: 1 cup",
  },
  "Sun":{
    "breakfast":"Fruit salad: 2 cup, Vegetable cutlet: 4-6 no",
    "lunch":"Rice: 2 cup, potato and tomato curry: 1 cup, cucumber salad: 1 cup",
    "dinner":"Peas and potato stuffed paratha: 1.5 no., cucumber and carrot salad : 1 cup",
  }
}
];
function selectPlanFromData(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
app.get("/", (req, res) => {
  const gender = req.query.gender;
  const age = req.query.age;
  const type = req.query.type;
  const weight = req.query.weight;
  const height = req.query.height;
  var calorieNeed = 0;
  if(gender === "male")
  calorieNeed = ((66.5+(13.8*weight)+(5*height))/(6.8*age))*1.3;


  if(gender==="female")
 { calorieNeed = ((65.5+(9.6*weight)+(1.9*height))/(4.7*age))*1.3;
  var meatT = mealType.filter((m)=>{
              if(m.minAge<= age && m.maxAge >= age && m.gender=== gender)
              return m;
          })
        }
  
  if (age >= 1 && age <= 3) 
    res.send(mealTypeOnetoThree[selectPlanFromData(0, 2)]);
  if (age >= 4 && age <= 6) 
    res.send(mealTypeFourtoSix[selectPlanFromData(0, 2)]);
  if (age >= 7 && age <= 9) 
    res.send(mealTypeSeventoNine[selectPlanFromData(0, 1)]);
  if (age >= 10 && age <= 12) 
    res.send(mealTypeTentoTwl[selectPlanFromData(0, 1)]);


   //res.send(meal);
})
app.listen(process.env.PORT || 3000, function () {

  console.log("start");

});


