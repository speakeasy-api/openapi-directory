import { SpeakeasyBase } from "../../../internal/utils";
import { Task } from "./task";
/**
 * An object containing pagination information for the list of tasks returned by the API.
 *
 * @remarks
 *
 */
export declare class TasksResponsePagination extends SpeakeasyBase {
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
     * An integer denoting the number of tasks in this response.
     *
     * @remarks
     *
     */
    pageLength?: number;
}
/**
 * OK
 */
export declare class TasksResponse extends SpeakeasyBase {
    /**
     * The list of tasks retrieved.
     *
     * @remarks
     *
     */
    data?: Task[];
    /**
     * An object containing pagination information for the list of tasks returned by the API.
     *
     * @remarks
     *
     */
    pagination?: TasksResponsePagination;
}
