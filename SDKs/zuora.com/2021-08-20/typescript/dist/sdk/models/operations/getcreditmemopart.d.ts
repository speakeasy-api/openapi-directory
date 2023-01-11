import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCreditMemoPartPathParams extends SpeakeasyBase {
    creditMemoId: string;
    partid: string;
}
export declare class GetCreditMemoPartHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetCreditMemoPartRequest extends SpeakeasyBase {
    pathParams: GetCreditMemoPartPathParams;
    headers: GetCreditMemoPartHeaders;
}
export declare class GetCreditMemoPartResponse extends SpeakeasyBase {
    contentType: string;
    getCreditMemoPartType?: shared.GetCreditMemoPartType;
    headers: Record<string, string[]>;
    statusCode: number;
}
