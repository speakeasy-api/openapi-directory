import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";



export class AccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account", elemType: Account })
  account?: Account[];
}
