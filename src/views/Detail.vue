<template>
  <section id="detail-page" class="pt-5">
    <div class="container">
      <div class="col-lg">
        <div class="card mb-3 detail-background">
          <div class="row g-0">
            <div class="col-md-4 d-flex justify-content-center py-5">
              <img
                :src="userById.picture.large"
                alt="Detail"
                class="detail-profile"
              />
            </div>
            <div class="col-md-8 py-5">
              <div class="card-body">
                <h5 class="card-title">
                  {{ userById.name.title }} {{ userById.name.first }}
                  {{ userById.name.last }}
                </h5>
                <div>
                  <p class="p-title-sm">Location</p>
                  <p class="card-text">
                    <i class="fas fa-map-marker-alt"></i>
                    {{ userById.location.street.name }},
                    {{ userById.location.street.number }}
                  </p>
                </div>
                <div>
                  <p class="card-text">
                    <i class="far fa-flag"></i>
                    {{ userById.location.city }}, {{ userById.location.state }}
                  </p>
                  <p class="card-text">{{ userById.location.country }}</p>
                </div>
                <p class="card-text">
                  {{ localeDate }}, {{ userById.dob.age }} years old.
                </p>
                <p class="card-text">
                  {{ userById.email }}
                </p>
              </div>
              <div class="col-lg d-flex justify-content-start">
                <button @click.prevent="toHome" class="btn btn-dark mx-3">
                  Back To Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DetailPage",
  methods: {
    toHome() {
      this.$router.push("/");
    },
  },
  computed: {
    userById() {
      return this.$store.state.users.find(
        (user) => user.login.uuid === this.$route.params.id
      );
    },

    localeDate() {
      return this.userById.dob.date.split("T")[0];
    },
  },

  created() {
    console.log(this.$route.params.id);
  },
};
</script>

<style></style>
