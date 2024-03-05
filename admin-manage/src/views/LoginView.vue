<script lang="ts" setup>
import { reactive } from "vue";
import ApiClient from '../utils/request'
import { ElMessage } from 'element-plus'
import router from '../router/index'

const form = reactive({
    username: '',
    password: ''
})

const login = async () => {
    console.log(form);
    const {code, msg, data} = await ApiClient.post(`/admin/login`, JSON.stringify(form));
    console.log(code,msg,data);
    
    if (code === 400) {
        ElMessage({
            message: msg,
            type: 'warning'
        })
    }
    if (code == 200) {
        router.push('/');
    }
}

</script>

<template>
    <div class="loginContainer">
        <img src="https://picsum.photos/seed/picsum/1920/1080" style="object-fit: cover;width: 50%;height: 100%;">
        <div class="loginContent">
            <el-card class="form">
                <h1>登录</h1>
                <el-form-item label="账号">
                    <el-input v-model="form.username" />
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password" type="password"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login">登录</el-button>
                </el-form-item>
            </el-card>
        </div>
    </div>
</template>

<style scoped>
.loginContainer {
    width: 100%;
    height: 100%;
    display: flex;
}

.loginContent {
    width: 500px;
    height: 800px;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.loginContainer img {
    flex: 1;
    max-width: 50%;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    /* 这里设置阴影效果 */
}

.form {
    width: 400px;
    height: auto;
    margin: 0 auto;
}
</style>