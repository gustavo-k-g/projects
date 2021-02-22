vm = new Vue({
  el: '#app',
  data : {
    existe: 0,
    errors: [],
    name: '',
    cliente: null,
    info: null,
    dadosNF: null,
    progresso: false,
    btn_voltar: false,
    cabecalho: false,
    login: true,
    tabela: false,
    tabela_nf: false,
    usuario : {
              login : "usuario123",
              tipo : "admin"
              }
         },
  mounted () {
    
    /*
    axios
      .get('integracao.php?'+cliente)
      .then(response => {
        this.info = response.data.data;
        this.progresso = false;
        this.cabecalho = true;
        this.tabela = true;
      })
    */


      
  },
   methods: {
    detalhe: function (event,id, cliente) {
      this.btn_voltar = true,
      axios
        .get('api/notas_id.php?id='+id+"&cliente="+cliente)
        .then(response => {
            this.dadosNF = response.data.data;
            this.tabela = false;
            this.tabela_nf = true;
          })
    },
    carrega: function (cliente) {
        axios
      .get('api/integracao.php?id='+cliente)
      .then(response => {
        this.info = response.data.data;
        this.progresso = false;
        this.cabecalho = true;
        this.tabela = true;
      })
    },
    mostrar: function () {
      this.btn_voltar = false;
      this.tabela_nf = false;
      this.tabela = true;
    },
    frontEndDateFormat: function(date) {
        		return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
    },
    formatPrice: function(value) {
        let val = (value/1).toFixed(2).replace('.', ',');
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    checkForm: function (e) {
      e.preventDefault();

      this.errors = [];
      var existe = 0;

      if (this.name === '') {
        this.errors.push('O CPF/CNPJ é obrigatório.');
      } else {
        axios
        .post('api/clientes.php?id='+this.name)
        .then(response => {
          existe = response.data.totalCount;
		  if( existe >= 1){
			let datavalor = response.data.data;
			datavalor.forEach((item) => {
          
			this.progresso = true;
            this.login = false;
            vm.carrega(item.id);
			})
 
			}else{
			this.errors.push('CPF/CNPJ não localizado.');
            vm.cabecalho = false;
            this.progresso = false;

          }
        })
       
      }
       
    }
  }
});
