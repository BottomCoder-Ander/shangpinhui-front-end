export default {
  data() {
    return {
      money: 20000,
    };
  },

  methods: {
    handIn(money) {
      this.money -= money;
      this.$parent.money += money;
    },
  },
};
