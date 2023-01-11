import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Capability } from "./capability";
import { ProvidersDataset } from "./providersdataset";
import { LoginForm } from "./loginform";


export enum ProviderDetailPriorityEnum {
    Popular = "POPULAR",
    Suggested = "SUGGESTED",
    Cobrand = "COBRAND",
    Search = "SEARCH",
    All = "ALL"
}

export enum ProviderDetailAccountTypeEnum {
    Current = "CURRENT",
    BrokerageCash = "BROKERAGE_CASH"
}

export enum ProviderDetailAuthParameterEnum {
    AuthorizationCode = "authorizationCode",
    IdToken = "idToken",
    AuthResponse = "authResponse"
}

export enum ProviderDetailAuthTypeEnum {
    Oauth = "OAUTH",
    Credentials = "CREDENTIALS",
    MfaCredentials = "MFA_CREDENTIALS"
}

export enum ProviderDetailStatusEnum {
    Supported = "Supported",
    Beta = "Beta",
    Unsupported = "Unsupported"
}


export class ProviderDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PRIORITY" })
  priority?: ProviderDetailPriorityEnum;

  @SpeakeasyMetadata({ data: "json, name=accountType" })
  accountType?: ProviderDetailAccountTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=associatedProviderIds" })
  associatedProviderIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=authParameter" })
  authParameter?: ProviderDetailAuthParameterEnum[];

  @SpeakeasyMetadata({ data: "json, name=authType" })
  authType?: ProviderDetailAuthTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=baseUrl" })
  baseUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=capability", elemType: Capability })
  capability?: Capability[];

  @SpeakeasyMetadata({ data: "json, name=countryISOCode" })
  countryISOCode?: string;

  @SpeakeasyMetadata({ data: "json, name=dataset", elemType: ProvidersDataset })
  dataset?: ProvidersDataset[];

  @SpeakeasyMetadata({ data: "json, name=favicon" })
  favicon?: string;

  @SpeakeasyMetadata({ data: "json, name=help" })
  help?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=isAddedByUser" })
  isAddedByUser?: string;

  @SpeakeasyMetadata({ data: "json, name=isAutoRefreshEnabled" })
  isAutoRefreshEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isConsentRequired" })
  isConsentRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=languageISOCode" })
  languageISOCode?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModified" })
  lastModified?: string;

  @SpeakeasyMetadata({ data: "json, name=loginForm", elemType: LoginForm })
  loginForm?: LoginForm[];

  @SpeakeasyMetadata({ data: "json, name=loginUrl" })
  loginUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryLanguageISOCode" })
  primaryLanguageISOCode?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ProviderDetailStatusEnum;
}
