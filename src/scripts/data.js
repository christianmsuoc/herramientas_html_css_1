import ferrolterra_zcj5f1_c_scale_w_200 from '../images/comarcas/ferrolterra/ferrolterra_zcj5f1_c_scale_w_200.webp'
import ferrolterra_zcj5f1_c_scale_w_461 from '../images/comarcas/ferrolterra/ferrolterra_zcj5f1_c_scale_w_461.webp'
import ferrolterra_zcj5f1_c_scale_w_627 from '../images/comarcas/ferrolterra/ferrolterra_zcj5f1_c_scale_w_627.webp'
import ferrolterra_zcj5f1_c_scale_w_840 from '../images/comarcas/ferrolterra/ferrolterra_zcj5f1_c_scale_w_840.webp'
import ferrolterra_zcj5f1_c_scale_w_900 from '../images/comarcas/ferrolterra/ferrolterra_zcj5f1_c_scale_w_900.webp'

import barbanza_d63d0g_c_scale_w_200 from '../images/comarcas/barbanza/barbanza_d63d0g_c_scale_w_200.webp';
import barbanza_d63d0g_c_scale_w_487 from '../images/comarcas/barbanza/barbanza_d63d0g_c_scale_w_487.webp';
import barbanza_d63d0g_c_scale_w_641 from '../images/comarcas/barbanza/barbanza_d63d0g_c_scale_w_641.webp';
import barbanza_d63d0g_c_scale_w_764 from '../images/comarcas/barbanza/barbanza_d63d0g_c_scale_w_764.webp';
import barbanza_d63d0g_c_scale_w_890 from '../images/comarcas/barbanza/barbanza_d63d0g_c_scale_w_890.webp';
import barbanza_d63d0g_c_scale_w_959 from '../images/comarcas/barbanza/barbanza_d63d0g_c_scale_w_959.webp';


import marina_scale_w_200 from '../images/comarcas/marina/marina_i4bnmc_c_scale_w_200.webp';
import marina_scale_w_719 from '../images/comarcas/marina/marina_i4bnmc_c_scale_w_719.webp';
import marina_scale_w_800 from '../images/comarcas/marina/marina_i4bnmc_c_scale_w_800.webp';

import empanada_maiz_scale_w_391 from '../images/recetas/empanada_maiz/empanada_maiz_e3byq0_c_scale_w_391.webp';
import empanada_maiz_scale_w_688 from '../images/recetas/empanada_maiz/empanada_maiz_e3byq0_c_scale_w_688.webp';
import empanada_maiz_scale_w_1200 from '../images/recetas/empanada_maiz/empanada_maiz_e3byq0_c_scale_w_1200.webp';

import huevos_pan_maiz_kgcxhm_c_scale_w_1068_ojqzym_c_scale_w_200
    from '../images/recetas/huevos_pan_maiz/huevos_pan_maiz_kgcxhm_c_scale_w_1068_ojqzym_c_scale_w_200.webp';
import huevos_pan_maiz_kgcxhm_c_scale_w_1068_ojqzym_c_scale_w_517
    from '../images/recetas/huevos_pan_maiz/huevos_pan_maiz_kgcxhm_c_scale_w_1068_ojqzym_c_scale_w_517.webp';
import huevos_pan_maiz_kgcxhm_c_scale_w_1068_ojqzym_c_scale_w_835
    from '../images/recetas/huevos_pan_maiz/huevos_pan_maiz_kgcxhm_c_scale_w_1068_ojqzym_c_scale_w_835.webp';
import huevos_pan_maiz_kgcxhm_c_scale_w_1068_ojqzym_c_scale_w_1068
    from '../images/recetas/huevos_pan_maiz/huevos_pan_maiz_kgcxhm_c_scale_w_1068_ojqzym_c_scale_w_1068.webp';

const lavaColor = '#cf081fff';

export const data = {
    comarcas: [
        {
            color: lavaColor,
            circleSize: 7,
            x: 0.18,
            y: 0.53,
            sectionId: 'barbanza',
            sizes: '(max-width: 350px) 200px, (max-width: 650px) 487px,  (max-width: 850px) 641px, (max-width: 1024px) 959px, 840px',
            srcset:
            barbanza_d63d0g_c_scale_w_200 + ' 200w,' +
            barbanza_d63d0g_c_scale_w_487 + ' 487w,' +
            barbanza_d63d0g_c_scale_w_641 + ' 641w,' +
            barbanza_d63d0g_c_scale_w_764 + ' 764w,' +
            barbanza_d63d0g_c_scale_w_890 + ' 890w,' +
            barbanza_d63d0g_c_scale_w_959 + ' 959w,',
            url: '../../comarca-barbanza.html',
            alt: 'imagen representativa de la comarca del barbanza',
            title: 'Recetas de Barbanza',
            image: barbanza_d63d0g_c_scale_w_890
        },
        {
            color: lavaColor,
            circleSize: 7,
            x: 0.42,
            y: 0.155,
            sectionId: 'ferrolterra',
            sizes: '(max-width: 350px) 200px, (max-width: 850px) 627px, (max-width: 1024px) 900px, 840px',
            srcset:
            ferrolterra_zcj5f1_c_scale_w_200 + ' 200w,' +
            ferrolterra_zcj5f1_c_scale_w_461 + ' 461w,' +
            ferrolterra_zcj5f1_c_scale_w_627 + ' 627w,' +
            ferrolterra_zcj5f1_c_scale_w_840 + ' 840w,' +
            ferrolterra_zcj5f1_c_scale_w_900 + ' 900w,',
            alt: 'imagen representativa de la comarca de ferrolterra',
            url: '../../comarca-ferrolterra.html',
            title: 'Recetas de Ferrolterra',
            image: ferrolterra_zcj5f1_c_scale_w_840
        },
        {
            color: lavaColor,
            circleSize: 7,
            x: 0.665,
            y: 0.10,
            sectionId: 'marina',
            sizes: '(max-width: 350px) 200px, (max-width: 1024px) 800px, 719px',
            srcset:
                marina_scale_w_200 + ' 200w' +
                marina_scale_w_719 + ' 719w' +
                marina_scale_w_800 + ' 800w',
            alt: 'imagen representativa de la comarca de A Mariña',
            url: '../../comarca-marina.html',
            title: 'Recetas de A Mariña',
            image: marina_scale_w_200
        },
        {
            color: lavaColor,
            circleSize: 20,
            x: 0.5,
            y: 0.49,
            sectionId: 'galicia',
        }
    ],
    recipesBarbanza: [
        {
            url: '../../receta-empanada.html',
            alt: 'imagen de una receta de empanada de maíz',
            sizes: '(max-width: 400px) 252px, (max-width: 1024px) 716px, 1217px',
            srcset:
                empanada_maiz_scale_w_391 + ' 391w,' +
                empanada_maiz_scale_w_688 + ' 688w,' +
                empanada_maiz_scale_w_1200 + ' 1200w,',
            title: 'Empanada de maíz',
            image: empanada_maiz_scale_w_1200
        },
        {
            url: '../../receta-huevos-pan-maiz.html',
            alt: 'imagen de una receta de huevos con pan de maíz',
            sizes: '(max-width: 575px) 517px, (max-width: 1024px) 1068px, 517px',
            srcset:
                huevos_pan_maiz_kgcxhm_c_scale_w_1068_ojqzym_c_scale_w_200 + ' 200w' +
                huevos_pan_maiz_kgcxhm_c_scale_w_1068_ojqzym_c_scale_w_517 + ' 517w' +
                huevos_pan_maiz_kgcxhm_c_scale_w_1068_ojqzym_c_scale_w_835 + ' 835w' +
                huevos_pan_maiz_kgcxhm_c_scale_w_1068_ojqzym_c_scale_w_1068 + ' 1068w',
            title: 'Huevos con pan de maíz',
            image: huevos_pan_maiz_kgcxhm_c_scale_w_1068_ojqzym_c_scale_w_1068
        }
    ]
}


