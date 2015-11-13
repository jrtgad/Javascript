chai.should();
describe('Revision Vehiculos', function () {
    describe('Check Date', function () {
        context('Errores de formato', function () {
            it('should return -1 for empty string', function () {
                checkDate("").should.equal(-1);
            });
            it('should return -1 for a space " "', function () {
                checkDate(" ").should.equal(-1);
            });
            it('should return -1 for "MANOLO"', function () {
                checkDate("MANOLO").should.equal(-1);
            });
            it('should return -1 for " 1jan2-115"', function() {
                checkDate(" 1jan2-115").should.equal(-1);
            });
            it('should return -1 for "1 jan2-115"', function () {
                checkDate("1 jan2-115").should.equal(-1);
            });
            it('should return -1 for "1jan2-1-1-1"', function () {
                checkDate("1jan2-1-1-1").should.equal(-1);
            });
            it('should return -1 for "-1-1jan2-115"', function () {
                checkDate("-1-1jan2-115").should.equal(-1);
            });
            it('should return -1 for "-1may2-1-1-1"', function () {
                checkDate("-1may2-1-1-1").should.equal(-1);
            });
            it('should return -1 for "32jan2-114"', function () {
                checkDate("32jan2-114").should.equal(-1);
            });
            it('should return -1 for "31/12/2-116"', function () {
                checkDate("31/12/2-116").should.equal(-1);
            });
            it('should return -1 for "31ene2-115"', function () {
                checkDate("31ene2-115").should.equal(-1);
            });
            it('should return -1 for "13feb1-1-1-1-1"', function () {
                checkDate("13feb1-1-1-1-1").should.equal(-1);
            });
            it('should return -1 for "26oct1-1-1"', function () {
                checkDate("26oct1-1-1").should.equal(-1);
            });
            it('should return -1 for "26oct 1-1-1"', function () {
                checkDate("26oct1-1-1").should.equal(-1);
            });
            it('should return -1 for "26oct1-1-1 "', function () {
                checkDate("26oct1-1-1").should.equal(-1);
            });
        });
    });
    describe('Check numberPlate', function () {
        context('Errores de formato', function () {
            it('should return false for empty string', function () {
                validatePlate("").should.equal(false);
            });
            it('should return false for a space " "', function () {
                validatePlate(" ").should.equal(false);
            });
            it('should return false for "MANOLO"', function () {
                validatePlate("MANOLO").should.equal(false);
            });
            it('should return false for " 1111-ctt"', function() {
                validatePlate(" 1111-ctt").should.equal(false);
            });
            it('should return false for "111-ctt"', function () {
                validatePlate("111-ctt").should.equal(false);
            });
            it('should return false for "TO-12255"', function () {
                validatePlate("TO-12255").should.equal(false);
            });
            it('should return false for "1234-AZñ"', function () {
                validatePlate("1234-AZñ").should.equal(false);
            });
            it('should return false for "-1may2-1-1-1"', function () {
                validatePlate("1234-AZ").should.equal(false);
            });
            it('should return false for "TO-234-AZ"', function () {
                validatePlate("TO-234-AZ").should.equal(false);
            });
            it('should return false for "TO- 234-AZ"', function () {
                validatePlate("TO- 234-AZ").should.equal(false);
            });
        });
        context('Fechas validas', function () {
            it('should return true for "TO-2365-AC"', function () {
                validatePlate("TO-2365-AC").should.equal(true);
            });
            it('should return true for "M-2365-AC"', function () {
                validatePlate("M-2365-AC").should.equal(true);
            });
            it('should return true for "M-2365-C"', function () {
                validatePlate("M-2365-C").should.equal(true);
            });
            it('should return true for "TO-2365-C"', function () {
                validatePlate("TO-2365-C").should.equal(true);
            });
            it('should return true for "1125-CTT"', function () {
                validatePlate("1125-CTT").should.equal(true);
            });
        });
    });
});
