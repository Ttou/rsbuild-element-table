<template>
  <div id="app">
    <el-table
      v-loading="loading"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.7)"
      :data="tableData"
      style="width: 100%"
      height="400px"
    >
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { onMounted } from 'vue'
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const state = reactive({
      loading: false,
      tableData: [] as any[]
    })

    onMounted(() => {
      state.loading = true

      setTimeout(() => {
        state.loading = false
        state.tableData = [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ]
      }, 1500)
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style>
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  position: relative;
}

ul,
li,
ol {
  list-style: none;
}
</style>
