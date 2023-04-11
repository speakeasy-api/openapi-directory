import { SpeakeasyBase } from "../../../internal/utils";
import { Workflow } from "./workflow";
/**
 * An object containing pagination information for the list of workflows returned by the api
 *
 * @remarks
 *
 */
export declare class GetWorkflowsResponsePagination extends SpeakeasyBase {
    /**
     * A string containing the URL where the next page of data can be retrieved.
     *
     * @remarks
     *
     */
    nextPage?: string;
    /**
     * An integer denoting the current page number.
     *
     * @remarks
     *
     */
    page?: number;
    /**
     * An  integer denoting the number of workflows in this response.
     *
     * @remarks
     *
     */
    pageLength?: number;
}
/**
 * OK
 */
export declare class GetWorkflowsResponse extends SpeakeasyBase {
    /**
     * The list of workflows retrieved.
     *
     * @remarks
     *
     */
    data?: Workflow[];
    /**
     * An object containing pagination information for the list of workflows returned by the api
     *
     * @remarks
     *
     */
    pagination?: GetWorkflowsResponsePagination;
}
