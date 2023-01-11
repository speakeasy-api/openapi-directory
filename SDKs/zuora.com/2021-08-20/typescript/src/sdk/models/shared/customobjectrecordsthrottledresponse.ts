import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectRecordsWithError } from "./customobjectrecordswitherror";



export class CustomObjectRecordsThrottledResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=details", elemType: CustomObjectRecordsWithError })
  details?: CustomObjectRecordsWithError[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
