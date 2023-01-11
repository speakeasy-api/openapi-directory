import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateAccountInfo } from "./updateaccountinfo";



export class UpdateAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account: UpdateAccountInfo;
}
