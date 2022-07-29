<template>
  <base-card>
    <h2>Register A Coach Now!</h2>
    <coach-form @save-data="saveData"></coach-form>
  </base-card>
</template>

<script>
import CoachForm from '../../Componets/Coaches/CoachForm.vue';
export default {
  components: {
    CoachForm,
  },
  methods: {
    saveData(data) {
      console.log(this.$store);
      this.$store.dispatch('coaches/registerCoach', data);
      this.$router.replace('/coaches');
    },
  },
};
</script>
