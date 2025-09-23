<script setup>
import TarjetaProducto from '@/components/TarjetaProducto.vue';
import bollos from '../assets/bollos.jpg';
import aguaMaiz from '../assets/aguaMaiz.jpg';
import masa from '../assets/masa.jpg'
import Footer from '@/components/Footer.vue';

</script>


<template>
    <div>
        <div class="sectionFondo">
            <div class="contenidoFondo">
              <h2>BOLLOS, AGUA DE MAÍZ Y MASAS</h2>
            </div>
            <hr>
            <div class="containerTarjetas">
                <TarjetaProducto :imageUrl="bollos" name="Bollo de maíz" precio="5 x $4,000" />
                <TarjetaProducto :imageUrl="aguaMaiz" name="Agua de maíz" precio="$3,000" />
                <TarjetaProducto :imageUrl="masa" name="Masa" precio="$3,000" />
            </div>
        </div>
        <Footer />
    </div>
</template>


<style scoped>

.sectionFondo {
  display: flex;
  padding: 10px 40px;
  flex-direction: column;
  margin-bottom: 24px;
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