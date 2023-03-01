import { defineComponent } from 'vue';
import api from '@/service/api';

export default defineComponent({
  name: 'FooterView',
  data() {
    return {
      socialLinks: [],
    };
  },
  mounted() {
    api.get('/social-links.json').then((response) => {
      this.socialLinks = response.data;
    });
  },
});
