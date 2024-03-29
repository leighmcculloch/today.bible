import lume from 'lume/mod.ts';
const site = lume({
  src: './src'
});

import vento from 'lume/plugins/vento.ts';
site.use(vento());

import sass from 'lume/plugins/sass.ts';
site.use(sass());

import sheets from "lume/plugins/sheets.ts";
site.use(sheets());

site.copy('static', '');
await site.build();
