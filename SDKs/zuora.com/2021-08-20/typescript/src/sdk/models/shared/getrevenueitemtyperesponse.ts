import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRevenueItemTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountingPeriodEndDate" })
  accountingPeriodEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=accountingPeriodName" })
  accountingPeriodName?: string;

  @SpeakeasyMetadata({ data: "json, name=accountingPeriodStartDate" })
  accountingPeriodStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=isAccountingPeriodClosed" })
  isAccountingPeriodClosed?: boolean;
}
