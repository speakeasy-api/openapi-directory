import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
import { DerivedNetworthHistoricalBalance } from "./derivednetworthhistoricalbalance";
export declare class DerivedNetworth extends SpeakeasyBase {
    asset?: Money;
    date?: string;
    historicalBalances?: DerivedNetworthHistoricalBalance[];
    liability?: Money;
    networth?: Money;
}
