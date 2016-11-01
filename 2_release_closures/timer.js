window.onload = function() {

  // ====== DON'T DELETE / DON'T CHANGE ====
  timer(10, "happy new year");
  // ---------------------------------------

};

function timer(time, message){

	var interval = setInterval(count, 1000)

	function count(){
		
		if(time > 0){
			console.log(time)
		}else{
			console.log(message)
			clearInterval(interval)
		}

		time--;
	}

}