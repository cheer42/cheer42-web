<template>
  <div class="flex justify-center">
    <form action="" class="mt-16">
      <Card>
        <template #title>
          Регистрация
        </template>
        <template #content>
          <div class="p-float-label p-input-icon-right w-full mt-4 mb-7">
            <i class="pi pi-envelope" />
            <InputText id="email" type="email" v-model="registerData.email" aria-describedby="email-error"/>
            <label for="email" >Email*</label>
          </div>
          <div class="p-inputgroup mb-7 w-full">
            <div class="p-float-label">
              <InputText id="name" v-model="registerData.first_name" />
              <label for="name">Имя*</label>
            </div>
            <div class="p-float-label">
              <InputText id="second_name" v-model="registerData.second_name" />
              <label for="second_name">Фамилия*</label>
            </div>
          </div>
          <div class="p-float-label mb-7 w-full">
            <InputText id="father_name" v-model="registerData.father_name" />
            <label for="father_name">Отчество</label>
          </div>
          <div class="p-float-label w-full mb-7">
            <Calendar id="date" v-model="registerData.birth_date" :max-date="new Date()"
                      class="w-full" :showIcon="true" />
            <label for="date">День рождения</label>
          </div>
          <div class="p-float-label w-full mb-7">
            <Password id="password" class="w-full" v-model="registerData.password" />
            <label for="password">Введите пароль*</label>
          </div>
          <div class="p-float-label w-full mb-7">
            <Password id="repeat-password" v-model="registerData.repeat_password" :feedback="false" />
            <label for="repeat-password">Повторите пароль*</label>
          </div>
        </template>
        <template #footer>
          <Button type="submit" icon="pi pi-check" label="Регистрация" />
        </template>
      </Card>
    </form>

  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "register",
  data() {
    return {
      registerData: {
        first_name: '',
        second_name: '',
        father_name: '',
        birth_date: '',
        email: '',
        password: '',
        repeat_password: ''
      }
    }
  }
})
</script>

<style scoped>
form{
  width: min(600px, 90vw)
}
input{
  width: 100%
}
</style>