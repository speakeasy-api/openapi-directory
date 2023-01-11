import { SpeakeasyBase } from "../../../internal/utils";
import { Capability } from "./capability";
import { ProvidersDataset } from "./providersdataset";
export declare enum ProvidersPriorityEnum {
    Popular = "POPULAR",
    Suggested = "SUGGESTED",
    Cobrand = "COBRAND",
    Search = "SEARCH",
    All = "ALL"
}
export declare enum ProvidersAccountTypeEnum {
    Current = "CURRENT",
    BrokerageCash = "BROKERAGE_CASH"
}
export declare enum ProvidersAuthParameterEnum {
    AuthorizationCode = "authorizationCode",
    IdToken = "idToken",
    AuthResponse = "authResponse"
}
export declare enum ProvidersAuthTypeEnum {
    Oauth = "OAUTH",
    Credentials = "CREDENTIALS",
    MfaCredentials = "MFA_CREDENTIALS"
}
export declare enum ProvidersStatusEnum {
    Supported = "Supported",
    Beta = "Beta",
    Unsupported = "Unsupported"
}
export declare class Providers extends SpeakeasyBase {
    priority?: ProvidersPriorityEnum;
    accountType?: ProvidersAccountTypeEnum[];
    associatedProviderIds?: number[];
    authParameter?: ProvidersAuthParameterEnum[];
    authType?: ProvidersAuthTypeEnum;
    baseUrl?: string;
    capability?: Capability[];
    countryISOCode?: string;
    dataset?: ProvidersDataset[];
    favicon?: string;
    forgetPasswordUrl?: string;
    help?: string;
    id?: number;
    isAddedByUser?: string;
    isAutoRefreshEnabled?: boolean;
    isConsentRequired?: boolean;
    languageISOCode?: string;
    lastModified?: string;
    loginHelp?: string;
    loginUrl?: string;
    logo?: string;
    name?: string;
    primaryLanguageISOCode?: string;
    status?: ProvidersStatusEnum;
}
