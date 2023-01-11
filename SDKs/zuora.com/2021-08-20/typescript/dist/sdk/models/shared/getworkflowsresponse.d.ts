import { SpeakeasyBase } from "../../../internal/utils";
import { Workflow } from "./workflow";
/**
 * An object containing pagination information for the list of workflows returned by the api
 *
**/
export declare class GetWorkflowsResponsePagination extends SpeakeasyBase {
    nextPage?: string;
    page?: number;
    pageLength?: number;
}
export declare class GetWorkflowsResponse extends SpeakeasyBase {
    data?: Workflow[];
    pagination?: GetWorkflowsResponsePagination;
}
