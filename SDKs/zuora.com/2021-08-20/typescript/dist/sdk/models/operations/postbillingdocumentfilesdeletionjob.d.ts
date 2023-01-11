import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostBillingDocumentFilesDeletionJobHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostBillingDocumentFilesDeletionJobRequest extends SpeakeasyBase {
    headers: PostBillingDocumentFilesDeletionJobHeaders;
    request: shared.PostBillingDocumentFilesDeletionJobRequest;
}
export declare class PostBillingDocumentFilesDeletionJobResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postBillingDocumentFilesDeletionJobResponse?: shared.PostBillingDocumentFilesDeletionJobResponse;
    statusCode: number;
}
