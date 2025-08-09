import { TabConfig } from './types.js';
export declare class DropdownComponent {
    private state;
    private trigger;
    private menu;
    constructor(triggerSelector: string, menuSelector: string);
    private init;
    private toggle;
    private handleOutsideClick;
    private updateUI;
    open(): void;
    close(): void;
    isOpen(): boolean;
}
export declare class ChatComponent {
    private chatBox;
    private chatIcon;
    private closeButton;
    private responseArea;
    private questions;
    private responses;
    constructor();
    private init;
    private handleQuestionClick;
    private displayResponse;
    open(): void;
    close(): void;
}
export declare class TabComponent {
    private tabs;
    private activeTabId;
    private tabContainer;
    private contentContainer;
    constructor(containerSelector: string, contentSelector: string);
    private init;
    switchTab(tabId: string): void;
    private updateUI;
    private onTabChange;
    getActiveTab(): TabConfig | undefined;
    addTab(tab: TabConfig): void;
    private renderTab;
}
export declare class ProfileComponent {
    private user;
    private form;
    private updateButton;
    constructor(formSelector: string);
    private init;
    private loadUserData;
    private populateForm;
    private setupFormValidation;
    private validateField;
    private clearFieldError;
    private showFieldError;
    private validateEmail;
    private validatePhone;
    private handleUpdate;
    private saveUserData;
    private showSuccessMessage;
}
//# sourceMappingURL=components.d.ts.map