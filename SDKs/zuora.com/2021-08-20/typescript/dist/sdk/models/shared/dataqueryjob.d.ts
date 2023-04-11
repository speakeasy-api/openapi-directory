import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of the query job.
 *
 * @remarks
 *
 * * `submitted` - query submitted to query service for processing
 * * `accepted` - query accepted by the query service
 * * `in_progress` - query executed by the query service
 * * `completed` - query execution completed by the query service
 * * `failed` - query unable to be processed by the query service
 * * `cancelled` - query cancelled by the user
 *
 * If the value of this field is `completed`, the `dataFile` field contains the location of the query results.
 *
 * If the value of this field is `accepted` or `in_progress`, you can use [Cancel a data query job](#operation/DELETE_DataQueryJob) to prevent Zuora from performing the query. Zuora then sets the status of the query job to `cancelled`.
 *
 */
export declare enum DataQueryJobQueryStatusEnum {
    Submitted = "submitted",
    Accepted = "accepted",
    InProgress = "in_progress",
    Completed = "completed",
    Failed = "failed",
    Cancelled = "cancelled"
}
/**
 * A data query job.
 *
 * @remarks
 *
 */
export declare class DataQueryJob extends SpeakeasyBase {
    /**
     * The query job creator's Id.
     *
     * @remarks
     *
     */
    createdBy?: string;
    /**
     * The URL of the query results. Only applicable if the value of the `queryStatus` field is `completed`.
     *
     * @remarks
     *
     */
    dataFile?: string;
    /**
     * Internal identifier of the query job.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The number of rows the query results. Only applicable if the value of the `queryStatus` field is `completed`.
     *
     * @remarks
     *
     */
    outputRows?: number;
    /**
     * Processing time of the query job, in milliseconds. Only applicable if the value of the `queryStatus` field is `completed`.
     *
     * @remarks
     *
     */
    processingTime?: number;
    /**
     * The query that was submitted.
     *
     * @remarks
     *
     */
    query?: string;
    /**
     * Status of the query job.
     *
     * @remarks
     *
     * * `submitted` - query submitted to query service for processing
     * * `accepted` - query accepted by the query service
     * * `in_progress` - query executed by the query service
     * * `completed` - query execution completed by the query service
     * * `failed` - query unable to be processed by the query service
     * * `cancelled` - query cancelled by the user
     *
     * If the value of this field is `completed`, the `dataFile` field contains the location of the query results.
     *
     * If the value of this field is `accepted` or `in_progress`, you can use [Cancel a data query job](#operation/DELETE_DataQueryJob) to prevent Zuora from performing the query. Zuora then sets the status of the query job to `cancelled`.
     *
     */
    queryStatus?: DataQueryJobQueryStatusEnum;
    /**
     * The number of times that Zuora will retry the query if Zuora is unable to perform the query.
     *
     * @remarks
     *
     */
    remainingRetries?: number;
    /**
     * Date and time when the query job was last updated, in ISO 8601 format.
     *
     * @remarks
     *
     */
    updatedOn?: Date;
}
