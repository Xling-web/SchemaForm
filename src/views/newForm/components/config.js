export default[
    {
        type:'el-input',
        key:'name',
        value:'',
        label: '活动名称',
        span:12,
        labelWidth:100,
        rules:[
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        props: {
            placeholder: '请输入活动名称',
            clearable: true,
        },
    },{
        type:'el-select',//所需渲染的组件名
        key:'region',// 当前字段的 key 值
        value:'',// 当前字段的的数据
        label: '活动区域',// 当前 el-form-item 的label
        span:12,//el-col的span数据
        labelWidth:100,// el-form-item 的label宽度
        rules:{ required: true, message: '请选择活动区域', trigger: 'change' },//表单验证规则
        //注入到渲染组件当中的属性
        props: {
            placeholder: '请选择活动区域',
            clearable: true
        },
        //注入到渲染组件当中的数据  如：select下拉内容或checkbox、radio的数据
        data:[
            {
                id:1,
                name:'区域一',
                value:'shanghai'
            },{
                id:2,
                name:'区域二',
                value:'beijing'
            }
        ]
    },{
        type:'el-date-picker',
        key:'date1',
        value:'',
        label: '活动时间',
        span:12,
        labelWidth:100,
        rules:{ required: true, message: '请选择日期', trigger: 'change' },
        props: {
            placeholder: '请选择日期',
            clearable: true,
            type:"datetimerange",
            startPlaceholder:"开始日期",
            endPlaceholder:"结束日期",
            valueFormat: 'timestamp',
        }
    },{
        type:'el-switch',
        key:'delivery',
        value:false,
        label: '即时配送',
        span:12,
        labelWidth:100,
        rules:null,
        props: {}
    },{
        type:'el-checkbox-group',
        key:'type',
        value:[],
        label: '活动性质',
        span:12,
        labelWidth:100,
        rules:{ type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' },
        props: {},
        data:[
            {
                id:1,
                name:'美食/餐厅线上活动',
            },{
                id:2,
                name:'地推活动',
            },{
                id:3,
                name:'线下主题活动',
            },{
                id:4,
                name:'单纯品牌曝光',
            }
        ]
    },{
        type:'el-radio-group',
        key:'resource',
        value:"",
        label: '特殊资源',
        span:12,
        labelWidth:100,
        rules:{ required: true, message: '请选择活动资源', trigger: 'change' },
        props: {},
        data:[
            {
                id:1,
                name:'线上品牌商赞助',
            },{
                id:2,
                name:'线下场地免费',
            }
        ]
    },{
        type:'el-input',
        key:'desc',
        value:"",
        label: '活动形式',
        span:24,
        labelWidth:100,
        rules:{ required: true, message: '请填写活动形式', trigger: 'blur' },
        props: {
            type:"textarea"
        }
    },
]