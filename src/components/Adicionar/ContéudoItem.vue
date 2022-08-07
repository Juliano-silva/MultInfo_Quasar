<template>
<div class="CaixaTable">
        <div class="Table" v-for="burger in burgers" :key="burger.id">
        <div id="ContainerTa">
            <dir><h1>{{burger.nome}}</h1></dir>
            <dir><p>{{burger.Text}}</p></dir>
            <div><button class="delete-btn" @click="deleteBurger(burger.id)">Apagar</button>
            <br>
          </div>
            </div>
        </div>
</div>
</template>
<script>
export default {
    name:"ContéudoItem",
    components:{

    },
    data(){
        return{
            burgers:null,
            burgers_id:null,
            status:[],
            msg:null
        }
    },
    methods:{
        async getPedidos(){
            const req = await fetch("http://localhost:3000/burgers")
            const data = await req.json();
            this.burgers = data;
            this.getStatus();
        },
        async deleteBurger(id){
            this.msg = `Pedido removido com sucesso`
            setTimeout(()=> this.msg="",3000)
            const req = await fetch(`http://localhost:3000/burgers/${id}`,{method:"DELETE"});
            const res = await req.json();
            this.getPedidos();
        },
        async updateBurger(event,id){
            const option = event.target.value;
            const dataJson = JSON.stringify({status:option});
            const req = await fetch(`http://localhost:3000/burgers/${id}`,{
                method:"PATCH",
                headers:{"Content-Type":"application/json"},
                body: dataJson
            });
            setTimeout(()=> this.msg="",3000)
        }
    },
    mounted(){
        this.getPedidos();
    }
}
</script>
