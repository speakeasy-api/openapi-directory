import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of the query job.
 *
 * @remarks
 *
 */
export declare enum DataQueryJobCancelledQueryStatusEnum {
    Cancelled = "cancelled"
}
/**
 * A cancelled data query job.
 *
 * @remarks
 *
 */
export declare class DataQueryJobCancelled extends SpeakeasyBase {
    /**
     * The query job creator's Id.
     *
     * @remarks
     *
     */
    createdBy?: string;
    /**
     * Internal identifier of the query job.
     *
     * @remarks
     *
     */
    id?: string;
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
     */
    queryStatus?: DataQueryJobCancelledQueryStatusEnum;
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
