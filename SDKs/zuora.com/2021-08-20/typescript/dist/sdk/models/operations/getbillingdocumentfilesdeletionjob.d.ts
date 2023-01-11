import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBillingDocumentFilesDeletionJobPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class GetBillingDocumentFilesDeletionJobHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetBillingDocumentFilesDeletionJobRequest extends SpeakeasyBase {
    pathParams: GetBillingDocumentFilesDeletionJobPathParams;
    headers: GetBillingDocumentFilesDeletionJobHeaders;
}
export declare class GetBillingDocumentFilesDeletionJobResponse extends SpeakeasyBase {
    contentType: string;
    getBillingDocumentFilesDeletionJobResponse?: shared.GetBillingDocumentFilesDeletionJobResponse;
    headers: Record<string, string[]>;
    statusCode: number;
}
