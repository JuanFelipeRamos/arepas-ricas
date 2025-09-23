<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

</script>


<template>
    <div class="container">
        <Navbar />
        <div class="containerWelcome">
            <div class="textos">
                <div class="txt">
                    <div>
                        <p class="txtYellow">Bienvenidos</p>
                    </div>
                    <div>
                        <p>a</p>
                    </div>
                </div>
                <div class="txt2">
                    <p>Arepas Ricas,</p>
                    <p>el sabor que une a los pueblos</p>
                </div>
                <div class="txtPequenio">
                    <p>Disfruta el auténtico sabor de nuestras arepas y bollos de maíz,</p>
                    <p>preparados con tradición, calidad y</p>
                    <p>el cariño de nuestra tierraue une a los pueblos.</p>
                </div>
            </div>
            <div class="logo">
                <img src="../assets/logo.png" alt="Logo" class="imgLogo">
            </div>
        </div>
        <div class="containerFondoYTitle">
            <div class="title">NUESTROS PRODUCTOS</div>
        </div>
        <div class="sectionFondo">
            <div class="contenidoFondo">
              <h2>AREPAS</h2>
            </div>
            <hr>
            <p class="txtProduct">
                Nuestras arepas son el sabor que acompaña cada momento del día: crujientes por fuera, suaves por dentro y siempre listas para conquistar tu paladar.
            </p>
            <p class="verProducts">Ver arepas</p>
            <div class="contenidoFondo">
              <h2>BOLLOS</h2>
            </div>
            <hr>
            <p class="txtProduct">
                El verdadero sabor de la tradición costeña. Nuestros bollos, envueltos con amor y hechos de maíz fresco, son el toque perfecto para recordar la cocina de casa en cada bocado.
            </p>
            <p class="verProducts">Ver bollos</p>
        </div>
        <Footer />
    </div>
</template>


<style scoped>

.txt {
    display: flex;
}

.txtYellow {
    margin-right: 4px;
    color: yellow;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: rgb(223, 184, 14);
}

.txt p, .txt2 p {
    font-size: 27px;
}

.containerWelcome {
    font-family: 'Actor', sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 34px 90px 80px 80px;
}

.imgLogo {
    width: 410px;
    animation: bajar 1.5s ease-out forwards, flotar 2s ease-in-out infinite;
}

@keyframes bajar {
  from {
    transform: translateY(-200px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes flotar {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
}

.textos {
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
}

.containerFondoYTitle {
  position: relative;
  width: 100%;
  height: 200px;
  background-image: url('../assets/arepas-fondo.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.containerFondoYTitle::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}

.title {
  position: relative;
  color: white;
  font-size: 32px;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(0,0,0,0.6);
}

h2 {
  font-family: 'Karantina', cursive;
  color: yellow;
  -webkit-text-stroke-width: 1.2px;
  -webkit-text-stroke-color: black;
  font-size: 36px;
  font-weight: bold;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
}

.sectionFondo {
  position: relative;
  width: 100%;
  min-height: 607px;
  background-image: url('/fondo-principal.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  padding: 40px;
  flex-direction: column;
}

.sectionFondo::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 0;
}

.sectionFondo > * {
  position: relative;
  z-index: 1;
}

.contenidoFondo {
  position: relative;
  z-index: 1;
  color: white;
}

.txtProduct {
    font-size: 18px;
}

hr {
    width: 100%;
    background-color: white;
    height: 2px;
    border: none;
    margin-bottom: 13px;
}

.verProducts {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 40px;
}

</style>