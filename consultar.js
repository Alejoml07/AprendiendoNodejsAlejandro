var axios = require('axios');
var data = JSON.stringify({
    "collection": "APRENDICES",
    "database": "POSAlejandroMunoz",
    "dataSource": "ADSI2364482",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-bwwxc/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'xgLHtXTz7avFxHuu2xsddB2r89JchmxgCrAdlV0xOpNaoXTwbfEw9iWslYsMkCOx',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
