import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Catalog {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List all products
     *
     * @remarks
     * Retrieves the entire product catalog, including all products, features, and their corresponding product rate plans, charges. Products are returned in reverse chronological order on the `UpdatedDate` field.
     *
     * With product rate plans and rate plan charges, the REST API has a maximum array size.
     *
     * For a use case of this operation, see [Retrieve the product catalog](https://www.zuora.com/developer/api-guides/#Retrieve-the-product-catalog).
     *
     */
    getCatalog(req: operations.GETCatalogRequest, config?: AxiosRequestConfig): Promise<operations.GETCatalogResponse>;
    /**
     * Retrieve a product
     *
     * @remarks
     * Retrieves detailed information about a specific product, including information about its product rate plans and charges.
     *
     */
    getProduct(req: operations.GETProductRequest, config?: AxiosRequestConfig): Promise<operations.GETProductResponse>;
    /**
     * Multi-entity: Share a product with an entity
     *
     * @remarks
     * **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     *
     * Shares a product with a target entity. Zuora synchronizes the shared products to the target entity after sharing. For more information about product sharing, see [Products Sharing Across Entities](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/C_Business_Objects_Sharing_Across_Entities/B_Products_Sharing_Across_Entities).
     *
     * Note that:
     *
     * - You must finish all the [prerequisites](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/C_Business_Objects_Sharing_Across_Entities/B_Products_Sharing_Across_Entities/Share_Products) before sharing products with other entities.
     *
     * - Only source entity administrators have permission to share products with other entities. You must make the call as a source entity administrator.
     *
     * - Currently, you can only share a product with one entity at a time. An error occurs if you try to share a product to more than one entity.
     *
     */
    postCatalog(req: operations.POSTCatalogRequest, config?: AxiosRequestConfig): Promise<operations.POSTCatalogResponse>;
}
