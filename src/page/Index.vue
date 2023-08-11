<script>
import indexButton from '../components/Button.vue'
import inputText from '../components/Form.vue'

const products = [{
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1516906571665-49af58989c4e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=300&q=80',
    name: 'MacBook Pro',
    onStock: false,
}, {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    name: 'iPhone',
    onStock: false,
}];

export default {
    // 匯出元件
    components: {
        indexButton, // 將Button元件引入這個元件
    },
    // 匯出資料
    data() {
        return {
            products: [],
            temp: {
                // name: '預設字0000',
                // imageUrl: 'https://images.unsplash.com/photo-1602526430780-782d6b1783fa?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            },
            // 決定是否為新增產品
            isNew: false
        }
    },
    // 方法
    methods: {
        // 新增出現input欄位
        addProducts(){
            this.isNew =true;
            this.temp = {};
        },
        // 編輯資料
        editButtonClick(i) {
            this.temp = { ...i };
            console.log(i)
        },
        // 新增
        updatedProducts() {
            if (!this.temp.id) {
                // unix timestamp方法
                this.temp.id = new Date().getTime();
                this.temp.onStock = false;
                this.products.push(this.temp);
                console.log(this.products);
            }else{
                this.products.forEach( (item,i) =>{
                    if(item.id === this.temp.id ){
                        this.products[i] = this.temp;
                    }
                })
            }
            this.isNew = false;
            this.temp = {};
        }
    },
    created() {
        this.products = products;
    }
};
</script>
<template>
    <div class="flex-row p-4 space-y-5">
        <indexButton class="ml-auto" buttonColor="light" text="新增" @click="addProducts()" />
        <table class="w-full">
            <thead class="border-b text-left">
                <tr>
                    <th>標題</th>
                    <th>圖片</th>
                    <th>銷售狀態</th>
                    <th>編輯</th>
                </tr>
            </thead>
            <tbody>
                <!-- 會放上key 放上唯一值 -->
                <!-- v-bind加上判斷轉成物件，前面是樣式 後面是判斷 -->
                <tr v-for="item in products" :key="item.id" :class="{ 'bg-primary-200': item.onStock }">
                    <td>{{ item.name }}</td>
                    <td>
                        <img :src="item.imageUrl" alt="" class="w-[150px]">
                    </td>
                    <td>
                        <input type="checkbox" name="" id="" v-model="item.onStock">
                    </td>
                    <td>
                        <indexButton buttonColor="primary" @click="editButtonClick(item)" text="編輯" />
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="grid grid-cols-2 gap-3 items-center mt-16" v-if="isNew || temp.id">
            <div>
                <label for="productName" class="form-label">產品名稱</label>
                <input type="text" class="form-control mb-3" v-model="temp.name">
                <label for="productImage" class="form-label">產品圖片</label>
                <input type="text" class="form-control mb-3" v-model="temp.imageUrl">
                <indexButton class="mt-3" buttonColor="info" text="更新" @click="updatedProducts()" />
            </div>
            <div>
                <img :src="temp.imageUrl" class="h-[150px] mx-auto" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
table td {
    @apply p-3;
}
</style>