var axios= require("axios");

var apiKey = "f8cce81526ce4df9b3ed59d4f0208a8c";

var helper = {
  search: function(term, beginDate, endDate){
    let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +apiKey + "&q=" +term + "&begin_date="+ beginDate + "0101"+ "&end_date="+ endDate + "0101"+ "&sort=newest";
      return axios.get(url).then(function(data){
        console.log(data);
        // console.log(data.data.response.docs[0].headline.main);

        var articles = [];
        for (var i = 0; i < data.data.response.docs.length; i++){
          articles.push(data.data.response.docs[i].headline.main);
        }
          console.log(articles);
      });
   }

  
};

module.exports = helper

// var articles = [];
// for (var i = 0; i < data.data.response.docs.length; i++){
//   articles.push(data.data.response.docs[i].headline.main);
// }
//   console.log(articles);
