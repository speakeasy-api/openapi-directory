import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutEventRiDetailType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=revenueItems" })
  revenueItems: Record<string, any>[];
}
