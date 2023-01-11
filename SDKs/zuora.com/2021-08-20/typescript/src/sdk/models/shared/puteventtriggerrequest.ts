import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PutEventTriggerRequestEventType
/** 
 * The type of events to be triggered.
**/
export class PutEventTriggerRequestEventType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}


export class PutEventTriggerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType?: PutEventTriggerRequestEventType;
}
