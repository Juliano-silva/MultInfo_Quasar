<template>
   <div>
    <div class="EA">
                  <h1>Escreva algo</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo mollitia quasi ad harum recusandae perspiciatis praesentium non unde fugit dolor inventore aspernatur, in vitae ea sequi molestias dolores facilis animi!</p>
    </div>
       <div class="Corpo">
           <form id="burger-form" @submit="createBurger">
               <div class="input-container">
                   <label for="nome">Nome</label>
                   <input type="text" name="name" v-model="nome" placeholder="Nome:">
                   <br>
                   <label for="nome">Texto</label>
                   <textarea id="nome" name="Texto" v-model="Text" placeholder="Digite seu nome:"/>
               </div>
               <div class="input-container">
                   <input type="submit" class="submit-btn" value="Enviar">
               </div>
           </form>
       </div>
   </div>
</template>
<script>
export default {
    name:"BurgerForm",
    components:{

    },
    data(){
        return{
            nome:null,
            Text:null,
            msg:null
        }
    },
    methods:{
        async getIngredientes(){
            const req = await fetch("http://localhost:3000/ingredientes")
            const data = await req.json();
        },
        async createBurger(e){
            e.preventDefault();
            const data={
                nome: this.nome,
                Text: this.Text,
                status:"Solicitados"
            }
            const dataJson = JSON.stringify(data);
            const req = await fetch("http://localhost:3000/burgers",{
                method:"POST",
                headers:{"Content-type":"application/json"},
                body:dataJson
            });

            const res = await req.json();
            setTimeout(()=> this.msg="",3000)
            this.nome = "";
            this.Text = "";
        }
    },
    mounted(){
        this.getIngredientes()
    }
}
</script>
<style scoped>
#burger-form{
    max-width: 400px;
    margin: 0 auto;
}
.input-container{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}
#opcional-container{
    flex-direction:wrap;
    flex-wrap: wrap;
}
.checkbox-container{
    display: flex;
    align-items: flex-start;
    width: 50%;
    margin-bottom: 20px;
}
.checkbox-container span, .checkbox-container input{
    width: auto;
}
.checkbox-container span{
    margin-left: 6px;
    font-weight: bold;
}
.submit-btn{
    background-color: #222;
    color: #FCBA03;
    font-weight: bold;
    border:2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
}
.submit-btn:hover{
    background-color: transparent;
    color: #222;
}
</style>
