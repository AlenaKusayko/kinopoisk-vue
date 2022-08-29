document.addEventListener("DOMContentLoaded", function(){

    let Vue = require("vue");
    let App = require("./app.vue");
    let Database = require("./database.js");
    
    
    let vm = new Vue({
        el: "#root",
        render: function(createElement){
            return createElement(App);
        }
    })
    
    
    
    });