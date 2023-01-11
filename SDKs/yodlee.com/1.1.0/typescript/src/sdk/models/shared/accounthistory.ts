import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HistoricalBalance } from "./historicalbalance";



export class AccountHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=historicalBalances", elemType: HistoricalBalance })
  historicalBalances?: HistoricalBalance[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}
