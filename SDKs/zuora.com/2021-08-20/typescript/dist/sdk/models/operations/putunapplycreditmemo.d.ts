import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutUnapplyCreditMemoPathParams extends SpeakeasyBase {
    creditMemoId: string;
}
export declare class PutUnapplyCreditMemoHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PutUnapplyCreditMemoRequest extends SpeakeasyBase {
    pathParams: PutUnapplyCreditMemoPathParams;
    headers: PutUnapplyCreditMemoHeaders;
    request: shared.UnapplyCreditMemoType;
}
export declare class PutUnapplyCreditMemoResponse extends SpeakeasyBase {
    contentType: string;
    getCreditMemoType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
