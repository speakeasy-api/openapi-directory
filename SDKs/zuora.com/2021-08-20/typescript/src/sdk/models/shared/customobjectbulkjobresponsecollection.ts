import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomObjectBulkJobResponse } from "./customobjectbulkjobresponse";



export class CustomObjectBulkJobResponseCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "json, name=jobs", elemType: CustomObjectBulkJobResponse })
  jobs: CustomObjectBulkJobResponse[];
}
