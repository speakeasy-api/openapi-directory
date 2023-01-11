import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataExtractsEvent } from "./dataextractsevent";



export class DataExtractsEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event" })
  event?: DataExtractsEvent;
}
