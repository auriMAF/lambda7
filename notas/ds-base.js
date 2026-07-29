// notas/ds-base.js — loader del sistema de diseño, un nivel por debajo de la raíz
(() => {
  const base = '../_ds/industry-8f13cce2-0bf7-4a07-924c-01ae297c386c';
  for (const p of ['styles.css']) { // list this DS's global stylesheets
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  s.onerror = () => console.error('ds-base.js: failed to load ' + s.src + ' — if this is a consuming project, point the base line in ds-base.js at the bound _ds/<folder> tree relative to this page (e.g. _ds/<folder> at the project root, ../_ds/<folder> one level down); in a fresh design system this can just mean the bundle is not compiled yet');
  document.head.appendChild(s);
})();
