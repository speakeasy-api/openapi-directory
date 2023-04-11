import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the billing document file deletion job.
 *
 * @remarks
 *
 */
export declare enum GETBillingDocumentFilesDeletionJobResponseStatusEnum {
    Pending = "Pending",
    Processing = "Processing",
    Completed = "Completed",
    Error = "Error"
}
export declare class GETBillingDocumentFilesDeletionJobResponse extends SpeakeasyBase {
    /**
     * The unique ID of the billing document file deletion job.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The status of the billing document file deletion job.
     *
     * @remarks
     *
     */
    status?: GETBillingDocumentFilesDeletionJobResponseStatusEnum;
    /**
     * Returns `true` if the request was processed successfully.
     */
    success?: boolean;
}
