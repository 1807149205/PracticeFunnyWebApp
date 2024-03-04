<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  MessageBox,
  Grid
  
} from '@element-plus/icons-vue'

import {onMounted} from 'vue';


onMounted(() => {

})

</script>

<template>
    <el-container style="width: 100%;height: 100%;">
        <el-header style="background-color: #e3e3e3;">
            
        </el-header>
        <el-container style="height: 100%;">
            <el-aside width="200px" style="height: 100%;">
                <el-menu router>
                    <el-menu-item index="contentManager">
                        <el-icon>
                            <document />
                        </el-icon>
                        <span>试题管理</span>
                    </el-menu-item>
                    <el-menu-item index="collectionManager">
                        <el-icon><MessageBox /></el-icon>
                        <span>集合管理</span>
                    </el-menu-item>
                    <el-menu-item index="categoryManager">
                        <el-icon><Grid /></el-icon>
                        <span>分类管理</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <RouterView/>
            </el-main>
        </el-container>
    </el-container>
</template>

<style scoped></style>