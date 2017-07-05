function uuid4(){
	var i, len, j, lenj, pointer = 0, random = [], block = "", blocks = [], uuidFormat = [8,4,4,4,12];
	for(i = 0; i < 32; i += 1){
		random.push(getRandom(i));
	}
	for(i = 0, len = uuidFormat.length; i < len; i += 1){
		block = "";
		for(j = 0; j < uuidFormat[i]; j += 1){
			block += random[pointer++];
		}
		blocks.push(block);
	}
	return blocks.join('-');

	function getRandom(i){
		var ret;
		switch(i){
			case 12:
			ret = 4;
			break;
			case 16:
			ret = parseInt(Math.random() * 4 + 8, 10).toString(16);
			break;
			default:
			ret = parseInt(Math.random() * 16, 10).toString(16);
			break; 
		}
		return ret;
	}
}
