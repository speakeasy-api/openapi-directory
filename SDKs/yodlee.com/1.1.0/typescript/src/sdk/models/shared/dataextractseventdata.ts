import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataExtractsEventUserData } from "./dataextractseventuserdata";



export class DataExtractsEventData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fromDate" })
  fromDate?: string;

  @SpeakeasyMetadata({ data: "json, name=toDate" })
  toDate?: string;

  @SpeakeasyMetadata({ data: "json, name=userCount" })
  userCount?: number;

  @SpeakeasyMetadata({ data: "json, name=userData", elemType: DataExtractsEventUserData })
  userData?: DataExtractsEventUserData[];
}
