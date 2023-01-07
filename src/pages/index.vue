<!-- font-weight-bold -->
<template>
  <div class="bg-blue-200 h-screen rounded-lg">
      <form @submit.prevent="(HandleRegister)" class="flex flex-col justify-center items-center my-2">
        <input type="text" placeholder="ingrese un nombre" v-model.trim="username" class="h-[35px] w-[10rem] rounded-full my-4">
        <!-- <input type="email" placeholder="ingrese email" v-model.trim="emailLogin" class="h-[35px] w-[10rem] rounded-full mb-4"> -->
			  <input type="password" placeholder="ingrese contraseña" v-model.trim="password" class="h-[35px] w-[10rem] rounded-full mb-11">
			  <input type="password" placeholder="ingrese contraseña" v-model.trim="repassword" class=" h-[35px] w-[10rem] rounded-full mb-11">

        <button type="submit" class="vic-btn">
          <span class="vic-btn-span">
            Iniciar Sesion
          </span>
        </button>

        <div v-if="errors.length">
          <main v-for="item in errors" :key="item">
            {{ item }}
          </main>
        </div>
        <!-- <a-button type="submit" >Crear Usuario</a-button> -->
		  </form>
    </div>
  

<Vcarousel> </Vcarousel>
</template>

<script setup>
import axios from 'axios';


const username = ref('mario')
const password = ref('')
const repassword = ref('')
const errors = ref([])

const HandleRegister = () => {
  if (username.value === '') {
    notify({title: "Nombre incorrecto", type: "error", text: ` no mande los datos vacios`,});
    // errors.value.push('el nombre de usuario esta vacio')
  }

  if (password.value === '') {
    errors.value.push('la contraseña esta vacia')
  }

  if (password.value !== repassword.value) {
    errors.value.push('la contraseña esta no es igual')
  }

  if (!errors.value.length) {
    const formData = {
      username: username.value,
      password: password.value
    }

    axios
      .post('http://127.0.0.1:8000/api/v1/users', formData)
      .then(res => {
        alert('cuenta creada')
      })
  }
}

</script>

<style lang="scss" scoped>

</style>