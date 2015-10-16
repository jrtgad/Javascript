chai.should();
describe('Checking days since 1970', function() {
        
        it('Should return empty for empty string', function () {
            calculateDaysSinceEpoch("").should.be.equal("Por favor, introducir la fecha en el formato solicitado");
        });

        it('Should return empty for escape characters', function () {
            checkValueOfWord("\n").should.be.equal("Por favor, introducir la fecha en el formato solicitado");
        });

        it('should return ! for numbers', function() {
            checkValueOfWord("1").should.be.equal("! ");
        });

        it('Should return ! for non letters characters', function() {
            checkValueOfWord("#").should.be.equal("! ");
        });

        it('Should return 01020201 for ABBA', function () {
            checkValueOfWord("ABBA").should.be.equal("01 02 02 01 ");
        });

        it('Should return 03 for c', function () {
            checkValueOfWord("c").should.be.equal("03 ");            
        });
});