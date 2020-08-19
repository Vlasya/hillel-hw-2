
 var summ=0;

for (x=2;x<250;x++){
	for ( i = 2 , composite= true; i <x && composite; i++) {
		
		if(x%i===0){
			composite= false;
			
		}
	}
	if (composite) {
		console.log("prostoe",x);
		summ+=x;
		
	}else{
		
	}

	
}
console.log('Сумма', summ);