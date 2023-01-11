import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDebitMemoApplicationPartsPathParams extends SpeakeasyBase {
    debitMemoId: string;
}
export declare class GetDebitMemoApplicationPartsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetDebitMemoApplicationPartsRequest extends SpeakeasyBase {
    pathParams: GetDebitMemoApplicationPartsPathParams;
    headers: GetDebitMemoApplicationPartsHeaders;
}
export declare class GetDebitMemoApplicationPartsResponse extends SpeakeasyBase {
    contentType: string;
    getDebitMemoApplicationPartCollectionType?: shared.GetDebitMemoApplicationPartCollectionType;
    headers: Record<string, string[]>;
    statusCode: number;
}
