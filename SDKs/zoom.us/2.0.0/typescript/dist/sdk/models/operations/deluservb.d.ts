import { SpeakeasyBase } from "../../../internal/utils";
export declare class DelUserVbPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class DelUserVbQueryParams extends SpeakeasyBase {
    fileIds?: string;
}
export declare class DelUserVbRequest extends SpeakeasyBase {
    pathParams: DelUserVbPathParams;
    queryParams: DelUserVbQueryParams;
}
export declare class DelUserVbResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
