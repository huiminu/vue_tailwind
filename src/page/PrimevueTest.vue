<script>
import ButtonComponent from '../components/Button.vue';

export default {
    data() {
        return {
            tabs: [
                { title: 'Tab 1', content: 'Tab 1 Content' },
                { title: 'Tab 2', content: 'Tab 2 Content' },
                { title: 'Tab 3', content: 'Tab 3 Content' }
            ],
            date: null,
            selectedCountry: null,
            countries: [
                { name: 'Australia', code: 'AU' },
                { name: 'Brazil', code: 'BR' },
                { name: 'China', code: 'CN' },
                { name: 'Egypt', code: 'EG' },
                { name: 'France', code: 'FR' },
                { name: 'Germany', code: 'DE' },
                { name: 'India', code: 'IN' },
                { name: 'Japan', code: 'JP' },
                { name: 'Spain', code: 'ES' },
                { name: 'United States', code: 'US' }
            ],
        };
    },
    components: {
        ButtonComponent, // 在這裡註冊按鈕元件
    },
    methods: {
        confirm1(event) {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Are you sure you want to proceed?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                }
            });
        },
        confirm2(event) {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Do you want to delete this record?',
                icon: 'pi pi-info-circle',
                acceptClass: 'p-button-danger',
                accept: () => {
                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                }
            });
        },
    }
};
</script>

<template>
    <div>
        <h2>primevue 測試</h2>
        <p> 更新更新內容內容</p>
        <font-awesome-icon icon="shopping-cart" />
        <font-awesome-icon :icon="['fab', 'instagram']" />
        <h2>button</h2>
        <div class="flex space-x-2">
            <ButtonComponent buttonColor="primary" icon="pi pi-check" />
            <ButtonComponent buttonColor="primary" label="Submit" icon="pi pi-check" text="getRouter" />
            <ButtonComponent buttonColor="primary" label="getRoute" icon="pi pi-check" iconPos="right" />
            <ButtonComponent buttonColor="secondary" label="getRouter" />
            <ButtonComponent buttonColor="info" label="info" />
            <ButtonComponent buttonColor="light" label="info" />
        </div>
        <h2 class="mt-5">Accordion</h2>
        <div class="card">
            <Accordion :activeIndex="0">
                <AccordionTab header="Header I">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header II">
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                        dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam
                        eius modi.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header III">
                    <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                        provident, similique sunt in culpa qui
                        officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est
                        et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                        quo minus.
                    </p>
                </AccordionTab>
            </Accordion>
        </div>
        <h2 class="mt-5">TabView</h2>
        <div class="card">
            <TabView>
                <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">
                    <p>{{ tab.content }}</p>
                </TabPanel>
            </TabView>
        </div>
        <h2 class="mt-5">confirmpopup</h2>
        <div>
            <Toast />
            <ConfirmPopup></ConfirmPopup>
            <div class="card flex flex-wrap gap-2 justify-content-center">
                <ButtonComponent @click="confirm1($event)" buttonColor="primary" icon="pi pi-check" label="Confirm" />
                <ButtonComponent @click="confirm2($event)" severity="danger" icon="pi pi-check" label="Delete" />
            </div>
        </div>
        <h2 class="mt-5">Calendar</h2>
        <div class="card flex justify-content-center">
            <Calendar v-model="date" showIcon />
        </div>
        <h2 class="mt-5">Dropdown</h2>
        <div class="card flex justify-content-center">
            <Dropdown v-model="selectedCountry" :options="countries" filter optionLabel="name"
                placeholder="Select a Country" class="w-full md:w-14rem">
                <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex align-items-center">
                        <div>{{ slotProps.value.name }}</div>
                    </div>
                    <span v-else>
                        {{ slotProps.placeholder }}
                    </span>
                </template>
                <template #option="slotProps">
                    <div class="flex align-items-center">
                        <div>{{ slotProps.option.name }}</div>
                    </div>
                </template>
            </Dropdown>
        </div>
    </div>
</template>
<style lang="scss">
.p-calendar>.p-button {
    @apply bg-primary-500 border-primary-500 hover:border-primary-800 hover:bg-primary-800 text-white focus:shadow;
}</style>

