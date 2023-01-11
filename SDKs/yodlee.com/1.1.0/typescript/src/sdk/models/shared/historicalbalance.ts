import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";


export enum HistoricalBalanceDataSourceTypeEnum {
    S = "S",
    C = "C",
    Cf = "CF"
}


export class HistoricalBalance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asOfDate" })
  asOfDate?: string;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: Money;

  @SpeakeasyMetadata({ data: "json, name=dataSourceType" })
  dataSourceType?: HistoricalBalanceDataSourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=isAsset" })
  isAsset?: boolean;
}
