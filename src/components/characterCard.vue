<template>
  <div class="container" :style="{ 'background-image': `url('${data.images.portrait}')` }">
    <div class="card-container">
      <figure>
        <img :src="data.images.icon" :alt="data.name">
      </figure>
      <h1>{{ data.name }}</h1>
      <span>Rarity: {{ stars }} </span>
      <span>Element: {{ data.element }}</span>
      <span>Weapon: {{ data.weapontype }}</span>
      <span>Region: {{ data.region }}</span>
      <span>Birthday: {{ data.birthday }}</span>
      <span>Seiyuu: {{ data.cv.japanese }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'

let character: string = 'Klee'

let { data } = await axios.get(`https://genshin-db-api.vercel.app/api/characters?query=${character}&resultLanguage=Spanish`)
console.log(data)

const rarity = (data: any) => {
  const cantidad: string[] = []
  for (let i = 0; i < parseInt(data.rarity[0]); i++) {
    cantidad.push('⭐')
  }
  return cantidad
}

const stars = rarity(data).toString().split(',').join('')

</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-repeat: no-repeat; */
  background-position: center;
  height: 100vh;
  width: 100vw;
}

.card-container {
  display: flex;
  flex-direction: column;
  width: 450px;
  background-color: darkslategrey;
  color: white;
  text-align: center;
  padding: 25px;
  font-family: Helvetica, sans-serif;
}

p {
  display: flex;
}
</style>