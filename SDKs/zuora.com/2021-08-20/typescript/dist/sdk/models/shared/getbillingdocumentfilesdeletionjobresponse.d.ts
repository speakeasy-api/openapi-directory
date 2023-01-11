import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetBillingDocumentFilesDeletionJobResponseStatusEnum {
    Pending = "Pending",
    Processing = "Processing",
    Completed = "Completed",
    Error = "Error"
}
export declare class GetBillingDocumentFilesDeletionJobResponse extends SpeakeasyBase {
    id?: string;
    status?: GetBillingDocumentFilesDeletionJobResponseStatusEnum;
    success?: boolean;
}
