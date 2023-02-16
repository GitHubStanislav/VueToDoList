const app = Vue.createApp({
  data() {
    return {
      goals: [],
      goalsInput: "",
      visible: true,
    };
  },
  computed: {
    updateButtonText() {
      return this.visible ? "Hide" : "Show List";
    },
  },
  methods: {
    addGoal() {
      if (this.goalsInput !== "") {
        this.goals.push(this.goalsInput);
        if (this.visible === false) {
          this.visible = true;
        }
        this.goalsInput = "";
      }
    },
    removeGoals(idx) {
      this.goals.splice(idx, 1);
    },
    hideLiElements() {
      if (this.goals.length > 0) {
        this.visible = !this.visible;
      }
    },
  },
});
app.mount("#assignment");

// test
