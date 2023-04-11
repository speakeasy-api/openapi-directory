import { Autocomplete } from "./autocomplete";
import { CrossSelling } from "./crossselling";
import { Facets } from "./facets";
import * as shared from "./models/shared";
import { Offers } from "./offers";
import { Search } from "./search";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://vtex.local", "https://{accountName}.{environment}.com.br"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 *
 * @remarks
 * > Check the new [Search onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/search-onboarding). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Search and is organized by focusing on the developer's journey.
 *
 * This API lets you search and sort products in the Catalog using Fulltext, Category and Brand search terms.
 *
 * Retrieve product data to create custom searches and product shelves.
 */
export declare class SDK {
    autocomplete: Autocomplete;
    crossSelling: CrossSelling;
    facets: Facets;
    offers: Offers;
    search: Search;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
