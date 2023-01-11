import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCalloutHistoryVoType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attemptedNum" })
  attemptedNum?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=eventCategory" })
  eventCategory?: string;

  @SpeakeasyMetadata({ data: "json, name=eventContext" })
  eventContext?: string;

  @SpeakeasyMetadata({ data: "json, name=notification" })
  notification?: string;

  @SpeakeasyMetadata({ data: "json, name=requestMethod" })
  requestMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=requestUrl" })
  requestUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=responseCode" })
  responseCode?: string;

  @SpeakeasyMetadata({ data: "json, name=responseContent" })
  responseContent?: string;
}
