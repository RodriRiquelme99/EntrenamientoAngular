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