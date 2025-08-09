import { DropdownComponent, ChatComponent } from './components.js';
declare class IndexPageApp {
    private profileDropdown;
    private chatComponent;
    private chatResponses;
    constructor();
    private init;
    private initializeComponents;
    private initializeProfileDropdown;
    private handleDropdownKeyNavigation;
    private initializeChatComponent;
    private setupChatEventListeners;
    private openChat;
    private closeChat;
    private handleQuestionClick;
    private displayResponse;
    private escapeHtml;
    private initializeNavigationEffects;
    getChatComponent(): ChatComponent | null;
    getProfileDropdown(): DropdownComponent | null;
}
export default IndexPageApp;
//# sourceMappingURL=index-app.d.ts.map