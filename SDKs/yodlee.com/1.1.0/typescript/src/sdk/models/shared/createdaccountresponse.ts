import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreatedAccountInfo } from "./createdaccountinfo";



export class CreatedAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account", elemType: CreatedAccountInfo })
  account?: CreatedAccountInfo[];
}
