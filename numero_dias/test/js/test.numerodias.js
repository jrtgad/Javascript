chai.should();
describe('Checking days since 1970', function() {
        
        it('Should return empty for empty string', function () {
            calculateDaysSinceEpoch("").should.be.equal("Por favor, introducir la fecha en el formato solicitado");
        });

        it('Should return empty for escape chars', function () {
            calculateDaysSinceEpoch("\n").should.be.equal("Por favor, introducir la fecha en el formato solicitado");
        });

        it('Should return empty for escpae chars', function () {
            calculateDaysSinceEpoch("\t").should.be.equal("Por favor, introducir la fecha en el formato solicitado");
        });

        it('Should return 9 for "10jan1970"', function () {
            calculateDaysSinceEpoch("10jan1970").should.be.equal(9);
        });
});