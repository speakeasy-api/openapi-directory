import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RampIntervalRequest
/** 
 * Container for the intervals that the ramp is split into in its timeline. Zuora can report metrics for this specific period.
 * 
**/
export class RampIntervalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate: Date;
}
