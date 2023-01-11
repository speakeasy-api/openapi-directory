import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
export declare enum DerivedNetworthHistoricalBalanceDataSourceTypeEnum {
    S = "S",
    C = "C",
    Cf = "CF"
}
export declare class DerivedNetworthHistoricalBalance extends SpeakeasyBase {
    accountId?: number;
    asOfDate?: string;
    balance?: Money;
    dataSourceType?: DerivedNetworthHistoricalBalanceDataSourceTypeEnum;
    date?: string;
    isAsset?: boolean;
}
