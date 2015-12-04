function repeat(operation, num) {
      var cont = 0;
	do{
	operation();
	cont++;
	} while(cont < num);
    }
    
    // Do not remove the line below
    module.exports = repeat

