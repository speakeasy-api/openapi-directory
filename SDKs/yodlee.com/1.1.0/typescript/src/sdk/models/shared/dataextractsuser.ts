import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DataExtractsUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=loginName" })
  loginName?: string;
}
