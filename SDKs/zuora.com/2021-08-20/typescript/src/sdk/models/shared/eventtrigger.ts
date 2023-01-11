import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventType } from "./eventtype";



export class EventTrigger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=baseObject" })
  baseObject?: string;

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType?: EventType;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
