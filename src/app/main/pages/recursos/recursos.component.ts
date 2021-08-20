import { Component, OnInit } from '@angular/core';
import { articulo } from '../interfaces/articulos.interface';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})
export class RecursosComponent implements OnInit {

  articulos: articulo[] = [

    {
      titulo: '1. Front-End Basico',
      subarticulos: {
        subtitulo: '1.1 Capítulos HTML',
        informacion: "HTML es el código que se utiliza para estructurar y desplegar una página web y sus contenidos. Por ejemplo, sus contenidos podrían ser párrafos, una lista con viñetas, o imágenes y tablas de datos.",
        url: 'https://marksheet.io/html-basics.html'
      },
      subarticulos2: {
        subtitulo: '1.2 Capítulos CSS',
        informacion: 'CSS es un lenguaje que maneja el diseño y presentación de las páginas web, es decir, cómo lucen cuando un visitante las visita. Funciona junto al lenguaje HTML, que se encarga del contenido básico de las páginas.',
        url: 'https://marksheet.io/why-css-exists.html'
      },
      subarticulos3: {
        subtitulo: '1.3 Capítulos JS',
        informacion: 'JavaScript es el único lenguaje de programación que funciona en los navegadores de forma nativa. Por tanto se utiliza como complemento de HTML y CSS para crear páginas webs.',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript'
      }
    },

    {
      titulo: '2. Instalación de Angular',
      subarticulos: {
        subtitulo: '2.1. Instalación NodeJS',
        informacion: "NodeJs es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript.",
        url: 'https://nodejs.org/es/download/'
      },
      subarticulos2: {
        subtitulo: '2.2. Instalación Angular CLI',
        informacion: 'Angular es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página.',
        url: 'https://angular.io/guide/setup-local'
      },
    },

    {
      titulo: '3. Versionamiento - Git',
      subarticulos: {
        subtitulo: '3.1. Tutorial Git Branching',
        informacion: "El comando git branch te permite crear, enumerar y eliminar ramas, así como cambiar su nombre. No te permite cambiar entre ramas o volver a unir un historial bifurcado. Por este motivo, git branch está estrechamente integrado con los comandos git checkout y git merge.",
        url: 'https://learngitbranching.js.org/?locale=es_AR'
      },
      subarticulos2: {
        subtitulo: '3.2. Creación de repositorio GitLab',
        informacion: 'Gitlab es un servicio web de control de versiones y desarrollo de software colaborativo basado en Git. Además de gestor de repositorios, el servicio ofrece también alojamiento de wikis y un sistema de seguimiento de errores, todo ello publicado bajo una Licencia de código abierto.',
        url: 'recursos/#articulo3'
      },
      subarticulos3: {
        subtitulo: '3.3. Don’t Fear the Repo: Enhanced Git Flow explained',
        informacion: 'El flujo de trabajo Gitflow es un flujo de trabajo de Git que favorece el desarrollo continuo de software y las prácticas de implementación de DevOps. El flujo de trabajo Gitflow define un modelo de creación de ramas estricto diseñado con la publicación del proyecto como fundamento.',
        url: 'https://www.toptal.com/gitflow/enhanced-git-flow-explained'
      },
    },

    {
      titulo: '4. JavaScript structures',
      subarticulos: {
        subtitulo: '4.1.Data Structures You Should Know as a JavaScript Developer',
        informacion: "Comprender las estructuras de datos es útil en todos los aspectos de la programación, no es necesario tener un caso de uso particular en el que usará un Arból o un gráfico para tener que considerar aprender sobre ellos.",
        url: 'https://blog.bitsrc.io/data-structures-you-should-know-as-a-javascript-developer-9a35eb3b319c'
      },
    },

    {
      titulo: '5. Curso de Angular',
      subarticulos: {
        subtitulo: '5.1. Curso Pluralsight',
        informacion: "En esta sección encontraras un curso de Angular en el cual aprenderas muchos conocimientos, tanto de Angular, typescript, html, css y demás.",
        url: 'https://app.pluralsight.com/course-player?clipId=2f6b6f57-945c-421e-8c53-6126fa04374e'
      },
      subarticulos2: {
        subtitulo: '5.2. Angular Coding Style Guide',
        informacion: "Esta guía de codigos de estilo de Angular presenta las convenciones preferidas de angular. Componentes, bootstraping, directivas y lo que es más importante, explica por qué.",
        url: 'https://angular.io/guide/styleguide#angular-coding-style-guide'
      },
      subarticulos3: {
        subtitulo: '5.3. Angular – Codigos QR',
        informacion: "Esta guía de creación de codigos QR en angular te enseñara a crearlos de una manera muy sencilla.",
        url: 'https://cgonzalez-uy.medium.com/angular-como-construir-c%C3%B3digos-qr-eb2badcb3cde'
      },
    },

    {
      titulo: '6. OAuth 2.0',
      subarticulos: {
        subtitulo: '6.1. The Complete Guide to OAuth 2.0 and OpenID Connect Protocols',
        informacion: "Open Authorization es un estándar abierto que permite flujos simples de autorización para sitios web o aplicaciones informáticas. OpenID es un estándar de identificación digital descentralizado, con el que un usuario puede identificarse en una página web a través de una URL y puede ser verificado por cualquier servidor que soporte el protocolo.",
        url: 'https://betterprogramming.pub/the-complete-guide-to-oauth-2-0-and-openid-connect-protocols-35ebc1cbc11a'
      },
      subarticulos2: {
        subtitulo: '6.2. The Simplest Guide To OAuth 2.0',
        informacion: "OAuth nos otorga una solución de administración de identidad y acceso, su finalidad es otorgar autorizaciones a los usuarios. Se trata de un protocolo para pasar la autorización de un servicio a otro sin compartir las credenciales de usuario reales, como un nombre de usuario y contraseña.",
        url: 'https://darutk.medium.com/the-simplest-guide-to-oauth-2-0-8c71bd9a15bb'
      },
    },

    {
      titulo: '7. Bootstrap',
      subarticulos: {
        subtitulo: '7.1. Bootstrap 4',
        informacion: "Bootstrap es una biblioteca multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web. Contiene plantillas de diseño con tipografía, formularios, botones, cuadros, menús de navegación y otros elementos de diseño basado en HTML y CSS, así como extensiones de JavaScript adicionales.",
        url: 'https://www.udemy.com/course/bootstrap-4/learn/lecture/4244842#overviewb'
      },
    },

    {
      titulo: '8. Jira',
      subarticulos: {
        subtitulo: '8.1. Registro y Overviews de Jira',
        informacion: "Jira es una herramienta en línea para la administración de tareas de un proyecto, el seguimiento de errores e incidencias y para la gestión operativa de proyectos.",
        url: 'https://university.atlassian.com/student/catalog/list?category_ids=21734-free-training'
      },
      subarticulos2: {
        subtitulo: '8.2. Video Explicativo Jira',
        url: 'https://www.youtube.com/watch?v=-g2qY4MkYD0'
      },
    },

    {
      titulo: '9. Angular Schematics',
      subarticulos: {
        subtitulo: '9.1. Angular Schematics',
        informacion: "Angular Schematics permite copiar jerarquías enteras de componentes y objetos (modíficándolas mediante opciones que podemos especificar mediante la propia llamada de comandos).",
        url: 'https://angular.io/guide/schematics'
      },
      subarticulos2: {
        subtitulo: '9.2. Angular Schematics - Library',
        url: 'https://www.npmjs.com/package/@angular-devkit/schematics'
      },
    },

    {
      titulo: '10. Organizaciones Agiles',
      subarticulos: {
        subtitulo: '10.1 Organizaciones Agiles',
        informacion: "Las metodologías ágiles fueron creadas para hacer y gestionar nuevas formas de organizar procesos productivos. Agile no es un proceso común que implementan las empresas, sino que busca crear nuevas bases de creación de un nuevo modelo de negocio ayudando a la empresa con su rendimiento y productividad.",
        url: '/recursos/#articulo10'
      },
    },

  ]

  ngOnInit(): void {
    console.log(this.articulos[0].subarticulos.informacion);

  }


}
