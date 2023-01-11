import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRSbyCreditMemoItemPathParams extends SpeakeasyBase {
    cmiId: string;
}
export declare class GetRSbyCreditMemoItemHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetRSbyCreditMemoItemRequest extends SpeakeasyBase {
    pathParams: GetRSbyCreditMemoItemPathParams;
    headers: GetRSbyCreditMemoItemHeaders;
}
export declare class GetRSbyCreditMemoItemResponse extends SpeakeasyBase {
    contentType: string;
    getrsDetailType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
