import { SpeakeasyBase } from "../../../internal/utils";
import { Task } from "./task";
/**
 * An object containing pagination information for the list of tasks returned by the API.
 *
**/
export declare class TasksResponsePagination extends SpeakeasyBase {
    nextPage?: string;
    page?: number;
    pageLength?: number;
}
export declare class TasksResponse extends SpeakeasyBase {
    data?: Task[];
    pagination?: TasksResponsePagination;
}
