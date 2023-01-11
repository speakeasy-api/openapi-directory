import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCreditMemoItemPartPathParams extends SpeakeasyBase {
    creditMemoId: string;
    itempartid: string;
    partid: string;
}
export declare class GetCreditMemoItemPartHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetCreditMemoItemPartRequest extends SpeakeasyBase {
    pathParams: GetCreditMemoItemPartPathParams;
    headers: GetCreditMemoItemPartHeaders;
}
export declare class GetCreditMemoItemPartResponse extends SpeakeasyBase {
    contentType: string;
    getCreditMemoItemPartType?: shared.GetCreditMemoItemPartType;
    headers: Record<string, string[]>;
    statusCode: number;
}
