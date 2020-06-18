// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import VueScrollTo from 'vue-scrollto';
require('typeface-nunito-sans');

export default function(Vue, {router, head, isClient})
{
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout);
    
    Vue.use(VueScrollTo, {
        duration: 500,
        easing: 'ease'
    });
    
    head.meta.push({
        name: 'keywords',
        content: 'Moorpark,College,Vex,Robotics,Engineering,Club'
    });
    head.meta.push({
        name: 'description',
        content: 'Moorpark College Engineering Club Website'
    });
    head.meta.push({
        name: 'author',
        content: 'Moorpark College Engineering Club'
    });
}


