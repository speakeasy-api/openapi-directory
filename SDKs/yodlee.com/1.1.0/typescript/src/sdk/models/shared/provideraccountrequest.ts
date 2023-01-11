import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvidersDatasetInput } from "./providersdataset";
import { FieldInput } from "./field";
import { ProviderAccountPreferences } from "./provideraccountpreferences";


export enum ProviderAccountRequestAggregationSourceEnum {
    System = "SYSTEM",
    User = "USER"
}

export enum ProviderAccountRequestDatasetNameEnum {
    BasicAggData = "BASIC_AGG_DATA",
    AdvanceAggData = "ADVANCE_AGG_DATA",
    AcctProfile = "ACCT_PROFILE",
    Document = "DOCUMENT"
}


export class ProviderAccountRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregationSource" })
  aggregationSource?: ProviderAccountRequestAggregationSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=consentId" })
  consentId?: number;

  @SpeakeasyMetadata({ data: "json, name=dataset", elemType: ProvidersDatasetInput })
  dataset?: ProvidersDatasetInput[];

  @SpeakeasyMetadata({ data: "json, name=datasetName" })
  datasetName?: ProviderAccountRequestDatasetNameEnum[];

  @SpeakeasyMetadata({ data: "json, name=field", elemType: FieldInput })
  field: FieldInput[];

  @SpeakeasyMetadata({ data: "json, name=preferences" })
  preferences?: ProviderAccountPreferences;
}
