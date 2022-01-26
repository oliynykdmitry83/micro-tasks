const inputData = { "distance" : { "unit": "m", "value": 0.5}, "convert_to": "ft" };

const distanceConfig = {
   mm: {
      m: 0.001,
      cm: 0.01,
      km: 100,
      ft: 328.08,
      in: 3937.0,
      yd: 109.36      
   },
   cm: {
      mm: 100,
      m: 0.01,
      km: 0.00001,
      ft: 0.032808,
      in: 0.393700,
      yd: 0.010936
   },
   m: {
      mm: 1000,
      cm: 100,
      km: 0.001,
      ft: 3.2808,
      in: 39.370,
      yd: 1.0936      
   },
   km: {
      mm: 1000000,
      cm: 100000 ,
      m:  1000,
      ft: 3280.8,
      in: 39370,
      yd: 1093.6      
   },
   ft: {
      mm: (1/0.0032808),
      cm: (1/0.032808),
      m: (1/3.2808),
      km: (1/3280.8),
      in: 12,
      yd: 0.33333
   },
   in: {
      mm: (1/0.03970),
      cm: (1/0.3970),
      m: (1/39.70),
      km: (1/39370),
      ft: 0.083333,
      yd: 0.027778
   },
   yd: {
      mm: (1/0.0010936),
      cm: (1/0.010936),
      m: (1/1.0936),
      km: (1/1093.6),
      ft: 3,
      in: 36
   },

};

const convert = (inputData) => {
   const distanceValue = inputData.distance.value;
   const unit = inputData.distance.unit;
   const convertToUnit = inputData.convert_to;
   const distanceKoef = distanceConfig[unit][convertToUnit];
   
   return {"unit": convertToUnit, "value": (distanceValue * distanceKoef).toFixed(2)}; 
};

console.log(convert(inputData));
