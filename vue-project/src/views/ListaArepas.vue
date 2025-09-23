<script setup>
import TarjetaProducto from '@/components/TarjetaProducto.vue';
import arepasSimple from '../assets/arepasSimple.jpg';
import arepasQueso from '../assets/arepasQueso.jpg';

</script>


<template>
    <div class="sectionFondo">
        <div class="contenidoFondo">
          <h2>AREPAS</h2>
        </div>
        <hr>
        <div class="containerTarjetas">
            <TarjetaProducto :imageUrl="arepasSimple" name="Arepa simple" precio="5 x $3,000" />
            <TarjetaProducto :imageUrl="arepasQueso" name="Arepa de queso" precio="5 x $6,000" />
        </div>
    </div>
</template>


<style scoped>

.sectionFondo {
  display: flex;
  padding: 10px 40px;
  flex-direction: column;
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

hr {
    width: 100%;
    background-color: white;
    height: 2px;
    border: none;
    margin-bottom: 13px;
}

.containerTarjetas {
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
  margin-top: 24px;
}

</style>