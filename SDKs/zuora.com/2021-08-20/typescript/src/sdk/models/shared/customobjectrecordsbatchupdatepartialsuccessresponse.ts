import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectRecordsErrorResponse } from "./customobjectrecordserrorresponse";



export class CustomObjectRecordsBatchUpdatePartialSuccessResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: CustomObjectRecordsErrorResponse;
}
