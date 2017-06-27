function uuid4(){
	var i, len, j, lenj, pointer = 0, random = [], block = "", blocks = [], uuidFormat = [8,4,4,4,12];
	for(i = 0; i < 32; i += 1){
		random.push(parseInt(Math.random() * 16, 10).toString(16));
	}
	for(i = 0, len = uuidFormat.length; i < len; i += 1){
		block = "";
		for(j = 0; j < uuidFormat[i]; j += 1){
			block += random[pointer++];
		}
		blocks.push(block);
	}
	return blocks.join('-');
}
