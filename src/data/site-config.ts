import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://EstebanPereiraT.github.io',
    avatar: {
        src: avatar,
        alt: 'Jhoan Esteban Pereira Torres'
    },
    title: 'Jhoan Esteban Pereira',
    subtitle: 'Estudiante de Ingeniería de Sistemas',
    description: 'Portafolio y blog personal de Jhoan Esteban Pereira Torres, estudiante de Ingeniería de Sistemas.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Jhoan Esteban Pereira Torres'
    },
    headerNavLinks: [
        {
            text: 'Inicio',
            href: '/'
        },
        {
            text: 'Proyectos',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Etiquetas',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'Acerca de mí',
            href: '/about'
        },
        {
            text: 'Contacto',
            href: '/contact'
        },
        {
            text: 'Términos',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/jhoan_estp'
        }
    ],
    hero: {
        title: '¡Hola! Bienvenido a mi rincón en la web',
        text: "Soy **Jhoan Esteban Pereira Torres**, estudiante de Ingeniería de Sistemas en la Universidad El Bosque, apasionado por la programación y con una historia marcada por la disciplina del deporte de alto rendimiento.\nDurante años competí en patinaje de velocidad a nivel juvenil y mayores, una experiencia que me enseñó que la constancia es la clave para lograr cualquier meta — algo que hoy aplico en mi formación como futuro ingeniero.\n\nConoce más sobre mi historia en la sección [Acerca de mí](/about), o sígueme en [Instagram](https://www.instagram.com/jhoan_estp).",
        image: {
            src: hero,
            alt: 'Jhoan Esteban Pereira Torres'
        },
        actions: [
            {
                text: 'Conóceme más',
                href: '/about'
            }
        ]
    },
   
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;