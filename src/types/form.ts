export interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
}

export interface FormData {
    personal: PersonalInfo;
    yearly: boolean;
    plan: string | null;
    addons: string[];
}
