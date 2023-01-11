import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountHistory } from "./accounthistory";



export class AccountHistoricalBalancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account", elemType: AccountHistory })
  account?: AccountHistory[];
}
