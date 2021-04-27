<template>
  <tr>
    <td>
      <img class="profile-picture" :src="user.picture.thumbnail" alt="img" />
    </td>
    <td class="td-alignment">{{ user.name.title }} {{ user.name.first }}</td>
    <td class="td-alignment">{{ user.name.last }}</td>
    <td>
      <button
        @click.prevent="toDetailPage(user.login.uuid)"
        class="btn btn-dark"
      >
        Detail
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "UserList",
  props: ["user"],
  methods: {
    toDetailPage(id) {
      //   console.log(id);
      this.$router.push("/user/" + id);
    },
  },
};
</script>

<style></style>
