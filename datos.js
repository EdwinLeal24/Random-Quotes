const express = require('express');
const router = express.Router();

const citas = [
    {
        cita: 'Es intentando lo imposible como se realiza lo posible.',
        autor:'Henri Barbusse',
        img: 'https://www.biografiasyvidas.com/biografia/b/fotos/barbusse.jpg'
    },
    {
        cita: 'Uno está enamorado cuando se da cuenta de que otra persona es única.',
        autor: 'Jorge Luis Borges',
        img:'https://cdn.britannica.com/46/75546-050-7FB282FE/Jorge-Luis-Borges-1981.jpg'
    },
    {
        cita:'La democracia no es el silencio, es la claridad con que se exponen los problemas y la existencia de medios para resolverlos.',
        autor:'Enrique Múgica Herzog',
        img:'https://s.libertaddigital.com/2020/04/11/enrique-mugica-6-16-9.jpg'
    },
    {
        cita: 'La sombra no existe; lo que tu llamas sombra es la luz que no ves.',
        autor:'Henri Barbusse',
        img: 'https://www.biografiasyvidas.com/biografia/b/fotos/barbusse.jpg'
    
    },
    {
        cita:'La añoranza es el camino previo a convertirse en estatua de sal.',
        autor:'Henri Barbusse',
        img: 'https://www.biografiasyvidas.com/biografia/b/fotos/barbusse.jpg'
    },
    {
        cita:'El destino no reina sin la complicidad secreta del instinto y de la voluntad.',
        autor:'Giovanni Papini',
        img:'https://lecturia.org/wp-content/uploads/2018/11/Giovanni-Papini.jpg'
    },
    {
        cita:'Los hombres están siempre dispuestos a curiosear y averiguar sobre las vidas ajenas, pero les da pereza conocerse a sí mismos y corregir su propia vida.',
        autor:'San Agustín',
        img:'https://www.biografiasyvidas.com/biografia/a/fotos/agustin_de_hipona_2.jpg'
    },
    {
        cita:'Un amigo es uno que lo sabe todo de ti y a pesar de ello te quiere.',
        autor:'Elbert Hubbard',
        img:'https://cdn.zendalibros.com/wp-content/uploads/elbert-hubbard.jpg'
    },
    {
        cita:'La pena uno puede soportarla solo, mas para estar alegre se necesitan dos.',
        autor:'Elbert Hubbard',
        img:'https://www.famousauthors.org/famous-authors/elbert-hubbard.jpg'
    },
    {
        cita:'Te amo para amarte y no para ser amado, puesto que nada me place tanto como verte a ti feliz.',
        autor:'George Sand',
        img:'https://s.wsj.net/public/resources/images/RV-AY033_bkrvsa_M_20180523103304.jpg'
    },
    {
        cita:'La belleza exterior no es más que el encanto de un instante. La apariencia del cuerpo no siempre es el reflejo del alma.',
        autor:'George Sand',
        img:'https://s.wsj.net/public/resources/images/RV-AY033_bkrvsa_M_20180523103304.jpg'
    },
    {
        cita:'En un beso, sabrás todo lo que he callado.',
        autor:'Pablo Neruda',
        img:'https://1.bp.blogspot.com/-atnbNpOlSV4/We6rVLea58I/AAAAAAAARyY/2iFiY2vTjRUHye9hroXpMo1VB00-WEFZwCLcBGAs/s1600/Neruda-23.jpg'
    },
    {
        cita:'Hay algo más importante que la lógica: es la imaginación.',
        autor:'Alfred Hitchcock',
        img:'https://elcorreoweb.es/binrepository/710x400/17c0/675d400/none/10703/WQSQ/h_20461735_20200701114001.jpg'
    },
    {
        cita:'Imagínese a un hombre sentado en el sofá favorito de su casa. Debajo tiene una bomba a punto de estallar. Él lo ignora, pero el público lo sabe. Esto es el suspense.',
        autor:'Alfred Hitchcock',
        img:'https://www.thoughtco.com/thmb/3oP97sh0QPXRcdZaA32vR1VTr-0=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/alfred-hitchcock-155464665-5c84743446e0fb00012c66eb.jpg'
    },
    {
        cita:'Nuestra imaginación nos agranda tanto el tiempo presente, que hacemos de la eternidad una nada, y de la nada una eternidad.',
        autor:'Blaise Pascal',
        img:'https://recursos.march.es/repoimg/148325.jpg'
    },
    {
        cita:'Vale más saber alguna cosa de todo, que saberlo todo de una sola cosa.',
        autor:'Blaise Pascal',
        img:'https://recursos.march.es/repoimg/148325.jpg'
    },
    {
        cita:'El que tiene imaginación sin instrucción tiene alas sin pies.',
        autor:'Joseph Joubert',
        img:'https://www.kgbreport.com/images/josephjoubert.jpg'
    },
]

module.exports = citas; 

