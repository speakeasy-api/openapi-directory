import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutApplyCreditMemoPathParams extends SpeakeasyBase {
    creditMemoId: string;
}
export declare class PutApplyCreditMemoHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutApplyCreditMemoRequest extends SpeakeasyBase {
    pathParams: PutApplyCreditMemoPathParams;
    headers: PutApplyCreditMemoHeaders;
    request: shared.ApplyCreditMemoType;
}
export declare class PutApplyCreditMemoResponse extends SpeakeasyBase {
    contentType: string;
    getCreditMemoType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
