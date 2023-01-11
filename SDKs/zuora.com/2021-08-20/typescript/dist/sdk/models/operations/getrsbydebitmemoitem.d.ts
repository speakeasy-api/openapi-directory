import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRSbyDebitMemoItemPathParams extends SpeakeasyBase {
    dmiId: string;
}
export declare class GetRSbyDebitMemoItemHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetRSbyDebitMemoItemRequest extends SpeakeasyBase {
    pathParams: GetRSbyDebitMemoItemPathParams;
    headers: GetRSbyDebitMemoItemHeaders;
}
export declare class GetRSbyDebitMemoItemResponse extends SpeakeasyBase {
    contentType: string;
    getrsDetailType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
