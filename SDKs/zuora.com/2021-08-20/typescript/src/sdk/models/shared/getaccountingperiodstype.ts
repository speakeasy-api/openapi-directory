import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAccountingPeriodsType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountingPeriods" })
  accountingPeriods?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
