import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSelectedRequest extends SpeakeasyBase {
    /**
     * Country of the proxy to use (US by default). Only available on Startup and Custom plans.
     */
    country?: shared.CountryEnum;
    /**
     * Type of device emulation.
     */
    device?: shared.DeviceEnum;
    /**
     * Return error on 404 HTTP status on the target page (false by default).
     */
    errorOn404?: boolean;
    /**
     * Return error on redirect on the target page (false by default).
     */
    errorOnRedirect?: boolean;
    /**
     * HTTP headers to pass to the target page. Can be specified either via a nested query parameter (...&headers[One]=value1&headers=[Another]=value2) or as a JSON encoded object (...&headers={"One": "value1", "Another": "value2"})
     */
    headers?: Record<string, string>;
    /**
     * Execute on-page JavaScript using a headless browser (true by default)
     */
    js?: boolean;
    /**
     * Maximum JavaScript rendering time in ms. Increase it in case if you see a loading indicator instead of data on the target page.
     */
    jsTimeout?: number;
    /**
     * Type of proxy, use residential proxies if your site restricts traffic from datacenters (datacenter by default). Note that residential proxy requests are more expensive than datacenter, see the pricing page for details.
     */
    proxy?: shared.ProxyEnum;
    /**
     * CSS selector (null by default, returns whole page HTML)
     */
    selector?: string;
    /**
     * Maximum processing time in ms. Increase it in case of timeout errors (10000 by default, maximum is 30000)
     */
    timeout?: number;
    /**
     * URL of the target page
     */
    url: string;
}
export declare class GetSelectedResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Parameters validation error
     */
    error?: shared.ErrorT;
    /**
     * Non-2xx and non-404 HTTP status code on the target page
     */
    pageError?: shared.PageError;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getSelected200TextHTMLString?: string;
}
