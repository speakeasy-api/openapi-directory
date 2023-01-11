import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetCalloutHistoryVoType } from "./getcallouthistoryvotype";



export class GetCalloutHistoryVOsType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calloutHistories", elemType: GetCalloutHistoryVoType })
  calloutHistories?: GetCalloutHistoryVoType[];

  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
