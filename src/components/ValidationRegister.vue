<template>
  <el-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="auto"
    class="demo-ruleForm validation__registered"
  >
    <el-form-item label="Пароль" prop="pass">
      <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item label="Повторите пароль" prop="checkPass">
      <el-input
        v-model="ruleForm.checkPass"
        type="password"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item label="Почта" prop="age">
      <el-input v-model.number="ruleForm.age" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm"> Отправить </el-button>
      <el-button @click="resetForm">Сбросить</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      ruleFormRef: null,
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
      },
      rules: {
        pass: [{ validator: this.validatePass, trigger: "blur" }],
        checkPass: [{ validator: this.validatePass2, trigger: "blur" }],
        age: [{ validator: this.checkAge, trigger: "blur" }],
      },
    };
  },
  methods: {
    checkAge(rule, value, callback) {
      if (!value) {
        return callback(new Error("Пожалуйста, введите почту!"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("Please input digits"));
        } else {
          if (value < 18) {
            callback(new Error("Age must be greater than 18"));
          } else {
            callback();
          }
        }
      }, 1000);
    },
    validatePass(rule, value, callback) {
      if (value === "") {
        callback(new Error("Пожалуйста, введите пароль!"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleFormRef.validateField("checkPass");
        }
        callback();
      }
    },
    validatePass2(rule, value, callback) {
      if (value === "") {
        callback(new Error("Пожалуйста, повторите пароль!"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("Пароли не совпадают!"));
      } else {
        callback();
      }
    },
    submitForm() {
      if (!this.$refs.ruleFormRef) return;
      this.$refs.ruleFormRef.validate((valid) => {
        if (valid) {
          console.log("submit!");
        } else {
          console.log("error submit!");
        }
      });
    },
    resetForm() {
      if (!this.$refs.ruleFormRef) return;
      this.$refs.ruleFormRef.resetFields();
    },
  },
};
</script>

<style>
.validation__registered {
  background: #fefefee6;
  padding: 20px;
  border-radius: 10px;
  animation: showBlock 0.3s ease;
}
.validation__registered::after {
  content: "";
  position: absolute;
  top: -14px;
  right: 6rem;
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 14px solid #fefefee6;
}
@keyframes showBlock {
  0% {
    height: 0px;
    overflow: hidden;
  }
  100% {
    height: 200px;
    overflow: hidden;
  }
}
</style>
