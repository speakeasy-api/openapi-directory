import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectBulkJobErrorResponse } from "./customobjectbulkjoberrorresponse";



export class CustomObjectBulkJobErrorResponseCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: CustomObjectBulkJobErrorResponse })
  errors: CustomObjectBulkJobErrorResponse[];
}
