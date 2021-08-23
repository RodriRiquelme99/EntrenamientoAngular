export interface articulo {

    titulo:string,
    subarticulos:subarticulos,
    subarticulos2?:subarticulos,
    subarticulos3?:subarticulos

}

interface subarticulos {

    subtitulo:string,
    informacion?:string
    url?:string

}





/*
export interface articuloss {
    titulo:string,
    subarticuloss:subarticuloss[]
}

interface subarticuloss {
    subtitulo:string,
    informacion:string,
    url?:string
}
*/

/*

  articulosTest2 = [
    {
      titulo: 'TITULO 1',
      subarticuloss: [
        {
          subtitulo: 'La conquista de Constanstinopla',
          informacion: 'DATA1',
          url: 'http://www.google.cl/'
        },
        {
          subtitulo: 'Los Godos atacan Roma',
          informacion: 'Data2'
        },
        {
          subtitulo: 'Ghen Ghis khan ataca a China',
          informacion: 'Data3'
        }
      ]
    },
    {
      titulo: 'Titulo2',
      subarticuloss: [
        {
          subtitulo: 'Subtitulo2',
          informacion: 'DATA22',
          url: 'http://www.google.cl/'
        },
        {
          subtitulo: 'Subtitulo2.1',
          informacion: 'Data23'
        },
        {
          subtitulo: 'Subtitulo2.2',
          informacion: 'Data34'
        }
      ]
    }
  ]

  */