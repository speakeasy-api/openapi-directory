import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Capability } from "./capability";
import { ProvidersDataset } from "./providersdataset";


export enum ProvidersPriorityEnum {
    Popular = "POPULAR",
    Suggested = "SUGGESTED",
    Cobrand = "COBRAND",
    Search = "SEARCH",
    All = "ALL"
}

export enum ProvidersAccountTypeEnum {
    Current = "CURRENT",
    BrokerageCash = "BROKERAGE_CASH"
}

export enum ProvidersAuthParameterEnum {
    AuthorizationCode = "authorizationCode",
    IdToken = "idToken",
    AuthResponse = "authResponse"
}

export enum ProvidersAuthTypeEnum {
    Oauth = "OAUTH",
    Credentials = "CREDENTIALS",
    MfaCredentials = "MFA_CREDENTIALS"
}

export enum ProvidersStatusEnum {
    Supported = "Supported",
    Beta = "Beta",
    Unsupported = "Unsupported"
}


export class Providers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PRIORITY" })
  priority?: ProvidersPriorityEnum;

  @SpeakeasyMetadata({ data: "json, name=accountType" })
  accountType?: ProvidersAccountTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=associatedProviderIds" })
  associatedProviderIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=authParameter" })
  authParameter?: ProvidersAuthParameterEnum[];

  @SpeakeasyMetadata({ data: "json, name=authType" })
  authType?: ProvidersAuthTypeEnum;

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

  @SpeakeasyMetadata({ data: "json, name=forgetPasswordUrl" })
  forgetPasswordUrl?: string;

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

  @SpeakeasyMetadata({ data: "json, name=loginHelp" })
  loginHelp?: string;

  @SpeakeasyMetadata({ data: "json, name=loginUrl" })
  loginUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryLanguageISOCode" })
  primaryLanguageISOCode?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ProvidersStatusEnum;
}
