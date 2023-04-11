import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the billing document file deletion job.
 *
 * @remarks
 *
 */
export declare enum POSTBillingDocumentFilesDeletionJobResponseStatusEnum {
    Pending = "Pending"
}
export declare class POSTBillingDocumentFilesDeletionJobResponse extends SpeakeasyBase {
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
    status?: POSTBillingDocumentFilesDeletionJobResponseStatusEnum;
    /**
     * Returns `true` if the request was processed successfully.
     */
    success?: boolean;
}
