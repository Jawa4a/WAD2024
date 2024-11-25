<template>
  <main>
    <LoginFormComponent />
  </main>
</template>

<script>
import LoginFormComponent from "@/components/LoginFormComponent.vue";

export default {
  name: "Login",
  components: {
    LoginFormComponent,
  },
};
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Centers the form vertically */
  background-color: #f5f5f5; /* Light gray background for better visibility */
}
</style>
