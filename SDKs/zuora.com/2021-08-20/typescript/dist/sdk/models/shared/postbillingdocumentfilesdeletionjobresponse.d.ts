import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostBillingDocumentFilesDeletionJobResponseStatusEnum {
    Pending = "Pending"
}
export declare class PostBillingDocumentFilesDeletionJobResponse extends SpeakeasyBase {
    id?: string;
    status?: PostBillingDocumentFilesDeletionJobResponseStatusEnum;
    success?: boolean;
}
