<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

</script>


<template>
    <div class="container">
        <Navbar />
        <div class="title">
            <h1>
                Historia de Arepas Ricas: Sabor
                <br>
                Casero con Tradición Familiar
            </h1>
        </div>
        <div class="parrafo">
            <p>
                Hace cuatro años, nació "Arepa Rica", un emprendimiento familiar con el propósito de llevar el auténtico
                <br>
                sabor de la arepa colombiana a cada hogar. Lo que comenzó con la modesta producción de cinco libras de maíz, hoy se ha
                <br>
                transformado en un negocio próspero que procesa cincuenta libras diarias, manteniendo
                <br>
                siempre la calidad artesanal que nos caracteriza.
            </p>
            <p>
                En "Arepa Rica", elaboramos nuestras arepas asadas cuidadosamente al carbón,
                <br>
                lo que les confiere un sabor y una textura inigualables.
                <br>
                Cada paquete contiene cinco unidades, listas para disfrutar en cualquier momento.
                <br>
                Distribuimos nuestros productos a tiendas, verdulerías y carnicerías locales, asegurando que el sabor de "Arepa Rica" esté
                <br>
                siempre al alcance de nuestros clientes.
            </p>
            <p>
                Además de nuestra distribución, contamos con un local físico donde ofrecemos las arepas recién
                <br>
                hechas y calientes, perfectas para quienes buscan una experiencia culinaria inmediata.
                <br>
                Con el esfuerzo y dedicación de nuestros tres empleados, hemos logrado consolidar "Arepa Rica" como un
                <br>
                referente de tradición y sabor en la comunidad.
            </p>
        </div>
        <Footer />
    </div>
</template>


<style scoped>

h1, p {
    font-family: 'Actor', sans-serif;
    text-align: center;
}

.title {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
}

.parrafo p {
    margin-bottom: 10px;
}

.parrafo {
    margin-bottom: 29px;
}

/* Responsividad */
@media (max-width: 1024px) {
  .title h1 {
    font-size: 1.8rem;
    line-height: 2.2rem;
    padding: 0 20px;
  }

  .parrafo {
    padding: 0 25px;
  }

  .parrafo p {
    font-size: 1rem;
    line-height: 1.6rem;
  }
}

@media (max-width: 768px) {
  .title {
    margin-top: 38px;
  }
  .title h1 {
    font-size: 1.5rem;
    line-height: 1.8rem;
    padding: 0 15px;
  }

  .parrafo {
    padding: 0 20px;
  }

  .parrafo p {
    font-size: 0.78rem;
    line-height: 1.5rem;
  }
}

@media (max-width: 480px) {
  .title h1 {
    font-size: 1.2rem;
    line-height: 1.4rem;
    padding: 0 10px;
  }

  .parrafo {
    padding: 0 15px;
  }

  .parrafo p {
    font-size: 0.9rem;
    line-height: 1.4rem;
  }
}

</style>