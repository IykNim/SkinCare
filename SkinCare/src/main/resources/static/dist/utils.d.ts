import { Theme, AnimationConfig } from './types.js';
export declare class ThemeManager {
    private currentTheme;
    private readonly storageKey;
    constructor();
    private loadTheme;
    toggleTheme(): void;
    private saveTheme;
    private applyTheme;
    getCurrentTheme(): Theme['name'];
}
export declare class AnimationUtils {
    static fadeIn(element: HTMLElement, config?: AnimationConfig): Promise<void>;
    static slideIn(element: HTMLElement, direction?: 'up' | 'down' | 'left' | 'right', config?: AnimationConfig): Promise<void>;
    static rippleEffect(element: HTMLElement, event: MouseEvent): void;
}
export declare class DOMUtils {
    static createElement<T extends keyof HTMLElementTagNameMap>(tag: T, className?: string, textContent?: string): HTMLElementTagNameMap[T];
    static addEventListeners(element: HTMLElement, events: Record<string, EventListener>): void;
    static debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void;
    static throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void;
}
export declare class ScrollAnimations {
    private observer;
    constructor();
    observe(element: HTMLElement): void;
    unobserve(element: HTMLElement): void;
    disconnect(): void;
}
export declare const formatDate: (date: Date) => string;
export declare const validateEmail: (email: string) => boolean;
export declare const validatePhone: (phone: string) => boolean;
export declare const generateId: () => string;
//# sourceMappingURL=utils.d.ts.map