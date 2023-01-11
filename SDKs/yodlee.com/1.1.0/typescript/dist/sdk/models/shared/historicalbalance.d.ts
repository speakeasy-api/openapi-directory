import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
export declare enum HistoricalBalanceDataSourceTypeEnum {
    S = "S",
    C = "C",
    Cf = "CF"
}
export declare class HistoricalBalance extends SpeakeasyBase {
    asOfDate?: string;
    balance?: Money;
    dataSourceType?: HistoricalBalanceDataSourceTypeEnum;
    date?: string;
    isAsset?: boolean;
}
