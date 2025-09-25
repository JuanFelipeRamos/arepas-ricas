<script setup>
</script>


<template>
    <div class="container">
        <div class="left">
            <h1>AREPAS RICAS</h1>
        </div>
        <div class="right">
            <ul>
                <router-link to="/"><li>INICIO</li></router-link>
                <router-link to="/SobreNosotros"><li id="contact">SOBRE NOSOTROS</li></router-link>
                <router-link to="/Contactos"><li id="contact">CONTÁCTANOS</li></router-link>
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
    font-size: 22px;
    color: rgb(126, 106, 7);
}

#sobreNos:hover {
    margin-left: 59px;
}

#contact:hover {
    margin-left: 58px;
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

a {
    text-decoration: none;
    color: white;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 10px;
  }

  .left {
    margin-left: 0;
    margin-bottom: 15px;
  }

  h1 {
    font-size: 28px;
  }

  .right {
    margin-right: 0;
  }

  ul {
    padding: 0;
  }

  li {
    display: block;
    margin: 10px 0;
    font-size: 20px;
  }
}

</style>