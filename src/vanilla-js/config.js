var config = {
    style: 'mapbox://styles/properati-latam/ck5pjoakv3kac1ik3g7xyga48',
    accessToken: 'pk.eyJ1IjoicHJvcGVyYXRpLWxhdGFtIiwiYSI6ImNqdWJvbjA3eDBmb2w0MHA4aXk2c2o4bTEifQ.2hs0zOueu7Xezh22aVUtLw',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: '¿Cuáles son los mejores barrios para estudiantes?',
    subtitle: 'Esto es lo que necesitas saber si vas a mudarte a Bogotá para ir a la U',
    byline: 'By Properati Data',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'intro',
            title: 'Comienza un nuevo ciclo',
            image: './images/student.jpg',
            description: 'Con el nuevo ciclo, millones de estudiantes retoman las clases. Es por eso que Properati, el sitio de búsqueda de inmuebles líder de Latinoamérica, realizó un informe especial para conocer las mejores zonas de la ciudad para vivir y estudiar.',
            location: {
               center: [-74.19341, 4.68313],
               zoom: 10.86,
               pitch: 20.50,
               bearing: 10.40
            },
            onChapterEnter: [  
            {
                     layer: 'educa-superior-bogota',
                     opacity: 0
            },         
             
            { 
                     layer: 'area-estudio',
                     opacity: 0
                },
             {
                     layer: 'bares-restaurantes',
                     opacity: 0
            },
            {
                     layer: 'barrios-est-bogota',
                     opacity: 0
            },
            {
                     layer: 'avg-barrios-est-bogota',
                     opacity: 0
            },
            {
                     layer: 'arriendos-zona-estudiantil',
                     opacity: 0
            },
            {
                     layer: 'mejores-barrios-estudiantes-10',
                     opacity: 0
            }            
            ],
            onChapterExit: [  
                        
            ]
        },
        {
            id: 'universidades',
            title: 'Las universidades',
            image: './images/university.jpg',
            description: 'En Bogotá existen 151 establecimientos universitarios, emplazados en distintas zonas de la ciudad.',
            location: {
               center: [-74.19341, 4.68313],
               zoom: 10.86,
               pitch: 20.50,
               bearing: 10.40
            },
            onChapterEnter: [
            {
                     layer: 'educa-superior-bogota',
                     opacity: 1
                 }
             ],
            onChapterExit: [
            {
                     layer: 'educa-superior-bogota',
                     opacity: 1
            }
                 ]

        },
        {
            id: 'nucleo-universidades',
            title: 'La zona universitaria',
            image: './images/university_area.jpg',
            description: 'Descubrimos una Zona Estudiantil donde pueden unirse una gran cantidad de universidades, separadas cada una de ellas por menos de 500 metros de la más cercana',
            location: {
               center: [-74.10396, 4.63218],
               zoom: 12.86,
               pitch: 60.00,
               bearing: 7.20
            },
            onChapterEnter: [
             {
                     layer: 'educa-superior-bogota',
                     opacity: 1
            },
            {
                     layer: 'area-estudio',
                     opacity: 1
                 }
             ],
            onChapterExit: [
            {
                     layer: 'area-estudio',
                     opacity: 1
            }
                 ]

        },
        {
            id: 'bares',
            title: 'Esparcimiento',
            image: './images/bar.jpg',
            description: 'Pero no todo puede ser estudio, así que sumamos todos los bares y restaurantes de la ciudad, especialmente los que están dentro de la "Zona Estudiantil" para que tengas lo mejor de los dos mundos.',
            location: {
              center: [-74.08894, 4.62365],
              zoom: 13.21,
              pitch: 60.00,
              bearing: 4.80
                           },
            onChapterEnter: [
             {
                     layer: 'bares-restaurantes',
                     opacity: 1
            },
            {
                     layer: 'area-estudio',
                     opacity: 1
                 }
             ],
            onChapterExit: [
            {
                     layer: 'area-estudio',
                     opacity: 0
            }
                 ]

        },
        {
            id: 'Mercado Inmobiliario',
            title: 'Arriendos',
            //image: './images/bar.jpg',
            description: 'Lo más importante, por supuesto, es conseguir un lindo y económico apartamento. Analizamos la oferta de apartamentos en arriendo en los barrios de la zona.',
            location: {
             center: [-74.08380, 4.66274],
             zoom: 12.21,
             pitch: 20.00,
             bearing: 24.00
                           },
            onChapterEnter: [
             {
                     layer: 'barrios-est-bogota',
                     opacity: 1
            },
            {
                     layer: 'arriendos-zona-estudiantil',
                     opacity: 1
                 },
                  {
                     layer: 'bares-restaurantes',
                     opacity: 0
            }
             ],
            onChapterExit: [
            {
                     layer: 'barrios-est-bogota',
                     opacity: 1
            }
                 ]

        },
        {
            id: 'mejores-zonas',
            title: 'Los mejores barrios',
            //image: './images/bar.jpg',
            description: 'Y descubrimos las zonas mejores zonas para arrendar, gracias a su oferta inmobiliaria, oferta educativa y espacios de diversión',
            location: {
             center: [-74.06434, 4.65572],
             zoom: 13.13,
             pitch: 3.50,
             bearing: 20.80
                           },
            onChapterEnter: [
             {
                     layer: 'mejores-barrios-estudiantes-10',
                     opacity: 1
            },
            {
                     layer: 'area-estudio',
                     opacity: 0
                 }
             ],
            onChapterExit: [
            {
                     layer: 'avg-barrios-est-bogota',
                     opacity: 0
            }
                 ]

        },
        {
            id: 'porciuncula',
            title: 'Porciúncula',
            //image: './images/bar.jpg',
            description: 'Porciúntuca es un barrio ideal para quienes estén estudiando en Bogotá. <br /> \b Establecimientos educativos: 8 <br />  \b Bares & Restaurantes: 11 <br /> \b Precio promedio del arriendo: $2,046,536 <br /> \b Promedio de dormitorios por apartamento: 1.4 ',
             location: {
             center: [-74.05654, 4.65831],
             zoom: 15.13,
             pitch: 0.50,
             bearing: 29.60
                           },
            onChapterEnter: [
             {
                     layer: 'mejores-barrios-estudiantes-10',
                     opacity: 0.2
            }
                           ],
            onChapterExit: [
            
                 ]

        },
        {
             id: 'quinta-camacho',
            title: 'Quinta Camacho',
            //image: './images/bar.jpg',
            description: ' \b Precio promedio del arriendo: $1,780,350. <br /> \b Establecimientos educativos: 16 <br /> \b Bares & Restaurantes: 13 <br /> \b Promedio de dormitorios por apartamento: 1.6 ',
            location: {
            center: [-74.06018, 4.65338],
            zoom: 15.13,
            pitch: 0.50,
            bearing: 29.60
                           },
            onChapterEnter: [
             {
                     layer: 'mejores-barrios-estudiantes-10',
                     opacity: 0.2
            }
                           ],
            onChapterExit: [
            
                 ]

        },
        {
            id: 'sucre',
            title: 'Sucre',
            //image: './images/bar.jpg',
            description: ' \b Precio promedio del arriendo: $1,483,550 <br /> \b Establecimientos educativos: 6 <br /> \b Bares & Restaurantes: 5 <br /> \b Promedio de dormitorios por apartamento: 1.2 ',
            location: {
             center: [-74.06936, 4.62749],
             zoom: 15.13,
             pitch: 0.50,
             bearing: 29.60
                           },
            onChapterEnter: [
             {
                     layer: 'mejores-barrios-estudiantes-10',
                     opacity: 0.2
            }
                           ],
            onChapterExit: [
            
                 ]

        },
        {
            id: 'san-martin',
            title: 'San Martín',
            //image: './images/bar.jpg',
            description: ' \b Precio promedio del arriendo: $2,149,884 <br /> \b Establecimientos educativos: 2 <br /> \b Bares & Restaurantes: 16 <br /> \b Promedio de dormitorios por apartamento: 1.6 ',
            location: {
             center: [-74.06717, 4.61664],
             zoom: 15.13,
             pitch: 0.50,
             bearing: 29.60
                           },
            onChapterEnter: [
             {
                     layer: 'mejores-barrios-estudiantes-10',
                     opacity: 0.2
            }
                           ],
            onChapterExit: [
            
                 ]

        },
        {
            id: 'la-catedral',
            title: 'La Catedral',
            //image: './images/bar.jpg',
            description: '\b Establecimientos educativos: 6 <br />  \b Bares & Restaurantes: 15 <br /> \b Precio promedio del arriendo: $1,533,700 <br /> \b Promedio de dormitorios por apartamento: 1.2 ',
             location: {
             center: [-74.07259, 4.59708],
             zoom: 15.13,
             pitch: 0.50,
             bearing: 29.60
                           },
            onChapterEnter: [
             {
                     layer: 'mejores-barrios-estudiantes-10',
                     opacity: 0.2
            }
                           ],
            onChapterExit: [
            
                 ]

        }
         
        
    ]
};
