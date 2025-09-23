<script setup>
import Navbar from '@/components/Navbar.vue';

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
    margin: 34px 90px 0px 80px;
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

</style>