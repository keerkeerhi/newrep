<template>
  <section class="homeTem">
    <section></section>
    <section>
      <h2>欢迎来到菠萝</h2>
      <div>请输入您的邮箱和昵称</div>
      <section>
        <div class="circleDiv">
          <img :src="logo"/>
        </div>
      </section>
      <!--<img :src="" />-->
      <el-form :model="userInfo" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="钱包地址" prop="wallet">
          <el-input v-model="userInfo.wallet" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="userInfo.email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickname">
          <el-input v-model="userInfo.nickname"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="startPlay" type="primary" @click="submitForm('ruleForm')">保存信息</el-button>
        </el-form-item>
      </el-form>
    </section>
    <section></section>
  </section>
</template>
<script>
  import userService from '../../service/userev'
  import './Register.scss'
  import logo from '../../assets/icon/bolo.png'

  export default {
    name: 'register',
    data() {
      return {
        logo,
        rules: {
          // name: [
          //   { required: true, message: '请输入活动名称', trigger: 'blur' },
          //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          // ],
          email: [
            {required: true, type: 'email', message: '请输入邮箱', trigger: 'blur'}
          ],
          nickname: [
            {required: true, message: '请输入昵称', trigger: 'blur'}
          ]
        },
        userInfo: {
          email: '',
          nickname: '',
          wallet: '',
          avatar: ''
        }
      }
    },
    created() {
      this.setWallet();
      // this.$store.commit("setWallet",555);
      // console.log('-------------->>',this.$store.state.wallet)
    },
    methods: {
      setWallet() {
        try {
          this.userInfo.wallet = web3.eth.defaultAccount
          if (!this.userInfo.wallet)
            throw new Error('钱包需要解锁')
        } catch (e) {
          this.$router.push('/Login');
        }
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.setWallet();
            // delete this.userInfo.avatar
            let formdata = new FormData();
            formdata.append('wallet',this.userInfo.wallet);
            formdata.append('email',this.userInfo.email);
            formdata.append('nickname',this.userInfo.nickname);
            formdata.append('avatar',this.userInfo.avatar)
            userService.create_user(formdata).then(res => {
              if (res.code == 0) {
                this.$message({
                  message: '保存成功！',
                  type: 'success'
                });
                this.$router.push('/UserDetail');
              }
              else if (res.code=-2)
              {
                this.$message({
                  message: '用户已存在！',
                  type: 'warning'
                });
              }else {
                this.$message.error('保存失败！');
              }
            })
          } else {
            return false;
          }
        });
      }
    }
  }
</script>
