import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetHtmlQueryParams extends SpeakeasyBase {
    headers?: Record<string, string>;
    js?: boolean;
    proxy?: shared.ProxyEnum;
    timeout?: number;
    url: string;
}
export declare class GetHtmlRequest extends SpeakeasyBase {
    queryParams: GetHtmlQueryParams;
}
export declare class GetHtmlResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    pageError?: shared.PageError;
    statusCode: number;
    getHTML200TextHTMLString?: string;
}
