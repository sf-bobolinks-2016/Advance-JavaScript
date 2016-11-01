window.onload = function() {

  // ====== DON'T DELETE / DON'T CHANGE ====
  timer(10, "happy new year");
  // ---------------------------------------

};

function timer(time, message){

	var counter = 0;

	var interval = setInterval(count, 1000)

	function count(){
		
		if(counter < time){
			console.log(counter)
		}else{
			console.log(message)
			clearInterval(interval)
		}

		counter++;
	}

}