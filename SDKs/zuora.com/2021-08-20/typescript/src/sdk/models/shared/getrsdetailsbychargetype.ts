import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetrsDetailsByChargeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=revenueSchedules" })
  revenueSchedules?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
