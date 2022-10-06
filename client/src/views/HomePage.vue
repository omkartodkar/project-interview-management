<template>
  <div class="d-flex justify-center align-center mt-5">
    <Navbar />
    <h1>Landing Page / Login</h1>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "HomePage",
  components: {
    Navbar,
  },
};
</script>
