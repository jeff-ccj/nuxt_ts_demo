import { NuxtContext } from 'nuxt'
import Vue from 'vue'
// import { Store } from 'vuex'

declare module 'vue/types/vue' {
  interface Vue {
    // $store: Store,
    $axios: any, // 挂载的 vue 全局变量
    $echarts: any
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    asyncData?(context: NuxtContext<V>): Promise<object> | object
    fetch?(context: NuxtContext<V>): Promise<object> | object
    layout?: string;
    middleware?: string | string[];
  }
}
