import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetHostedPagesQueryParams extends SpeakeasyBase {
    versionNumber?: string;
}
export declare class GetHostedPagesHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetHostedPagesRequest extends SpeakeasyBase {
    queryParams: GetHostedPagesQueryParams;
    headers: GetHostedPagesHeaders;
}
export declare class GetHostedPagesResponse extends SpeakeasyBase {
    contentType: string;
    getHostedPagesType?: shared.GetHostedPagesType;
    headers: Record<string, string[]>;
    statusCode: number;
}
