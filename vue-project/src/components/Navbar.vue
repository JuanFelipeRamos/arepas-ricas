<script setup>
</script>


<template>
    <div class="container">
        <div class="left">
            <h1>AREPAS RICAS</h1>
        </div>
        <div class="right">
            <ul>
                <li>INICIO</li>
                <li id="sobreNos">SOBRE NOSOTROS</li>
                <li id="contact">CONTÁCTANOS</li>
            </ul>
        </div>
    </div>
</template>


<style scoped>

.container {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
}

h1 {
  font-family: 'Karantina', cursive;
  color: yellow;
  -webkit-text-stroke-width: 1.2px;
  -webkit-text-stroke-color: black;
  font-size: 36px;
  font-weight: bold;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
}

li {
  font-family: 'Kelly Slab', cursive;
  text-align: center;
  display: inline;
  margin: 0px 50px;
  font-size: 23px;
  list-style-type: none;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
  transition: 0.3s;
}

li:hover {
    font-size: 21px;
    color: rgb(126, 106, 7);
}

#sobreNos:hover {
    margin-left: 68px;
}

#contact:hover {
    margin-left: 65px;
}

.left {
    margin-left: 80px;
}

.right {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
}

</style>