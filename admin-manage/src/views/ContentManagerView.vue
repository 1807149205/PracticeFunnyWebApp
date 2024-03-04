<script setup lang="ts">

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]



</script>

<template>
    <div class="container">
        <div class="search">

        </div>
        <div class="table">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="id" label="id" width="180" />
                <el-table-column prop="title" label="题目标题" width="180" />
                <el-table-column prop="contentName" label="集合名称" width="180" />
                <el-table-column>
                    <template #default="scope">
                        <el-button>查看试题(html)</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div style="display: flex; justify-content: center; margin-top: 10px;">
                <el-pagination background layout="prev, pager, next" :total="1000" />
            </div>
        </div>
    </div>
</template>

<style scoped>


</style>