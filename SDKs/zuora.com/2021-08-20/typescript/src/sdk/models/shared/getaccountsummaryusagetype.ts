import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAccountSummaryUsageType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=unitOfMeasure" })
  unitOfMeasure?: string;
}
