import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectRecordsErrorResponse } from "./customobjectrecordserrorresponse";



export class PostCustomObjectRecordsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: CustomObjectRecordsErrorResponse;

  @SpeakeasyMetadata({ data: "json, name=records" })
  records?: Record<string, any>[];
}
