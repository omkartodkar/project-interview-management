<template>
  <div class="d-flex justify-center align-center mt-5">
    <Navbar />
    <h1>Candidate dashboard</h1>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "CandidateDashboard",
  components: {
    Navbar,
  },
};
</script>
