var config = {
    style: 'mapbox://styles/properati-latam/ck5pjoakv3kac1ik3g7xyga48',
    accessToken: 'pk.eyJ1IjoicHJvcGVyYXRpLWxhdGFtIiwiYSI6ImNqdWJvbjA3eDBmb2w0MHA4aXk2c2o4bTEifQ.2hs0zOueu7Xezh22aVUtLw',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: '¿Cuáles son los mejores barrios para estudiantes?',
    subtitle: 'Esto es lo que necesitás saber si vas a mudarte a Bogotá para ir a la U',
    byline: 'By Properati Data',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'intro',
            title: 'Comienza un nuevo ciclo',
            image: './images/student.jpg',
            description: 'Con el nuevo ciclo, millones de estudiantes en todo el país retoman las clases. Cada año XX de estudiantes eligen Bogotá para vivir mientras estudian. Es por eso que Properati, el sitio de búsqueda de inmuebles líder de Latinoamérica, realizó este informe especial para conocer las mejores zonas de la ciudad para vivir y estudiar.',
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
            description: 'En Bogotá existen 535 establecimientos universitarios explazados en distintas zonas de la ciudad..',
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
            description: 'Para cada instituto universitario, calculamos su área de influencia a 500 metros, la distancia que un estudio de la ONU señaló como cercana, para que los estudiantes puedan llegar cómodamente. En el centro, descubrimos una zona donde pueden unirse una gran cantidad de universidades, separadas cada una de ellas por menos de 500 metros de la más cercana, y la definimos como la "Zona Estudiantil"',
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
            description: 'Pero sabemos que no todo puede ser estudio, es por eso que sumamos todos los bares y restaurantes de la ciudad, especialmente los que están dentro de la "Zona Estudiantil" para que tengas lo mejor de los dos mundos',
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
            description: 'Lo más importante, por supuesto, es conseguir un lindo y económico apartamento para arrendar. Analizamos la oferta de apartamentos en arriendo en los barrios de la zona',
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
            id: 'la-catedral',
            title: 'La Catedral',
            //image: './images/bar.jpg',
            description: 'La Catedral es un barrio ideal para quienes estén estudiando en Bogotá. Allí se encuentran 26 predios de educación superior y además cuenta con 15 bares y restaurantes ideales para el esparcimiento. Los arriendos  de apartamentos de 50 metros cuadrados tienen un valor promedio de $1,533,700 y el promedio de dormitorios de las unidades en oferta es de 1.3 ',
            location: {
             center: [-74.07329, 4.59965],
             zoom: 17.13,
             pitch: 3.50,
             bearing: 20.80
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
            description: ' \b Precio promedio del arriendo: $1,483,550. <br /> \b Establecimientos educativos: 6 <br /> \b Bares & Restaurantes: 5 <br /> \b Promedio de dormitorios por apartamento: 1.2 ',
            location: {
             center: [-74.06561, 4.62967],
             zoom: 17.13,
             pitch: 3.50,
             bearing: 20.80
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
            id: 'chico-norte',
            title: 'Chicó Norte',
            //image: './images/bar.jpg',
            description: ' \b Precio promedio del arriendo: $2,125,500. <br /> \b Establecimientos educativos: 1 <br /> \b Bares & Restaurantes: 28 <br /> \b Promedio de dormitorios por apartamento: 1.1 ',
            location: {
             center: [-74.04667, 4.67725],
             zoom: 16.13,
             pitch: 3.50,
             bearing: 20.80
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
             center: [-74.05873, 4.65408],
             zoom: 17.13,
             pitch: 3.50,
             bearing: 20.80
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
            id: 'espartillal',
            title: 'Espartillal',
            //image: './images/bar.jpg',
            description: ' \b Precio promedio del arriendo: $1,988,900. <br /> \b Establecimientos educativos: 6 <br /> \b Bares & Restaurantes: 13 <br /> \b Promedio de dormitorios por apartamento: 1.7 ',
            location: {
             center: [-74.05399, 4.66321],
             zoom: 16.13,
             pitch: 3.50,
             bearing: 20.80
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
