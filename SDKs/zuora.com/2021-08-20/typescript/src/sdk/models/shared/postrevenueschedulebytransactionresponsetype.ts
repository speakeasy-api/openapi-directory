import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostRevenueScheduleByTransactionResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=revenueScheduleNumber" })
  revenueScheduleNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
