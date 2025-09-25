<script setup>
defineProps({
    imageUrl: {
        type: String,
        required: true
    },
    name: String,
    precio: String
})

</script>


<template>
    <div class="container">
        <div class="imgProduct">
            <img :src="imageUrl" alt="Producto">
        </div>
        <div class="nameYPrecio">
            <h2>{{ name }}</h2>
            <p>{{ precio }}</p>
        </div>
    </div>
</template>


<style scoped>

.container {
    display: flex;
    flex-direction: column;
    background-color: rgba(126, 106, 7, 0.5);
    width: 235px;
    padding: 20px;
    justify-content: center;
    align-items: center;
    border: solid black 1px;
    border-radius: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.301);
    transition: 0.3s;
}

.container:hover {
    width: 237px;
    background-color: rgba(185, 156, 9, 0.733);
}

img {
    width: 200px;
    border-radius: 16px;
    border: solid black 1px;
}

.nameYPrecio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
}

</style>