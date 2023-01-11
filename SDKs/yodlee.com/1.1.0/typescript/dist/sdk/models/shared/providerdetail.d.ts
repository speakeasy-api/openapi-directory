import { SpeakeasyBase } from "../../../internal/utils";
import { Capability } from "./capability";
import { ProvidersDataset } from "./providersdataset";
import { LoginForm } from "./loginform";
export declare enum ProviderDetailPriorityEnum {
    Popular = "POPULAR",
    Suggested = "SUGGESTED",
    Cobrand = "COBRAND",
    Search = "SEARCH",
    All = "ALL"
}
export declare enum ProviderDetailAccountTypeEnum {
    Current = "CURRENT",
    BrokerageCash = "BROKERAGE_CASH"
}
export declare enum ProviderDetailAuthParameterEnum {
    AuthorizationCode = "authorizationCode",
    IdToken = "idToken",
    AuthResponse = "authResponse"
}
export declare enum ProviderDetailAuthTypeEnum {
    Oauth = "OAUTH",
    Credentials = "CREDENTIALS",
    MfaCredentials = "MFA_CREDENTIALS"
}
export declare enum ProviderDetailStatusEnum {
    Supported = "Supported",
    Beta = "Beta",
    Unsupported = "Unsupported"
}
export declare class ProviderDetail extends SpeakeasyBase {
    priority?: ProviderDetailPriorityEnum;
    accountType?: ProviderDetailAccountTypeEnum[];
    associatedProviderIds?: number[];
    authParameter?: ProviderDetailAuthParameterEnum[];
    authType?: ProviderDetailAuthTypeEnum;
    baseUrl?: string;
    capability?: Capability[];
    countryISOCode?: string;
    dataset?: ProvidersDataset[];
    favicon?: string;
    help?: string;
    id?: number;
    isAddedByUser?: string;
    isAutoRefreshEnabled?: boolean;
    isConsentRequired?: boolean;
    languageISOCode?: string;
    lastModified?: string;
    loginForm?: LoginForm[];
    loginUrl?: string;
    logo?: string;
    name?: string;
    primaryLanguageISOCode?: string;
    status?: ProviderDetailStatusEnum;
}
