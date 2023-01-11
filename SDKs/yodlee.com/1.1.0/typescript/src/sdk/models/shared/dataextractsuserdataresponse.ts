import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataExtractsUserData } from "./dataextractsuserdata";



export class DataExtractsUserDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userData", elemType: DataExtractsUserData })
  userData?: DataExtractsUserData[];
}
