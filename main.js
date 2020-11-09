
var app = new Vue(
    {
        el: '#root',

        data: {

            indice: 0,

            immagini: [
                'https://i2.res.24o.it/images2010/Editrice/ILSOLE24ORE/ILSOLE24ORE/2017/06/14/Motori24/ImmaginiWeb/Ritagli/ferrari-812-superfast-kcPE--835x437@IlSole24Ore-Web.jpg',
                'https://media.motorbox.com/image/ferrari-812-superfast-al-posteriore-quattro-fanali-tondi/5/5/8/558356/558356-16x9-lg.jpg',
                'https://www.yellowmotori.it/wp-content/uploads/2020/01/Lamborghini-Huracan-EVO-RWD-a.jpg',
                'https://img3.stcrm.it/images/21152505/1200x/20200107-105927770-7181.jpg'
            ]
        },

        methods: {

            prossima_immagine() {

                this.indice += 1;

                if (this.indice == this.immagini.length) {

                    this.indice = 0;
                }

            },

            immagine_precedente() {

                this.indice -= 1;

                if (this.indice < 0) {

                    this.indice = this.immagini.length - 1;

                }

            },


        }





    }
);
