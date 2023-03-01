import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWord/HelloWorld.vue';

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
