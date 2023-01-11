import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateAccountInfo } from "./createaccountinfo";



export class CreateAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account: CreateAccountInfo;
}
