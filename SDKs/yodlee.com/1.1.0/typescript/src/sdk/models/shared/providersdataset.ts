import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeInput } from "./attribute";
import { Attribute } from "./attribute";


export enum ProvidersDatasetNameEnum {
    BasicAggData = "BASIC_AGG_DATA",
    AdvanceAggData = "ADVANCE_AGG_DATA",
    AcctProfile = "ACCT_PROFILE",
    Document = "DOCUMENT"
}


export class ProvidersDatasetInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribute", elemType: AttributeInput })
  attribute?: AttributeInput[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: ProvidersDatasetNameEnum;
}


export class ProvidersDataset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribute", elemType: Attribute })
  attribute?: Attribute[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: ProvidersDatasetNameEnum;
}
