import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSelectedQueryParams extends SpeakeasyBase {
    headers?: Record<string, string>;
    js?: boolean;
    proxy?: shared.ProxyEnum;
    selector?: string;
    timeout?: number;
    url: string;
}
export declare class GetSelectedRequest extends SpeakeasyBase {
    queryParams: GetSelectedQueryParams;
}
export declare class GetSelectedResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    pageError?: shared.PageError;
    statusCode: number;
    getSelected200TextHTMLString?: string;
}
