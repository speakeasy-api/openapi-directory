import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataExtractsEventData } from "./dataextractseventdata";



export class DataExtractsEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: DataExtractsEventData;

  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: string;
}
