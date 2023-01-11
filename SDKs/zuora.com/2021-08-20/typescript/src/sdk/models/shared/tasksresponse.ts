import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Task } from "./task";



// TasksResponsePagination
/** 
 * An object containing pagination information for the list of tasks returned by the API.
 * 
**/
export class TasksResponsePagination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_page" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_length" })
  pageLength?: number;
}


export class TasksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Task })
  data?: Task[];

  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: TasksResponsePagination;
}
