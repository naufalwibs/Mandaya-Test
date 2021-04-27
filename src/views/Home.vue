<template>
  <section id="main-page">
    <div class="container pt-5">
      <div class="col-lg-12">
        <table class="table table-hover">
          <thead class="text-center">
            <tr>
              <th class="th-profil-picture">Profile Picture</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody
            class="text-center scrollable"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="busy"
            infinite-scroll-distance="10"
          >
            <UserList
              v-for="user in users"
              :key="user.login.uuid"
              :user="user"
            />
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import UserList from "../components/UserList";

export default {
  name: "Home",
  components: {
    UserList,
  },
  data() {
    return {
      data: [],
      currentPage: 1,
      maxPerPage: 10,
      totalResult: 100,
      busy: false,
    };
  },

  computed: {
    users() {
      return this.$store.state.users;
    },
  },

  methods: {
    loadMore() {
      this.busy = true;

      setTimeout(() => {
        this.maxPerPage += 10;
        this.busy = false;
      }, 5000);
    },
  },

  created() {
    this.$store.dispatch("fetchUsers", {
      currentPage: this.currentPage,
      maxPerPage: this.maxPerPage,
    });
  },
  updated() {
    this.$store.dispatch("fetchUsers", {
      currentPage: this.currentPage,
      maxPerPage: this.maxPerPage,
    });
  },
};
</script>

<style></style>
