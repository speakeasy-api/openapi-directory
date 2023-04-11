import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Non-2xx and non-404 HTTP status code on the target page
 */
export declare class PageError extends SpeakeasyBase {
    /**
     * Response HTTP status code (403, 500, etc)
     */
    statusCode?: number;
    /**
     * Response HTTP status message
     */
    statusMessage?: string;
}
