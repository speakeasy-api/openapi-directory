import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
import { DerivedNetworthHistoricalBalance } from "./derivednetworthhistoricalbalance";



export class DerivedNetworth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset" })
  asset?: Money;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=historicalBalances", elemType: DerivedNetworthHistoricalBalance })
  historicalBalances?: DerivedNetworthHistoricalBalance[];

  @SpeakeasyMetadata({ data: "json, name=liability" })
  liability?: Money;

  @SpeakeasyMetadata({ data: "json, name=networth" })
  networth?: Money;
}
