import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Defines the simulation behavior.
 *
 * @remarks
 *
 *  * `default` - Calls the simulation for every single seller.
 *  * `skip` - Never calls the simulation.
 *  * `only1P` - Only calls the simulation for first party sellers.
 */
export declare enum GetProductSearchFacetsSimulationBehaviorEnum {
    Default = "default",
    Skip = "skip",
    Only1P = "only1P"
}
/**
 * Defines the sort type. If null, the products will be sorted by relevance.
 */
export declare enum GetProductSearchFacetsSortEnum {
    PriceDesc = "price:desc",
    PriceAsc = "price:asc",
    OrdersDesc = "orders:desc",
    NameDesc = "name:desc",
    NameAsc = "name:asc",
    ReleaseDesc = "release:desc",
    DiscountDesc = "discount:desc"
}
export declare class GetProductSearchFacetsRequest extends SpeakeasyBase {
    /**
     * Number of products per page.
     */
    count?: number;
    /**
     * # Format
     *
     * @remarks
     *
     * The `facets` parameter follows the format : `/${facetKey1}/${facetValue1}/${facetKey2}/${facetValue2}/.../${facetKeyN}/${facetValueN}`.
     *
     * The order in which the terms appear is not relevant to the search.
     *
     * You can also repeat the same `facetKey` several times for different values. For example: `category-1/shoes/color/blue/color/red/color/yellow`
     *
     * # General filters
     *
     * The `facets` parameter also allows the following general filters.
     *
     * | `facetKey`      | Description                                                                                      | Example                                                                  |
     * | --------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
     * | `price`         | Filter the search by a price range. The facet value follows the format `${minPrice}:${maxPrice}` | `/color/blue/price/100:500?query=shirt`                                  |
     * | `category-${n}` | Filter the search by category, where `n` represents the category tree level (1 = department, 2 = category, 3 = subcategory, and so on) | `category-1/clothing/category-2/shirts`                                  |
     * | `region-id`     | Filter the search by a region id (aka regionalization). The value is the region id               | `/color/blue/region-id/v2.26219C7C3DE42BAAD11CFB92CD0BFE91?query=shirt`. |
     *
     */
    facets: string;
    /**
     * Whether the result should hide unavailable items (`true`), or not (`false`)
     */
    hideUnavailableItems?: boolean;
    /**
     * Indicates the target language as a BCP 47 language code. The Intelligent Search must have indexed the account in the target language.
     */
    locale?: string;
    /**
     * Current search page.
     */
    page?: number;
    /**
     * Search term. It can contain any character.
     */
    query?: string;
    /**
     * Defines the simulation behavior.
     *
     * @remarks
     *
     *  * `default` - Calls the simulation for every single seller.
     *  * `skip` - Never calls the simulation.
     *  * `only1P` - Only calls the simulation for first party sellers.
     */
    simulationBehavior?: GetProductSearchFacetsSimulationBehaviorEnum;
    /**
     * Defines the sort type. If null, the products will be sorted by relevance.
     */
    sort?: GetProductSearchFacetsSortEnum;
}
export declare class GetProductSearchFacetsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * List of products for the given query.
     */
    productSearch?: shared.ProductSearch;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
