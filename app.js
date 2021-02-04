Vue.component('showform', {
    template: '#show-form' ,
    data(){
        return {
            data: {namabarang: '', merk: '',stock: '', harga: ''}
        }
    },
    methods: {
        simpan: function() {
            this.$emit('send-data', this.data);
            this.data.namabarang = "";
            this.data.merk = "";
            this.data.stock = "";
            this.data.harga = "";
        }
    }
})

Vue.component('showdata', {
    template: '#show-data',
    props: ['data']
})

var app = new Vue({
    el: '#app',
    data:{
        toko: {
        }
    },
    methods: {
        getData: function (value) {    
            this.toko = {
                namabarang : value.namabarang,
                merk : value.merk,
                stock : value.stock,
                harga : value.harga
                
            }
        }
    }
})