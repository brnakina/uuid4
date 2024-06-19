function uuid4(){
	return [...new Array(36)].map((_,i) => {
		switch(i){
			case 8:
			case 13:
			case 18:
			case 23:
				return '-';
			case 14:
				return '4';
			case 19:
				return parseInt(Math.random() * 4 + 8, 10).toString(16);
			default:
				return parseInt(Math.random() * 16).toString(16);
		}
	}).join("");
}
