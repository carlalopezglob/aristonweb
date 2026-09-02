/**
 * wireframe.js — utilidades compartidas para wireframes HTML
 * Importar con defer desde todas las páginas y módulos.
 * Desde output/pages/<sección>/ y output/modules/<CAT>/: ../../shared/wireframe.js
 *
 * NO duplicar estas funciones en archivos individuales.
 * Funciones disponibles: ver secciones marcadas con ─── nombre ───
 *
 * Es la base compartida con el wireframe-kit, SIN sus herramientas de catálogo
 * (badge de ID, botón MAX, switchers de variante): esas inyectan cromo visible
 * y no deben viajar a un wireframe de cliente.
 */

(function () {
  'use strict';

  /* ─── UX Notes ────────────────────────────────────────────────
     Declarar en cada página/módulo:
       window.UX_NOTES = { clave: "valor", ... }
     Se muestran en consola al cargar. Nunca incrustar anotaciones
     visibles en el wireframe — solo en UX_NOTES.
  ─────────────────────────────────────────────────────────────── */
  window.addEventListener('DOMContentLoaded', function () {
    if (window.UX_NOTES && Object.keys(window.UX_NOTES).length) {
      console.group('📋 UX Notes');
      Object.entries(window.UX_NOTES).forEach(function ([k, v]) {
        console.log('%c' + k + ':', 'font-weight:bold;color:#555', v);
      });
      console.groupEnd();
    }
  });

  /* ─── Placeholders de imagen ──────────────────────────────────
     Añade dimensiones calculadas al texto de placeholder.
     Uso: <div class="img-placeholder" style="height:300px"></div>
  ─────────────────────────────────────────────────────────────── */
  window.addEventListener('DOMContentLoaded', function () {
    function stampPlaceholder(el) {
      var w = el.offsetWidth, h = el.offsetHeight;
      if (w > 0 && h > 0) {
        el.textContent = w + ' × ' + h + ' px';
      } else {
        el.textContent = '— × — px'; // oculto o sin dimensiones aún
      }
    }
    document.querySelectorAll('.img-placeholder').forEach(function (el) {
      if (!el.textContent.trim()) stampPlaceholder(el);
    });
    // Actualizar cuando un tab-panel se hace visible
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.tab-btn');
      if (!btn) return;
      setTimeout(function () {
        document.querySelectorAll('.tab-panel:not([hidden]) .img-placeholder').forEach(function (el) {
          stampPlaceholder(el);
        });
      }, 0);
    });
  });

  /* ─── Acordeón ────────────────────────────────────────────────
     Uso:
       <button class="accordion-trigger" data-target="#id" aria-expanded="false">
         Título
       </button>
       <div id="id" class="accordion-body" hidden>Contenido</div>
  ─────────────────────────────────────────────────────────────── */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.accordion-trigger');
    if (!btn) return;
    var body = document.querySelector(btn.getAttribute('data-target'));
    if (!body) return;
    var isOpen = !body.hidden;
    body.hidden = isOpen;
    btn.setAttribute('aria-expanded', String(!isOpen));
  });

  /* ─── Tabs ────────────────────────────────────────────────────
     Uso:
       <div class="tabs">
         <button class="tab-btn is-active" data-tab="tab1">Tab 1</button>
         <button class="tab-btn" data-tab="tab2">Tab 2</button>
       </div>
       <div class="tab-panel" data-tab="tab1">...</div>
       <div class="tab-panel" data-tab="tab2" hidden>...</div>
  ─────────────────────────────────────────────────────────────── */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.tab-btn');
    if (!btn) return;
    var tabId = btn.getAttribute('data-tab');
    var scope = btn.closest('[data-tabs-scope]') || document;
    scope.querySelectorAll('.tab-btn').forEach(function (b) {
      b.classList.toggle('is-active', b === btn);
    });
    scope.querySelectorAll('.tab-panel').forEach(function (p) {
      p.hidden = p.getAttribute('data-tab') !== tabId;
    });
  });

  /* ─── Texto expandible (PAT-002 "Ver más") ───────────────────
     Uso:
       <div class="text-expand">
         <div class="text-expand__body" hidden>Contenido extra</div>
         <button class="text-expand__toggle">Ver más</button>
       </div>
     En desktop (≥1200px) el CSS ya lo muestra siempre — el botón
     queda oculto via CSS. En mobile/tablet este JS lo controla.
  ─────────────────────────────────────────────────────────────── */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.text-expand__toggle');
    if (!btn) return;
    var body = btn.closest('.text-expand').querySelector('.text-expand__body');
    if (!body) return;
    body.hidden = !body.hidden;
    btn.textContent = body.hidden ? 'Ver más' : 'Ver menos';
  });

  /* ─── Sticky nav ──────────────────────────────────────────────
     Añade clase "is-sticky" al primer elemento con [data-sticky]
     cuando el scroll supera su posición inicial.
  ─────────────────────────────────────────────────────────────── */
  (function () {
    var el = document.querySelector('[data-sticky]');
    if (!el) return;
    var threshold = el.getBoundingClientRect().top + window.scrollY;
    window.addEventListener('scroll', function () {
      el.classList.toggle('is-sticky', window.scrollY > threshold);
    }, { passive: true });
  })();

  /* ─── Carrusel simple ────────────────────────────────────────
     Uso:
       <div class="carousel" data-carousel>
         <div class="carousel__track">
           <div class="carousel__slide">...</div>
           ...
         </div>
         <button class="carousel__prev" aria-label="Anterior">‹</button>
         <button class="carousel__next" aria-label="Siguiente">›</button>
       </div>
  ─────────────────────────────────────────────────────────────── */
  document.querySelectorAll('[data-carousel]').forEach(function (carousel) {
    var track  = carousel.querySelector('.carousel__track');
    var slides = carousel.querySelectorAll('.carousel__slide');
    var prev   = carousel.querySelector('.carousel__prev');
    var next   = carousel.querySelector('.carousel__next');
    if (!track || !slides.length) return;

    var current = 0;

    function goTo(index) {
      current = (index + slides.length) % slides.length;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
    }

    if (prev) prev.addEventListener('click', function () { goTo(current - 1); });
    if (next) next.addEventListener('click', function () { goTo(current + 1); });
  });
  /* ─── Modal de vídeo estándar ────────────────────────────────
     Función global openVideoModal(url) — NO redefinir en páginas.
     Uso en HTML: <button onclick="openVideoModal('URL')">Play</button>
  ─────────────────────────────────────────────────────────────── */
  window.openVideoModal = function (url) {
    var modal = document.getElementById('video-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'video-modal';
      Object.assign(modal.style, {
        position: 'fixed', inset: '0', background: 'rgba(0,0,0,0.85)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: '9999', cursor: 'pointer'
      });
      modal.innerHTML = '<div style="background:#000;width:min(90vw,800px);aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;color:#fff;font-size:0.9rem">[Vídeo: ' + url + ']</div>';
      modal.addEventListener('click', function () { modal.remove(); });
      document.body.appendChild(modal);
    } else {
      modal.style.display = 'flex';
    }
  };

})();
