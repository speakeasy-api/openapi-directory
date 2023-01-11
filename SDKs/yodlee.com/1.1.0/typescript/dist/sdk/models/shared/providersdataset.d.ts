import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeInput } from "./attribute";
import { Attribute } from "./attribute";
export declare enum ProvidersDatasetNameEnum {
    BasicAggData = "BASIC_AGG_DATA",
    AdvanceAggData = "ADVANCE_AGG_DATA",
    AcctProfile = "ACCT_PROFILE",
    Document = "DOCUMENT"
}
export declare class ProvidersDatasetInput extends SpeakeasyBase {
    attribute?: AttributeInput[];
    name?: ProvidersDatasetNameEnum;
}
export declare class ProvidersDataset extends SpeakeasyBase {
    attribute?: Attribute[];
    name?: ProvidersDatasetNameEnum;
}
