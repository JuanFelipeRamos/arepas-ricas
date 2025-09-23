<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

</script>


<template>
    <div>
        <div class="container">
            <Navbar />
            <div class="containerContactos">
                <div class="contactos">
                    <div class="txt">
                        <p>¡El sabor de nuestras</p>
                        <p>arepas de solo maíz está a</p>
                        <p>un mensaje de distancia!</p>
                    </div>    
                    <div class="txt2">    
                        <p class="redSocial">    
                            <strong>Whatsapp:</strong> +57 3215383005    
                        </p>    
                        <a class="enlace" href="https://www.instagram.com/arepa2238?utm_source=qr&igsh=MmFwb2hnNmFlanI0" target="_blank">
                            <p class="redSocial">    
                                <strong>Instagram:</strong> @arepa2238    
                            </p>    
                        </a>    
                        <a class="enlace" href="https://www.facebook.com/share/1Ciucq2B6K/" target="_blank">
                            <p class="redSocial">    
                                <strong>Facebook:</strong> Arepas Ricas    
                            </p>    
                        </a>    
                    </div>
                </div>
                <div class="logo">
                    <img src="../assets/logo-contacto.png" alt="Logo de contactos" class="imgLogo">
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>


<style scoped>

.container {
    margin-bottom: 48px;
}

.txt {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
}

.txt, .txt2 {
    text-align: center;
}

.txt p, .txt2 p {
    font-size: 25px;
}

.a {
    text-align: center;
    display: inline;
}

.containerContactos {
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

.contactos {
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
    border: solid rgba(233, 233, 233, 0.575) 1px;
    border-radius: 20px;
    background-color: rgba(211, 211, 211, 0.253);
    padding: 27px;
}

strong {
    color: yellow;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: rgb(223, 184, 14);
}

.redSocial {
    margin-bottom: 35px;
}

.enlace {
    text-decoration: none;
    color: white;
}

</style>