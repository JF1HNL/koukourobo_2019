let Field = new Vue({
	el: "#robokon",
	computed: {
		toki_judge: function(){
			let judge = false;
			if(this.button.toki_increase.flag + this.button.toki_decrease.flag > 10){
				judge = true;
				console.error("ドンデンポールを通過した朱鷺の数が10を超えています。")
			}
			return judge;
		},
		tensu: function(){
			let tensu = { all : 0 };
			for(let i in this.button){
				tensu[i] = this.button[i].value * this.button[i].flag;
				tensu.all = tensu.all + this.button[i].value * this.button[i].flag;			
			}
			return tensu;
		}
	},
	data: {
		button : {
			jiritsu : { value : 50, flag : false },
			kaisanbutsu : { value : 10, flag : 0 },
			warigusuri_hakobi : { value : 20, flag : false },
			warigusuri : { value : 10, flag : 0 },
			warigusuri_ikko : { value : 50, flag : false },
			sakin : { value : 20, flag : 0 },
			sakin_ikko : { value : 50, flag : false },
			sinhosi : { value : 20, flag : 0 },
			sinhosi_subete : { value : 50, flag : false },
			sansyakudama_complete : { value : 50, flag : false },
			toki_increase : { value : 30, flag : 0 },
			toki_decrease : { value : -50, flag : 0 }
		}
	},
	methods: {
		flag: function(ret){
			ret = !ret;
			console.log(ret)
		}
	}
})