<template>
  <nav>
    <v-navigation-drawer v-model="drawer" app color="primary" dark>
      <v-list-item>
        <v-list-item-avatar>
          <v-img class="img-round"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Username</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.route"
          link
        >
          <!-- <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon> -->

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="toggleSideBar"></v-app-bar-nav-icon>
      <v-toolbar-title style="cursor: pointer" @click="navigateHome"
        >Interview Managment</v-toolbar-title
      >
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          title: "Admin Dashboard",
          route: "/admin-dashboard",
        },
        {
          title: "Interviewer Dashboard",
          route: "/interviewer-dashboard",
        },
        {
          title: "Candidate Dashboard",
          route: "/candidate-dashboard",
        },
      ],
    };
  },
  methods: {
    toggleSideBar() {
      this.drawer = !this.drawer;
    },
    navigateHome() {
      this.$router.push("/");
    },
  },
};
</script>
<style>
.img-round {
  border: 1px solid grey;
  background-color: #ccc;
}
</style>
