import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CrossSelling {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Product Search of Accessories
     *
     * @remarks
     * Retrieves general information about the product's accessories.
     */
    productSearchAccessories(req: operations.ProductSearchAccessoriesRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ProductSearchAccessoriesResponse>;
    /**
     * Get Product Search of Show Together
     *
     * @remarks
     * Retrieves general information about the products that are show together with the product in question.
     */
    productSearchShowTogether(req: operations.ProductSearchShowTogetherRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ProductSearchShowTogetherResponse>;
    /**
     * Get Product Search of Similars
     *
     * @remarks
     * Retrieves general information about related product searches.
     */
    productSearchSimilars(req: operations.ProductSearchSimilarsRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ProductSearchSimilarsResponse>;
    /**
     * Get Product Search of Suggestions
     *
     * @remarks
     * Retrieves general information about other product suggestions related to the product.
     */
    productSearchSuggestions(req: operations.ProductSearchSuggestionsRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ProductSearchSuggestionsResponse>;
    /**
     * Get Product Search of Who Bought Also Bought
     *
     * @remarks
     * Retrieves general information about other related products that the user also bought.
     */
    productSearchWhoBoughtAlsoBought(req: operations.ProductSearchWhoBoughtAlsoBoughtRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ProductSearchWhoBoughtAlsoBoughtResponse>;
    /**
     * Get Product Search of Who Saw Also Bought
     *
     * @remarks
     * Retrieves general information about other related products that the users saw and also bought.
     */
    productSearchWhoSawAlsoBought(req: operations.ProductSearchWhoSawAlsoBoughtRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ProductSearchWhoSawAlsoBoughtResponse>;
    /**
     * Get Product Search of Who Saw Also Saw
     *
     * @remarks
     * Retrieves general information about other related products that the users also saw.
     */
    productSearchWhoSawAlsoSaw(req: operations.ProductSearchWhoSawAlsoSawRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ProductSearchWhoSawAlsoSawResponse>;
}
