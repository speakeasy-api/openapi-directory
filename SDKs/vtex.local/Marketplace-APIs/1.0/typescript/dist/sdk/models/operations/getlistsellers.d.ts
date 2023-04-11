import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetListSellersRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * Name of the VTEX account that belongs to the marketplace.
     */
    accountName: string;
    /**
     * Environment to use. Used as part of the URL.
     */
    environment: string;
    /**
     * The start number of pagination, being `0` the default value.
     */
    from?: number;
    /**
     * Groups are defined by keywords that group sellers into categories defined by the marketplace.
     */
    group?: string;
    /**
     * Filters sellers by the name of who made the integration, if VTEX or an external hub. The possible values for VTEX integrations are: `vtex-sellerportal`, `vtex-seller` and `vtex-franchise`.
     */
    integration?: string;
    /**
     * Enables to filter sellers that are active (`true`) or unactive (`false`) in the marketplace.
     */
    isActive?: boolean;
    /**
     * The flag `isBetterScope` is used by the VTEX Checkout to simulate shopping carts, products, and shipping only in sellers with the field set as `true`, avoiding performance issues. When used as a query param, `isBetterScope` filters sellers that have the flag set as `true` or `false`.
     */
    isBetterScope?: boolean;
    /**
     * When set as `true`, the list returned will be of sellers who have a VTEX store configured. When set as `false`, the list will be of sellers who do not have a VTEX store configured.
     */
    isVtex?: boolean;
    /**
     * Search sellers by a keyword in `sellerId` or `sellerName`.
     */
    keyword?: string;
    /**
     * Filters sellers available for the marketplace's sales channel (or [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) indicated in this field.
     */
    sc?: string;
    /**
     * Filters sellers by their type, which can be regular seller (`1`) or whitelabel seller (`2`).
     */
    sellerType?: number;
    /**
     * Narrow the search filtering by the fields: `id`, `name` or `pendingoffers`. The list retrieved can be organized in an ascending (`asc`) or descending (`desc`) order. The standardized format is `{field}:{order}`, and the default value is `id:asc`.
     */
    sort?: string;
    /**
     * The end number of pagination, being `100` the default value.
     */
    to?: number;
}
export declare class GetListSellersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
