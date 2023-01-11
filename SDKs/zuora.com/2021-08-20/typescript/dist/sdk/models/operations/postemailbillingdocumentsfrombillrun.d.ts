import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostEmailBillingDocumentsfromBillRunPathParams extends SpeakeasyBase {
    billRunId: string;
}
export declare class PostEmailBillingDocumentsfromBillRunHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostEmailBillingDocumentsfromBillRunRequest extends SpeakeasyBase {
    pathParams: PostEmailBillingDocumentsfromBillRunPathParams;
    headers: PostEmailBillingDocumentsfromBillRunHeaders;
    request: shared.PostEmailBillingDocfromBillRunType;
}
export declare class PostEmailBillingDocumentsfromBillRunResponse extends SpeakeasyBase {
    commonResponseType?: shared.CommonResponseType;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
