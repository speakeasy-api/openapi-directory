import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSelectedMultipleQueryParams extends SpeakeasyBase {
    headers?: Record<string, string>;
    js?: boolean;
    proxy?: shared.ProxyEnum;
    selectors?: string[];
    timeout?: number;
    url: string;
}
export declare class GetSelectedMultipleRequest extends SpeakeasyBase {
    queryParams: GetSelectedMultipleQueryParams;
}
export declare class GetSelectedMultipleResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    pageError?: shared.PageError;
    selectedAreas?: string[];
    statusCode: number;
}
