import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostRevenueScheduleByChargeResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=revenueScheduleNumber" })
  revenueScheduleNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
