import { SpeakeasyBase } from "../../../internal/utils";
export declare class DelGroupVbPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class DelGroupVbQueryParams extends SpeakeasyBase {
    fileIds?: string;
}
export declare class DelGroupVbRequest extends SpeakeasyBase {
    pathParams: DelGroupVbPathParams;
    queryParams: DelGroupVbQueryParams;
}
export declare class DelGroupVbResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
