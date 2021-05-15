<template>
  <div class="container">
    <div>
      <el-button>button</el-button>
      <el-table :data="data">
        <el-table-column prop="tit"></el-table-column>
      </el-table>
      <h1 class="title" @click="onClick">
        {{title}}
        {{test}}
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  @Component({
    layout: 'Home',
    async asyncData({$axios}: any ) {
      try {
        const res = await $axios.$get('/page/detail')
        return { test: res, ddd: 11 }
      } catch (e) {
        console.error(e)
      }
    }
  })
  export default class HomePage extends Vue {
    // @Prop() name!: string;
    // @Prop() initialEnthusiasm!: number;

    data: object[] = [{tit: 111}]
    title: string = 'erp-code-generator'

    async onClick () {
      this.title += '1'
      const res = await this.$axios.$get('page/detail')
    }

    mounted(): void {
    }

  }
</script>

<style>

</style>
