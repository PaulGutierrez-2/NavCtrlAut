# Proyecto Ionic + Angular Standalone: Navegación, Login y Tabs

## Descripción

Este proyecto es una aplicación móvil construida con **Ionic** y **Angular Standalone**. Incluye autenticación básica con login, protección de rutas mediante guard, navegación entre páginas (Home, Login, Tabs, Settings) y manejo de sesión usando `localStorage`.

---

## Video Explicativo

[Ver video explicativo en YouTube](https://youtu.be/Y14D54yvczI)

---

## Estructura de Rutas

- `/home`: Página de inicio (pública).
- `/login`: Página de login (pública).
- `/tabs`: Página principal con pestañas (protegida, requiere login).
- `/settings`: Página de configuración (protegida, requiere login).
- La ruta raíz (`/`) redirige a `/home`.

---

## Flujo de Usuario

1. El usuario inicia en `/home`.
2. Puede ir a `/login` para autenticarse.
3. Si el login es exitoso, accede a `/tabs` (y desde ahí a Settings).
4. Si intenta acceder a `/tabs` o `/settings` sin autenticarse, es redirigido a `/home`.
5. Desde Settings puede cerrar sesión, lo que lo lleva a `/home`.

---

## Funciones Agregadas

### 1. **Login y Autenticación**
- Permite al usuario iniciar sesión con usuario y contraseña.
- En `auth.service.ts` se creó el método `login(username, password)` que valida las credenciales y guarda un token en `localStorage` si son correctas.
- En `login.page.ts`, el método `onLogin()` llama a este servicio y, si es exitoso, navega a `/tabs` tras una animación.

### 2. **Logout**
- Permite al usuario cerrar sesión.
- En `auth.service.ts` se creó el método `logout()` que elimina el token del `localStorage`.
- En `settings.page.ts`, el método `logout()` llama al servicio y navega a `/home`.

### 3. **Verificación de Sesión**
- Verifica si el usuario está autenticado.
- En `auth.service.ts`, el método `isAuthenticated()` retorna `true` si existe un token en `localStorage`.
- Se usa en el guard para proteger rutas.

### 4. **Guard de Rutas**
- Protege rutas para que solo usuarios autenticados puedan acceder.
- En `auth.guard.ts`, se verifica si el usuario está autenticado. Si no, se redirige a `/login` usando el router de Angular.

### 5. **Animación en Login**
- Mejora la experiencia visual al iniciar sesión.
- Se agregó una animación Angular (`fadeIn`) que se activa al ocultar el formulario de login tras un login exitoso.

### 6. **Navegación**
- Permite moverse entre páginas de la app.
- Se utiliza `NavController` de Ionic para navegar entre `/login`, `/tabs`, `/settings` y `/home`.

---

## Decisiones Tomadas

- **Uso de Standalone Components:** Optamos por Angular Standalone para simplificar la estructura y evitar módulos tradicionales, haciendo el proyecto más moderno y fácil de mantener.
- **Autenticación Simple con LocalStorage:** Para fines didácticos y simplicidad, se usó un token falso en `localStorage`. Esto permite simular un flujo real de autenticación sin backend.
- **Guard para Rutas Protegidas:** Se implementó un guard para asegurar que solo usuarios autenticados puedan acceder a ciertas rutas, mejorando la seguridad y el flujo de usuario.
- **Navegación con NavController:** Se eligió `NavController` de Ionic para una navegación fluida y compatible con aplicaciones móviles.
- **Animación en Login:** Se añadió una animación para mejorar la experiencia de usuario y dar feedback visual al iniciar sesión.
- **Redirección de la Ruta Raíz:** La ruta raíz (`/`) redirige a `/home` para que el usuario siempre tenga una pantalla de inicio clara.

---

## Estructura de Archivos Relevantes

- `src/app/pages/login/login.page.ts` y `.html`: Lógica y vista del login.
- `src/app/services/auth.service.ts`: Servicio de autenticación (login, logout, verificación de token).
- `src/app/guards/auth.guard.ts`: Guard para proteger rutas.
- `src/app/pages/tabs/tabs.page.ts` y `.html`: Página de tabs y navegación a Settings.
- `src/app/pages/settings/settings.page.ts` y `.html`: Página de configuración con botones para volver y cerrar sesión.
- `src/app/app.routes.ts`: Definición de rutas principales.

---

## Notas Técnicas

- El proyecto es **standalone** (sin módulos tradicionales de Angular).
- El guard y la navegación usan inyección de dependencias con `inject`.

---

## Requisitos

- Node.js y npm instalados.
- Ionic CLI instalado globalmente (`npm install -g @ionic/cli`).

---

## Instalación y Ejecución

```bash
npm install
ionic serve
```

---

**¡Listo! Ahora tienes una base sólida para una app móvil con autenticación y navegación protegida en Ionic + Angular Standalone.**