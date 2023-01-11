import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDebitMemoItemPathParams extends SpeakeasyBase {
    debitMemoId: string;
    dmitemid: string;
}
export declare class GetDebitMemoItemHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
    zuoraVersion?: string;
}
export declare class GetDebitMemoItemRequest extends SpeakeasyBase {
    pathParams: GetDebitMemoItemPathParams;
    headers: GetDebitMemoItemHeaders;
}
export declare class GetDebitMemoItemResponse extends SpeakeasyBase {
    contentType: string;
    getDebitMemoItemType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
