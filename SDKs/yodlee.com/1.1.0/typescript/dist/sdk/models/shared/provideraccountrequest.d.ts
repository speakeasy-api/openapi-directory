import { SpeakeasyBase } from "../../../internal/utils";
import { ProvidersDatasetInput } from "./providersdataset";
import { FieldInput } from "./field";
import { ProviderAccountPreferences } from "./provideraccountpreferences";
export declare enum ProviderAccountRequestAggregationSourceEnum {
    System = "SYSTEM",
    User = "USER"
}
export declare enum ProviderAccountRequestDatasetNameEnum {
    BasicAggData = "BASIC_AGG_DATA",
    AdvanceAggData = "ADVANCE_AGG_DATA",
    AcctProfile = "ACCT_PROFILE",
    Document = "DOCUMENT"
}
export declare class ProviderAccountRequestInput extends SpeakeasyBase {
    aggregationSource?: ProviderAccountRequestAggregationSourceEnum;
    consentId?: number;
    dataset?: ProvidersDatasetInput[];
    datasetName?: ProviderAccountRequestDatasetNameEnum[];
    field: FieldInput[];
    preferences?: ProviderAccountPreferences;
}
