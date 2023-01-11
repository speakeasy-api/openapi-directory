import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Workflow } from "./workflow";



// GetWorkflowsResponsePagination
/** 
 * An object containing pagination information for the list of workflows returned by the api
 * 
**/
export class GetWorkflowsResponsePagination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_page" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_length" })
  pageLength?: number;
}


export class GetWorkflowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Workflow })
  data?: Workflow[];

  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: GetWorkflowsResponsePagination;
}
