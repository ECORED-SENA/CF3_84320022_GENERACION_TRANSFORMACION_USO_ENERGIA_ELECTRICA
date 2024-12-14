export default {
  global: {
    componenteFormativo: 'Factor de potencia',
    descripcionCurso:
      'Las máquinas eléctricas rotativas transforman energía mecánica en eléctrica (generadores) o eléctrica en mecánica (motores), basándose en la conservación de la energía electromecánica. Su eficiencia depende del factor de potencia, que mide la energía útil convertida en trabajo. Mejorarlo reduce pérdidas, costos y sobrecargas, prolongando la vida útil de los equipos y optimizando el consumo energético.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Definición y clasificación de las máquinas eléctricas rotativas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Factor de potencia',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Ejemplos',
            hash: 't_1_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Definición y clasificación de las máquinas eléctricas rotativas',
      referencia: 'INFOPLC. (s. f.). Máquinas Eléctricas Rotativas.',
      tipo: 'Documento',
      link:
        'http://www.infoplc.net/files/documentacion/motion_control/infoPLC_net_8448127641.pdf',
    },
    {
      tema: 'Generadores',
      referencia:
        'ventageneradores.net. (2011). Como funciona un generador eléctrico?. [Archivo de video] YouTube.  ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=vdzpxgVn6N0&ab_channel=ventageneradores.net',
    },
    {
      tema: 'Motores',
      referencia:
        'Archivo Software Multimedia. (2019). ¿Como funciona el MOTOR ELÉCTRICO? - Grandes Inventos - Unlimited. [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=JurMDGbZ6VU&ab_channel=ArchivoSoftwareMultimedia',
    },
    {
      tema: 'Factor de potencia',
      referencia:
        'Sígueme la Corriente. ().¿Qué es el Factor de Potencia? ¿Para qué sirve? ⚡ Sígueme la Corriente. [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=_mvA-LP2n_w&ab_channel=S%C3%ADguemelaCorriente',
    },
  ],
  glosario: [
    {
      termino: 'Conservación de energía',
      significado:
        'principio que asegura que la energía no se crea ni se destruye, solo cambia de forma.',
    },
    {
      termino: 'Factor de potencia',
      significado:
        'indicador que mide la eficiencia en la conversión de energía eléctrica en trabajo útil.',
    },
    {
      termino: 'Generador',
      significado: 'máquina que convierte energía mecánica en eléctrica.',
    },
    {
      termino: 'Máquina eléctrica',
      significado:
        'dispositivo que transforma o genera energía eléctrica o mecánica.',
    },
    {
      termino: 'Motor',
      significado: 'máquina que transforma energía eléctrica en mecánica.',
    },
    {
      termino: 'Optimización energética',
      significado:
        'proceso de mejorar el uso eficiente de la energía en un sistema.',
    },
    {
      termino: 'Potencia activa',
      significado:
        'energía útil que realiza trabajo en un sistema eléctrico, medida en <i>watts</i>.',
    },
    {
      termino: 'Potencia aparente',
      significado:
        'total de energía suministrada, suma de la activa y reactiva, medida en VA.',
    },
    {
      termino: 'Potencia reactiva',
      significado:
        'energía empleada en la creación de campos eléctricos o magnéticos, medida en VAR.',
    },
    {
      termino: 'Sobrecarga',
      significado:
        'exceso de corriente que afecta el rendimiento y vida útil de los equipos eléctricos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Equipo INIECO. (2011). <i>Electrotecnia</i>. Málaga: Editorial Vértice.',
      link: '',
    },
    {
      referencia: 'INFOPLC. (s. f.). <i>Máquinas Eléctricas Rotativas</i>. ',
      link:
        'http://www.infoplc.net/files/documentacion/motion_control/infoPLC_net_8448127641.pdf',
    },
    {
      referencia:
        'Wildi, T. (2006). <i>Máquinas eléctricas y sistemas de potencia</i>. México: Pearson Educación.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Wilmar Martínez Urrutia',
          cargo: 'Experto temático',
          centro:
            'Centro de Desarrollo Agroempresarial - Regional Cundinamarca',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Nombre',
        //  cargo: 'Animador y productor audiovisual',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Jaime Hernán Tejada Llano',
        //  cargo: 'Validador y vinculador de recursos educativos digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
