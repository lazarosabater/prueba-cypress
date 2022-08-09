describe('Cuentas',function(){
    var a = 1+1;
    var b = 2;
    it('Vamos a ver que se sume bien', function(){
        expect(a==b, 'aqui se espera que el resultado de a==b sea igual a true' ).to.equal(true);
    });
    it('Vamos a ver que reste bien', function(){
        expect(a-b).to.equal(0);
    });

    it('Vamos a ver que una resta no este bien',function(){
        expect(1-1).to.not.equal(2);
    })

    it('Vamos a ver una igualdad', function(){
        expect(1==1).to.equal(true);
    })

    it('Vamos a ver que no una igualdad', function(){
        expect(2==1).to.equal(false);
    })

    it('Tiene que ser verdadero',function(){
        expect(2==2).to.be.true;
    })

    it('Tiene que ser falso',function(){
        expect(2==1).to.be.false;
    })

    it('La variable existe',function(){
        expect(a).to.exist;

    })

    it('Es menor a 10',function(){
        expect(a).to.be.lessThan(10);
    })

    it('Es mayor a 10',function(){
        expect(25).to.be.greaterThan(10);
    })

})