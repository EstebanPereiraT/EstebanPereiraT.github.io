// ============================================================
//  AQUÍ SE EDITA TODO EL CONTENIDO DE "PROYECTOS" Y "EJERCICIOS"
//  Para agregar un archivo: cópialo a /public/... y agrega un
//  bloque { nombre, descripcion, ruta } en la lista correspondiente.
// ============================================================

export type Archivo = {
    nombre: string; // título que se ve en la página
    descripcion: string; // explicación corta
    ruta: string; // ruta del archivo dentro de /public
};

export type Proyecto = {
    slug: string; // va en la URL: /projects/sirec/
    titulo: string;
    descripcion: string;
    aviso?: string; // aclaración que se muestra destacada
    portada?: string;
    archivos: Archivo[]; // en el orden en que se muestran
};

export type GrupoEjercicios = {
    titulo: string;
    descripcion: string;
    archivos: Archivo[];
};

export const proyectos: Proyecto[] = [
    {
        slug: 'sirec',
        titulo: 'SIREC – Sistema de Registro de Evasión y Colados',
        descripcion:
            'Proyecto final de Bases de Datos 1 (Universidad El Bosque), realizado en grupo con Kevyn Cárdenas y Susan Uriza. Consiste en el diseño de una base de datos para registrar y analizar la evasión del pago en TransMilenio.',
        aviso: 'Este proyecto corresponde únicamente al diseño de la base de datos (análisis, modelos y consultas en papel). No se implementó ni se programó el sistema.',
        portada: '/proyectos/sirec/mer-proyecto-final.png',
        archivos: [
            {
                nombre: 'Documento de supuestos',
                descripcion:
                    'Punto de partida del diseño: explica cómo entendimos el problema y las decisiones que tomamos (solo servicio troncal, datos inventados, relaciones entre troncales, estaciones, eventos, comparendos y pagos).',
                ruta: '/proyectos/sirec/supuestos-proyecto-final.pdf'
            },
            {
                nombre: 'Modelo Entidad-Relación (MER)',
                descripcion: 'Diagrama entidad-relación de SIREC con las entidades, atributos, llaves y cardinalidades.',
                ruta: '/proyectos/sirec/mer-proyecto-final.png'
            },
            {
                nombre: 'MER extendido',
                descripcion: 'Versión extendida del modelo entidad-relación, con los detalles adicionales del diseño.',
                ruta: '/proyectos/sirec/mer-extendido.png'
            },
            {
                nombre: 'Diagrama UML',
                descripcion: 'Diagrama UML de la base de datos de TransMilenio con todas las tablas y sus relaciones.',
                ruta: '/proyectos/sirec/uml-transmilenio.png'
            },
            {
                nombre: 'Reducción a tablas',
                descripcion: 'Paso del modelo entidad-relación al modelo relacional: las tablas resultantes con sus llaves primarias y foráneas.',
                ruta: '/proyectos/sirec/reduccion-a-tablas.png'
            },
            {
                nombre: '50 ejercicios de álgebra relacional',
                descripcion: 'Cincuenta consultas sobre la base de datos de SIREC planteadas con álgebra relacional.',
                ruta: '/proyectos/sirec/50-ejercicios-algebra-relacional.pdf'
            }
        ]
    }
];

export const ejercicios: GrupoEjercicios[] = [
    {
        titulo: 'Álgebra relacional',
        descripcion: 'Consultas expresadas con operadores del álgebra relacional.',
        archivos: [
            {
                nombre: 'Álgebra relacional – enunciado',
                descripcion: 'Taller con las relaciones empleado, trabaja, universidad y jefe, y las consultas que se debían escribir en álgebra relacional.',
                ruta: '/ejercicios/algebra-relacional-enunciado.pdf'
            },
            {
                nombre: 'Álgebra relacional – solución',
                descripcion: 'Mi desarrollo del taller: cada consulta resuelta con proyección, selección, reuniones y relaciones temporales.',
                ruta: '/ejercicios/algebra-relacional-solucion.docx'
            }
        ]
    },
    {
        titulo: 'Normalización',
        descripcion: 'Llevar tablas hasta la tercera forma normal (1FN, 2FN y 3FN).',
        archivos: [
            {
                nombre: 'Taller de normalización (PDF)',
                descripcion: 'Normalización de un esquema de citas médicas: se revisan dependencias parciales y transitivas hasta llegar a 3FN.',
                ruta: '/ejercicios/taller-normalizacion-citas.pdf'
            },
            {
                nombre: 'Taller de normalización (Word)',
                descripcion: 'Versión editable del taller de citas médicas, con las respuestas sobre 2FN y 3FN.',
                ruta: '/ejercicios/taller-normalizacion-citas.docx'
            },
            {
                nombre: 'Normalización de esquemas',
                descripcion: 'Hoja de cálculo con dos esquemas (citas médicas y ventas por sucursal): tabla inicial y su descomposición.',
                ruta: '/ejercicios/normalizacion-esquemas.xlsx'
            },
            {
                nombre: 'Ejercicio de repaso de normalización',
                descripcion: 'Enunciado del repaso: identificar la forma normal de cada tabla y convertirla a 3FN justificando cada decisión.',
                ruta: '/ejercicios/taller-normalizacion-repaso.docx'
            },
            {
                nombre: 'Normalización – solución del repaso',
                descripcion: 'Cinco ejercicios (proyectos, estudiantes, member dinner, visitas y rentals) normalizados paso a paso, con una reflexión final.',
                ruta: '/ejercicios/normalizacion-taller.xlsx'
            },
            {
                nombre: 'Normalización de SIREC (rectificación)',
                descripcion: 'Verificación de que todas las tablas del proyecto SIREC cumplen 1FN, 2FN y 3FN.',
                ruta: '/ejercicios/normalizacion-sirec-rectificacion.xlsx'
            }
        ]
    },
    {
        titulo: 'Reducción a tablas',
        descripcion: 'Paso de diagramas entidad-relación al modelo relacional.',
        archivos: [
            {
                nombre: 'Taller de reducción a tablas',
                descripcion: 'Taller para convertir diagramas entidad-relación (con relaciones M:N) en tablas del modelo relacional.',
                ruta: '/ejercicios/taller-reduccion-a-tablas.pdf'
            },
            {
                nombre: 'Reducción a tablas – librería',
                descripcion: 'Diagrama con el resultado de reducir a tablas el caso de una librería.',
                ruta: '/ejercicios/reduccion-tablas-libreria.png'
            },
            {
                nombre: 'Reducción a tablas – zoológico',
                descripcion: 'Diagrama con el resultado de reducir a tablas el caso de un zoológico.',
                ruta: '/ejercicios/reduccion-tablas-zoologico.png'
            }
        ]
    }
];
