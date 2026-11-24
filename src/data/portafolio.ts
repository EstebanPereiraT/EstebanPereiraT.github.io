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
                ruta: '/ejercicios/algebra-relacional-solucion.pdf'
            }
        ]
    },
    {
        titulo: 'Normalización',
        descripcion: 'Llevar tablas hasta la tercera forma normal (1FN, 2FN y 3FN).',
        archivos: [
            {
                nombre: 'Taller de normalización – citas médicas (completo)',
                descripcion: 'Taller completo sobre un esquema de citas médicas: dependencias funcionales, problemas de 2FN y 3FN, tablas resultantes y respuestas a las preguntas de cada esquema.',
                ruta: '/ejercicios/taller-normalizacion-citas.pdf'
            },
            {
                nombre: 'Taller de normalización – partes 1 y 2',
                descripcion: 'Versión inicial del taller de citas médicas, con el análisis de dependencias de las partes 1 y 2.',
                ruta: '/ejercicios/taller-normalizacion-citas-partes-1-2.pdf'
            },
            {
                nombre: 'Normalización de esquemas',
                descripcion: 'Hoja de cálculo con dos esquemas (citas médicas y ventas por sucursal): tabla inicial y su descomposición.',
                ruta: '/ejercicios/normalizacion-esquemas.xlsx'
            },
            {
                nombre: 'Ejercicio de repaso de normalización',
                descripcion: 'Enunciado del repaso: identificar la forma normal de cada tabla y convertirla a 3FN justificando cada decisión.',
                ruta: '/ejercicios/taller-normalizacion-repaso.pdf'
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
    },
    {
        titulo: 'MER y MER extendido',
        descripcion: 'Modelos entidad-relación de dos casos (tienda en línea y gestión académica), cada uno con su versión base y su versión extendida.',
        archivos: [
            {
                nombre: 'MER 1 – Tienda en línea',
                descripcion: 'Modelo entidad-relación base de una tienda en línea: clientes, direcciones (entidad débil), categorías, productos y pedidos con su detalle.',
                ruta: '/ejercicios/mer/er-1-tienda-en-linea.png'
            },
            {
                nombre: 'MER 1 – Tienda en línea (extendido)',
                descripcion: 'Versión extendida de la tienda: agrega marca, bodega, inventario, empleado (con jefe), cupón, transportadora y devolución.',
                ruta: '/ejercicios/mer/er-1-tienda-en-linea-extendido.png'
            },
            {
                nombre: 'MER 2 – Gestión académica',
                descripcion: 'Modelo entidad-relación base de una universidad: facultades, programas, estudiantes, profesores, materias, grupos, inscripciones y horarios (entidad débil).',
                ruta: '/ejercicios/mer/er-2-gestion-academica.png'
            },
            {
                nombre: 'MER 2 – Gestión académica (extendido)',
                descripcion: 'Versión extendida de la universidad: agrega departamentos, prerrequisitos (relación recursiva), sedes, becas, biblioteca, pagos y evaluaciones con sus notas.',
                ruta: '/ejercicios/mer/er-2-gestion-academica-extendido.png'
            }
        ]
    },
    {
        titulo: 'SQL',
        descripcion: 'Creación de tablas, inserción de datos y consultas en SQL (MySQL y PostgreSQL) a partir de los modelos entidad-relación anteriores.',
        archivos: [
            {
                nombre: 'SQL 1 – Tienda en línea',
                descripcion: 'Creación de las tablas de la tienda en línea, sus datos y la solución de las peticiones con sentencias SQL (consultas, INSERT, UPDATE y DELETE).',
                ruta: '/ejercicios/sql/sql-1-tienda-en-linea.pdf'
            },
            {
                nombre: 'SQL 2 – Gestión académica',
                descripcion: 'Tablas, datos y peticiones SQL del modelo de gestión académica de una universidad, incluyendo inscripciones y plan de estudios.',
                ruta: '/ejercicios/sql/sql-2-gestion-academica.pdf'
            },
            {
                nombre: 'SQL 3 – Tienda en línea (extendido)',
                descripcion: 'Ejercicios SQL sobre el modelo extendido de la tienda: inventario por bodega, transportadora, cupones, empleados con jefe y devoluciones.',
                ruta: '/ejercicios/sql/sql-3-tienda-en-linea-extendido.pdf'
            },
            {
                nombre: 'SQL 4 – Gestión académica (extendido)',
                descripcion: 'Ejercicios SQL sobre el modelo extendido de la universidad: departamentos, prerrequisitos, sedes, becas, préstamos de libros, pagos y evaluaciones.',
                ruta: '/ejercicios/sql/sql-4-gestion-academica-extendido.pdf'
            }
        ]
    }
];
