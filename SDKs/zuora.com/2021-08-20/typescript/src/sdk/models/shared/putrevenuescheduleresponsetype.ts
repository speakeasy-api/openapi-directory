import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutRevenueScheduleResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=revenueEventNumber" })
  revenueEventNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
