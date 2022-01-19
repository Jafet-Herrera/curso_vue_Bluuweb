const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola munedo con vue',
        frutas: [
            {nombre: 'Pera', cantidad: 10},
            {nombre: 'Manzana', cantidad: 0},
            {nombre: 'Platano', cantidad: 11},
        ],
        nuevaFruta: ''
    },
    methods: {
        agregarFruta(){
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            });
            this.nuevaFruta='';//* limpia la caja de texto despuès de ingresar

        }
    }
})