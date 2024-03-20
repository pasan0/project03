<template>
  <div>
    <q-layout view="lHh Lpr lFf">
      <q-toolbar class="bg-blue-10 text-white shadow-2" style="height: 80%;">
        <q-btn flat round dense icon="menu" class="q-mr-sm" />
        <q-separator dark vertical inset />

        <q-space />

        <q-separator dark vertical />
        <!-- Use router-link to navigate to the About page -->
        <router-link to="/about" class="text-white" style="text-decoration: none;" v-slot="{ navigate }">
          <q-btn @click="navigate" stretch flat label="About" />
        </router-link>
        <q-separator dark vertical />
        <!-- Use router-link to navigate to the Contact page -->
        <router-link to="/contact" class="text-white" style="text-decoration: none;" v-slot="{ navigate }">
          <q-btn @click="navigate" stretch flat label="Contact" />
        </router-link>
      </q-toolbar>
      <q-page-container>

        <div class="">
          <div class="row" style="background: aliceblue;">
            <div class="col-md-8 mainheader">
              <h1>Welcome to PK Blog site</h1>
              <p>PK Blog is the place you can read everything in the technology field.</p>
            </div>
            <div class="col-md-4 col-md-offset-8">
              <img src="../assets/pki.jpg" style="width: 40%; margin: 0 auto; display: block;">
            </div>
          </div>
        </div>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
defineOptions({
  name: 'MainLayout'
})
</script>

<style>
h1{
  color: rgb(30, 58, 148);
  margin: 8px 0;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 50px;

}

img{
  width: 100%;
  margin: auto;
  padding: 0
}

p{
  margin: 0
}
.mainheader{
  padding: 10px 10px;
  color: rgb(104, 2, 2);
  margin: 0;
  margin: auto
}
</style>


