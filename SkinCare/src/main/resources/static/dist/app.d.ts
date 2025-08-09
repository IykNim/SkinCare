import { ThemeManager } from './utils.js';
import { ChatComponent, ProfileComponent } from './components.js';
declare class SkinCareApp {
    private themeManager;
    private scrollAnimations;
    private profileDropdown;
    private chatComponent;
    private tabComponent;
    private profileComponent;
    constructor();
    private init;
    private initializeComponents;
    private initializeProfileDropdown;
    private initializeChatComponent;
    private initializeTabComponent;
    private initializeProfileComponent;
    private initializeScrollAnimations;
    private initializeThemeToggle;
    private createThemeToggle;
    private updateThemeToggleIcon;
    private initializeRippleEffects;
    private initializeKeyboardNavigation;
    private handleEscapeKey;
    private handleTabKey;
    private handleEnterKey;
    private handleTabChange;
    private loadAccountSettings;
    private loadSecuritySettings;
    private loadDocuments;
    private loadShippingSettings;
    private loadNotificationSettings;
    getThemeManager(): ThemeManager;
    getChatComponent(): ChatComponent | null;
    getProfileComponent(): ProfileComponent | null;
    destroy(): void;
}
export default SkinCareApp;
//# sourceMappingURL=app.d.ts.map