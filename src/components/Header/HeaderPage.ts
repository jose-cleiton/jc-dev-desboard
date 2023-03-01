import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderPage',

  data(): { menuActive: boolean } {
    return {
      menuActive: false,
    };
  },

  methods: {
    openMenu(): void {
      this.menuActive = true;
    },
    closeMenu(): void {
      this.menuActive = false;
    },
  },
});