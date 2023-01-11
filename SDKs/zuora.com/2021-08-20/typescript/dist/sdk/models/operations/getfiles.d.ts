import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetFilesPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class GetFilesHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetFilesRequest extends SpeakeasyBase {
    pathParams: GetFilesPathParams;
    headers: GetFilesHeaders;
}
export declare class GetFilesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
