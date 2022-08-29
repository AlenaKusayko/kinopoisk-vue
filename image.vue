
<style scoped>
.stolbci {
    display:flex;
    flex-direction: row;
    justify-content: space-between;  
}
.stroka {
    display:flex;
    flex-direction: column;    
}
h1 {
    font-weight: normal;
}
img {
    width: 200px;
}
</style>

<template>
    <div class="stolbci">
        <div v-for="(item, index) in items">
            <div class="stroka">
                <img v-bind:src="item.picture"/>
                <p class="name">{{item.movie}}</p>
                <p class="year">{{item.date}}</p>
            </div>
        </div>
    </div>
</template>

<script>
let Database = require("./database.js");


module.exports = {
    data: function () {
        return{
           items: Database
        }
    }
}
</script>





