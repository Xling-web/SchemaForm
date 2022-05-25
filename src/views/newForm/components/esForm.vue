<template>
    <div class="esForm">
        <el-form
            ref="ruleForm"
            :model="ruleForm"
            v-bind="$attrs"
            class="rule-form"
        >
            <el-row>
                <el-col
                    v-for="item in config"
                    :key="item.key"
                    :span="item.span"
                >
                    <el-form-item :label="item.label" :prop="item.key" :label-width="`${item.labelWidth}px`" :rules="item.rules">
                        <component v-model="ruleForm[item.key]" v-bind="item.props" :is="item.type">
                            <template v-if="item.type === 'el-select'">
                                <el-option
                                v-for="(option, optionIndex) in item.data"
                                :key="optionIndex"
                                :label="option.name"
                                :value="option.value"
                                ></el-option>
                            </template>
                            <template v-if="item.type === 'el-checkbox-group'">
                                <el-checkbox v-for="(checkbox,checkboxIndex) in item.data" :key="checkboxIndex" :label="checkbox.name" name="type"></el-checkbox>
                            </template>
                            <template v-if="item.type === 'el-radio-group'">
                                <el-radio v-for="(radio,radioIndex) in item.data" :key="radioIndex" :label="radio.name" name="type"></el-radio>
                            </template>
                        </component>
                    </el-form-item>
                </el-col>
                <slot name="btns" :ruleForm="ruleForm"></slot>
            </el-row>
        </el-form>
    </div>
</template>

<script>
import config from './config'
export default{
    data() {
        return {
            ruleForm:{},
            config
        }
    },
    created() {
        // 将config内的ruleform数据提取出来
        config.forEach(e => {
            this.$set(this.ruleForm,e.key,e.value)
        })
    },
    methods: {
       
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/comm.scss";
</style>