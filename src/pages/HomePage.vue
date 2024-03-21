<template>
  <div class="page-container">
    <q-layout view="lHh Lpr lFf">
      <q-toolbar class="bg-blue-10 text-white shadow-2" style="height: 80%;">
        <q-btn flat round dense icon="menu" class="q-mr-sm" />
        <q-separator dark vertical inset />

        <q-space />

        <q-separator dark vertical />

        <router-link to="home" class="text-white" style="text-decoration: none;" v-slot="{ navigate }">
          <q-btn @click="navigate" stretch flat label="Home" />
        </router-link>
        <q-separator dark vertical />

        <router-link to="/about" class="text-white" style="text-decoration: none;" v-slot="{ navigate }">
          <q-btn @click="navigate" stretch flat label="About" />
        </router-link>
        <q-separator dark vertical />

        <router-link to="/contact" class="text-white" style="text-decoration: none;" v-slot="{ navigate }">
          <q-btn @click="navigate" stretch flat label="Contact" />
        </router-link>
      </q-toolbar>
      <q-page-container>
        <q-page class="q-pa-md">
          <div class="row q-gutter-md" style="background: aliceblue;">
            <div class="col-md-8 mainheader">
              <h1>Welcome to PK Blog site</h1>
              <p>Stay updated with the latest news from PK BLOGGERS..!</p>
            </div>
            <div class="col-md-3 d-flex justify-end">
              <img src="../assets/pki.jpg" style="width: 60%;" />
            </div>
          </div>
          <div class="row1">
            <div class="col-md-4 d-flex flex-column align-center" style="margin-top: 10px;">
              <div class="image-container">
                <q-img src="../assets/col1.jpg" style="width: 100%;" />
                <q-btn class="q-mt-md go-to-button" label="TECHNOLOGY" />
              </div>
            </div>
            <div class="col-md-4 d-flex flex-column align-center" style="margin-top: 10px;">
              <div class="image-container">
                <q-img src="../assets/col2.jpg" style="width: 100%; height: 110%;" />
                <q-btn class="q-mt-md go-to-button" label="SPORTS" />
              </div>
            </div>
            <div class="col-md-4 d-flex flex-column align-center" style="margin-top: 10px;">
              <div class="image-container">
                <q-img src="../assets/col3.jpg" style="width: 100%;" />
                <q-btn class="q-mt-md go-to-button" label="MOVIES" />
              </div>
            </div>
          </div>
        </q-page>
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
.page-container {
  margin: 0 auto; /* Center the container horizontally */
  max-width: 1200px; /* Set a maximum width for the container */
}

h1 {
  color: rgb(30, 58, 148);
  margin: 8px 0;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 50px;
}

p {
  margin: 0;
}

.mainheader {
  padding: 10px;
  color: rgb(104, 2, 2);
}

.q-mt-md {
  margin-top: 20px;
}

.image-container {
  position: relative;
}

.go-to-button {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 70%;
  background-color: darkcyan;
  color: #ffffff;
  border: 5px transparent;
  border-radius: 5px;
  font-size: 25px;
  font-weight: bolder;
  font-style: italic;
  padding: 5px 10px;
}
</style>
