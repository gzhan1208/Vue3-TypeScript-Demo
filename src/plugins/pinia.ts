import { createPinia } from 'pinia'

export default function loadComponent(app: any) {
    const pinia = createPinia();
    app.use(pinia);
}
