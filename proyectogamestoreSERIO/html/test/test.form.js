// Using html2js preprocessor
var HTMLFile = __html__['registro.html'],
    body = HTMLFile.split(RegExp("<body>|</body>"))[1];

document.body.innerHTML = body;

addEvents();

// BDD
chai.should();

describe('Validate values in form', function () {
    context('Correct values', function () {
        afterEach(function () {
            ns.reset_form();
        });

        it('should have a valid class with correct values in userName', function () {
            $("userName").value = "Javier Ruiz-Toledo";
            validateName();
            $("userName").className.should.be.equal(ns.VALID_CLASS);
        });

        it('should have a valid class with correct values in userMail', function () {
            $("userMail").value = "jruiztoledog@gmail.com";
            validateMail();
            $("userMail").className.should.be.equal(ns.VALID_CLASS);
        });

        it('should have a valid class with correct values in userMail', function () {
            $("userMail").value = "a.b.@c.d.com";
            validateMail();
            $("userMail").className.should.be.equal(ns.VALID_CLASS);
        });

        it('should have a valid class with correct values in pass', function () {
            $("pass").value = "1$Aabc";
            validatePass();
            $("pass").className.should.be.equal(ns.VALID_CLASS);
        });

        it('should have a valid class with correct values in pass', function () {
            $("pass").value = "$Aabc1";
            validatePass();
            $("pass").className.should.be.equal(ns.VALID_CLASS);
        });

        it('should have a valid class with correct values in pass', function () {
            $("pass").value = "Aabc1$";
            validatePass();
            $("pass").className.should.be.equal(ns.VALID_CLASS);
        });

        it('should have a valid class with correct value abc1$A in pass', function () {
            $("pass").value = "abc1$A";
            validatePass();
            $("pass").className.should.be.equal(ns.VALID_CLASS);
        });

        it('should have a valid class with same values in pass and passConfirmation abc1$A', function () {
            $("pass").value = "abc1$A";
            $("passConfirmation").value = "abc1$A";
            confirmPass();
            $("passConfirmation").className.should.be.equal(ns.VALID_CLASS);
        });

        it('should have a valid class with checked checkbox', function () {
            $("checkbox").checked = "true";
            checkEnabled();
            $("checkbox").className.should.be.equal(ns.VALID_CLASS);
        });

        it('should have a valid class for a correct url www.google.es', function () {
            $('url').value = "www.google.es";
            validateURL();
            $('url').className.should.be.equal(ns.VALID_CLASS);
        });

        it('should have a valid class for a correct url https://www.github.com/', function () {
            $('url').value = "https://www.github.com/";
            validateURL();
            $('url').className.should.be.equal(ns.VALID_CLASS);
        });

        it('should have a valid class for a correct postal code 52999', function () {
            $("postalCode").value = "52999";
            validatePostalCode();
            $('postalCode').className.should.be.equal(ns.VALID_CLASS);
        });

        it('should have a valid class for a correct postal code 01000', function () {
            $('postalCode').value = "01000";
            validatePostalCode();
            $('postalCode').className.should.be.equal(ns.VALID_CLASS);
        });

    });

    describe('Validate values in form', function () {
        context('Incorrect values', function () {
            afterEach(function () {
                ns.reset_form();
            });

            it('should be a invalid class for a invalid name Luis', function () {
                $('userName').value = "Luis";
                validateName();
                $('userName').className.should.be.equal(ns.INVALID_CLASS);
            });

            it('should have a invalid class for incorrect email a@com', function () {
                $('userMail').value = "a@com";
                validateMail();
                $('userMail').className.should.be.equal(ns.INVALID_CLASS);
            });

            it('should have a invalid class for a too short password a1A$', function () {
                $('pass').value = "a1A$";
                validatePass();
                $('pass').className.should.be.equal(ns.INVALID_CLASS);
            });

            it('should have a invalid class for a password without numbers abc&ABC', function () {
                $('pass').value = "abc&ABC";
                validatePass();
                $('pass').className.should.be.equal(ns.INVALID_CLASS);
            });

            it('should have a invalid class for a password without simbols abc123A', function () {
                $('pass').value = "abc123A";
                validatePass();
                $('pass').className.should.be.equal(ns.INVALID_CLASS);
            });

            it('should have a invalid class for a password without minus letters ABC123$', function () {
                $("pass").value = "ABC123$";
                validatePass();
                $("pass").className.should.be.equal(ns.INVALID_CLASS);
            });

            it('should have a invalid class for a password without mayus letters abc123$', function () {
                $("pass").value = "abc123$";
                validatePass();
                $("pass").className.should.be.equal(ns.INVALID_CLASS);
            });

            it('should have a invalid class with different values in pass and passConfirmation abc1$A & abc2$A', function () {
                $("pass").value = "abc1$A";
                $("passConfirmation").value = "abc2$A";
                confirmPass();
                $("passConfirmation").className.should.be.equal(ns.INVALID_CLASS);
            });

            it('should have a invalid class with an incorrect URL www. google.com', function () {
                $('url').value = "www. google.com";
                validateURL();
                $('url').className.should.be.equal(ns.INVALID_CLASS);
            });

            it('should have a invalid class with an incorrect URL google.c', function () {
                $('url').value = "google.c";
                validateURL();
                $('url').className.should.be.equal(ns.INVALID_CLASS);
            });

            it('should have a invalid class for a postal code with letters A1000', function () {
                $('postalCode').value = "A1000";
                validatePostalCode();
                $('postalCode').className.should.be.equal(ns.INVALID_CLASS);
            });

            it('should have a invalid class for a postal code with less than 5 numbers 2810', function () {
                $('postalCode').value = "2810";
                validatePostalCode();
                $('postalCode').className.should.be.equal(ns.INVALID_CLASS);
            });

        });

        describe('Validate values in form', function () {
            context('Empty values', function () {
                afterEach(function () {
                    ns.reset_form();
                });

                it('should be a reset class for an empty name', function () {
                    $('userName').value = "";
                    validateName();
                    $('userName').className.should.be.equal(ns.RESET_CLASS);
                });

                it('should be a reset class for an empty mail', function () {
                    $('userMail').value = "";
                    validateMail();
                    $('userMail').className.should.be.equal(ns.RESET_CLASS);
                });

                it('should be a reset class for an empty pass', function () {
                    $('pass').value = "";
                    validatePass();
                    $('pass').className.should.be.equal(ns.RESET_CLASS);
                });

                it('should be a reset class for an empty pass confirmation', function () {
                    $("pass").value = "";
                    $("passConfirmation").value = "";
                    confirmPass();
                    $("passConfirmation").className.should.be.equal(ns.RESET_CLASS);
                });

                it('should be a reset class for an empty URL', function () {
                    $('url').value = "";
                    validateURL();
                    $('url').className.should.be.equal(ns.RESET_CLASS);
                });

                it('should be a reset class for an empty postal code', function () {
                    $('postalCode').value = "";
                    validatePostalCode();
                    $('postalCode').className.should.be.equal(ns.RESET_CLASS);
                });
            });
        });
    });
});