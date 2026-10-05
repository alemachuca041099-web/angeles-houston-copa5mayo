import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent), title: 'Ángeles Houston — Copa 5 de Mayo' },
  { path: 'torneos', loadComponent: () => import('./pages/torneos/torneos.component').then((m) => m.TorneosComponent), title: 'Torneos — Ángeles Houston' },
  { path: 'partidos', loadComponent: () => import('./pages/partidos/partidos.component').then((m) => m.PartidosComponent), title: 'Partidos — Ángeles Houston' },
  { path: 'resultados', loadComponent: () => import('./pages/resultados/resultados.component').then((m) => m.ResultadosComponent), title: 'Resultados — Ángeles Houston' },
  { path: 'tabla', loadComponent: () => import('./pages/tabla/tabla.component').then((m) => m.TablaComponent), title: 'Tabla general — Ángeles Houston' },
  { path: 'equipos', loadComponent: () => import('./pages/equipos/equipos.component').then((m) => m.EquiposComponent), title: 'Equipos — Ángeles Houston' },
  { path: 'galeria', loadComponent: () => import('./pages/galeria/galeria.component').then((m) => m.GaleriaComponent), title: 'Galería — Ángeles Houston' },
  { path: 'patrocinadores', loadComponent: () => import('./pages/patrocinadores/patrocinadores.component').then((m) => m.PatrocinadoresComponent), title: 'Patrocinadores — Ángeles Houston' },
  { path: 'contacto', loadComponent: () => import('./pages/contacto/contacto.component').then((m) => m.ContactoComponent), title: 'Contacto — Ángeles Houston' },
  { path: 'privacidad', loadComponent: () => import('./pages/privacidad/privacidad.component').then((m) => m.PrivacidadComponent), title: 'Aviso de privacidad — Ángeles Houston' },
  { path: '**', redirectTo: '' }
];
