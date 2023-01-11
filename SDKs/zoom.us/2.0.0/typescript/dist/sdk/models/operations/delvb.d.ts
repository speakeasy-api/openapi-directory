import { SpeakeasyBase } from "../../../internal/utils";
export declare class DelVbPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class DelVbQueryParams extends SpeakeasyBase {
    fileIds?: string;
}
export declare class DelVbRequest extends SpeakeasyBase {
    pathParams: DelVbPathParams;
    queryParams: DelVbQueryParams;
}
export declare class DelVbResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
