chai.should();
describe('Check Dealership', function () {
    describe('', function () {
        context('Check profits', function () {
            dealer1 = new Dealership(globals.NORTHZONE);
            dealer2 = new Dealership(globals.SOUTHZONE);
            dealer3 = new Dealership(globals.EASTZONE);
            dealer4 = new Dealership(globals.WESTZONE);
            dealer5 = new Dealership(globals.NORTHZONE);
            dealer6 = new Dealership(globals.SOUTHZONE);
            dealer7 = new Dealership(globals.EASTZONE);
            dealer8 = new Dealership(globals.WESTZONE);
            dealer9 = new Dealership(globals.NORTHZONE);
            dealer10 = new Dealership(globals.SOUTHZONE);

            it('should return "0 €" without cars', function () {
                dealer1.sellProfits().should.be.equal("0 €");
            });

            dealer2.buyCar(globals.BASICMODEL, "1111-aaa", "20feb2013", "500", "1000");
            dealer2.buyCar(globals.HOMINGMODEL, "2222-bbb", "21feb2013", "600", "2000");
            it('should return "1900 €"', function () {
                dealer2.sellProfits().should.be.equal("1900 €");
            });

            dealer3.buyCar(globals.BERLINXMODEL, "3333-ccc", "23feb2013", "700", "3500");
            dealer3.buyCar(globals.TRANSPERMODEL, "4444-ddd", "24feb2013", "800", "600");
            dealer3.buyCar(globals.BASICMODEL, "m-1111-aa", "25feb2013", "900", "3400");
            it('should return "5100 €"', function () {
                dealer3.sellProfits().should.be.equal("5100 €");
            });

            dealer4.buyCar(globals.BERLINXMODEL, "m-1222-fg", "30jan2001", "1200", "2000");
            dealer4.buyCar(globals.TRANSPERMODEL, "m-2087-ty", "15dec2010", "1000", "2000");
            dealer4.buyCar(globals.BERLINXMODEL, "m-9678-cc", "12jun1999", "2500", "3000");
            dealer4.buyCar(globals.MAXIMV8MODEL, "4324-ala", "24aug2010", "1000", "1100");
            it('should return "2400 €"', function () {
                dealer4.sellProfits().should.be.equal("2400 €");
            });

            dealer5.buyCar(globals.BERLINXMODEL, "b-2345-a", "12oct2012", "1200", "2000");
            dealer5.buyCar(globals.MAXIMV8MODEL, "4328-ola", "26aug2014", "5000", "1000");
            dealer5.buyCar(globals.MAXIMV8MODEL, "9999-alo", "02aug2010", "2000", "1500");
            it('should return "-3700 €"', function () {
                dealer5.sellProfits().should.be.equal("-3700 €");
            });

            dealer6.buyCar(globals.MAXIMV8MODEL, "ib-3544-kl", "08sep1988", "2100", "2800");
            dealer6.buyCar(globals.BERLINXMODEL, "sa-6490-gg", "14mar2003", "800", "1400");
            dealer6.buyCar(globals.TRANSPERMODEL, "cc-8943-mk", "28feb2004", "1200", "2100");
            dealer6.buyCar(globals.BERLINXMODEL, "t-5477-fw", "11sep2001", "2300", "2400");
            it('should return "2300 €"', function () {
                dealer6.sellProfits().should.be.equal("2300 €");
            });


            dealer7.buyCar(globals.BERLINXMODEL, "ma-2845-aa", "22oct2012", "2000", "2000");
            dealer7.buyCar(globals.MAXIMV8MODEL, "5645-ola", "24aug2014", "1500", "2000");
            dealer7.buyCar(globals.MAXIMV8MODEL, "9988-alo", "09aug2010", "2000", "1500");
            it('should return "0 €"', function () {
                dealer7.sellProfits().should.be.equal("0 €");
            });

            dealer8.buyCar(globals.BERLINXMODEL, "ib-3544-kl", "08sep1988", "undefined", "null");
            dealer8.buyCar(globals.TRANSPERMODEL, "sa-6490-gg", "14mar2003", "null", "undefined");
            it('should return "0 €" with undefined and null prices', function () {
                dealer8.sellProfits().should.be.equal("0 €");
            });

            dealer9.buyCar(globals.BERLINXMODEL, "lu-9657-hj", "03dec1998", "550", "850");
            dealer9.buyCar(globals.TRANSPERMODEL, "ov-4533-op", "15apr2015", "1250", "1500");
            it('should return "550 €"', function () {
                dealer9.sellProfits().should.be.equal("550 €");
            });

            dealer10.buyCar(globals.BERLINXMODEL, "ga-9567-og", "04jul1988", "1100", "2100");
            dealer10.buyCar(globals.BERLINXMODEL, "to-8887-rr", "09oct1992", "2000", "2400");
            dealer10.buyCar(globals.TRANSPERMODEL, "or-5673-kk", "12nov2007", "1050", "1250");
            it('should return "1600 €"', function () {
                dealer10.sellProfits().should.be.equal("1600 €");
            });
        });
        context('Check buy car data', function () {
            it('should return false for incorrect data buying car 15673-k', function () {
                dealer1.buyCar(globals.TRANSPERMODEL, "15673-k", "12nov2007", "1050", "1250").should.be.equal(false);
            });

            it('should return false for incorrect data buying car 13nob1000', function () {
                dealer1.buyCar(globals.TRANSPERMODEL, "1567-kkk", "13nob1000", "1050", "1250").should.be.equal(false);
            });

            it('should return false for incorrect data buying car -1000 buy price', function () {
                dealer1.buyCar(globals.TRANSPERMODEL, "1673-kds", "12nov2007", "-1000", "1250").should.be.equal(false);
            });

            it('should return false for incorrect data buying car -1000 sell price', function () {
                dealer1.buyCar(globals.TRANSPERMODEL, "1673-kds", "12nov2007", "1250", "-1000").should.be.equal(false);
            });

            it('should return true for valid data buying car Transper 1673-kds 12nov2007 1250 2000', function () {
                dealer1.buyCar(globals.TRANSPERMODEL, "1673-kds", "12nov2007", "1251", "2000").should.be.equal(true);
            });
        });
        context('Check inputs data', function () {



            /** MATRICULA */
            it('should return false for incorrect numberplate 15673-kkk', function () {
                dealer1.validateData([globals.TRANSPERMODEL, "15673-kkk", "12nov2007", "1050", "1250"]).should.be.equal(false);
            });

            it('should return false for incorrect numberplate 1563-k', function () {
                dealer1.validateData([globals.TRANSPERMODEL, "1563-k", "12nov2007", "1050", "1250"]).should.be.equal(false);
            });

            it('should return true for a correct numberplate 1563-dfk', function () {
                dealer1.validateData([globals.TRANSPERMODEL, "1563-dfk", "12nov2007", "1050", "1250"]).should.be.equal(true);
            });

            it('should return true for a correct numberplate 1563dfk', function () {
                dealer1.validateData([globals.TRANSPERMODEL, "1563dfk", "12nov2007", "1050", "1250"]).should.be.equal(true);
            });

            it('should return true for a correct numberplate m4675jj', function () {
                dealer1.validateData([globals.TRANSPERMODEL, "m4675jj", "12nov2007", "1050", "1250"]).should.be.equal(true);
            });

            it('should return true for a correct numberplate m4675j', function () {
                dealer1.validateData([globals.TRANSPERMODEL, "m4675j", "12nov2007", "1050", "1250"]).should.be.equal(true);
            });

            it('should return true for a correct numberplate mm4675j', function () {
                dealer1.validateData([globals.TRANSPERMODEL, "mm4675j", "12nov2007", "1050", "1250"]).should.be.equal(true);
            });

            it('should return true for a correct numberplate mm4675mj', function () {
                dealer1.validateData([globals.TRANSPERMODEL, "mm4675mj", "12nov2007", "1050", "1250"]).should.be.equal(true);
            });

            it('should return true for a correct numberplate m-4675-mj', function () {
                dealer1.validateData([globals.TRANSPERMODEL, "m-4675-mj", "12nov2007", "1050", "1250"]).should.be.equal(true);
            });

            it('should return true for a correct numberplate mm-4675-mj', function () {
                dealer1.validateData([globals.TRANSPERMODEL, "mm-4675-mj", "12nov2007", "1050", "1250"]).should.be.equal(true);
            });






            /** FECHA DE REVISION */
            it('should return false for incorrect lastRevDate 32jan1997', function () {
                dealer1.validateData([globals.MAXIMV8MODEL, "m-9983-lo", "32jan1997", "1050", "2048"]).should.be.equal(false);
            });

            it('should return false for incorrect lastRevDate 155jan1997', function () {
                dealer1.validateData([globals.MAXIMV8MODEL, "m-9983-lo", "155jan1997", "1050", "2048"]).should.be.equal(false);
            });

            it('should return false for incorrect lastRevDate 15jna1997', function () {
                dealer1.validateData([globals.MAXIMV8MODEL, "m-9983-lo", "15jna1997", "1050", "2048"]).should.be.equal(false);
            });

            it('should return false for incorrect lastRevDate 155jna01997', function () {
                dealer1.validateData([globals.MAXIMV8MODEL, "m-9983-lo", "155jna01997", "1050", "2048"]).should.be.equal(false);
            });

            it('should return false for incorrect lastRevDate 15jna01997', function () {
                dealer1.validateData([globals.MAXIMV8MODEL, "m-9983-lo", "15jna01997", "1050", "2048"]).should.be.equal(false);
            });

            it('should return true for a correct lastRevDate 15jan1997', function () {
                dealer1.validateData([globals.MAXIMV8MODEL, "m-9983-lo", "15jan1997", "1050", "2048"]).should.be.equal(true);
            });



            /** COMPRAAAAAAAAA */
            it('should return false for incorrect buyprice -1000', function () {
                dealer1.validateData([globals.BERLINXMODEL, "5673-kkk", "12nov2007", "-1000", "1250"]).should.be.equal(false);
            });

            it('should return false for incorrect buy price -1', function () {
                dealer1.validateData([globals.BERLINXMODEL, "m-9587-lo", "25aug2010", "-1", "2100"]).should.be.equal(false);
            });

            it('should return false for incorrect buy price 0', function () {
                dealer1.validateData([globals.BERLINXMODEL, "m-9587-lo", "26nov2010", "0", "2100"]).should.be.equal(false);
            });

            it('should return false for incorrect buy price a', function () {
                dealer1.validateData([globals.BERLINXMODEL, "m-9587-lo", "15oct1999", "a", "2100"]).should.be.equal(false);
            });

            it('should return false for incorrect buy price null', function () {
                dealer1.validateData([globals.BERLINXMODEL, "m-9587-lo", "15jul1990", "null", "2100"]).should.be.equal(false);
            });

            it('should return true for correct buy price 2000', function () {
                dealer1.validateData([globals.BERLINXMODEL, "m-9587-lo", "15jul1990", "2000", "2100"]).should.be.equal(true);
            });


            /** VENTAAAAAAA */
            it('should return true for a correct sell price 2100', function () {
                dealer1.validateData([globals.BERLINXMODEL, "m-9587-lo", "25aug2010", "1150", "2100"]).should.be.equal(true);
            });

            it('should return false for incorrect sell price null', function () {
                dealer1.validateData([globals.BERLINXMODEL, "m-9587-lo", "25aug2010", "1150", "null"]).should.be.equal(false);
            });

            it('should return false for incorrect sell price undefined', function () {
                dealer1.validateData([globals.BERLINXMODEL, "m-9587-lo", "25aug2010", "1150", "undefined"]).should.be.equal(false);
            });

            it('should return false for incorrect sell price j', function () {
                dealer1.validateData([globals.BERLINXMODEL, "m-9587-lo", "25aug2010", "1150", "j"]).should.be.equal(false);
            });

            it('should return false for incorrect sellprice -1250', function () {
                dealer1.validateData([globals.TRANSPERMODEL, "5673-kk", "12nov2007", "1000", "-1250"]).should.be.equal(false);
            });
        });
    });
});