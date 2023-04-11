import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class FacetscategoryRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    /**
     * Starter page range. These parameters allow the API to be paginated. Take into account that the initial and final pages cannot have a separation superior to 50 pages. Thus, it will be displayed 50 items per page.
     */
    from?: string;
    /**
     * Finisher page range. These parameters allow the API to be paginated. Take into account that the initial and final pages cannot have a separation superior to 50 pages. Thus, it will be displayed 50 items per page.
     */
    to?: string;
    /**
     * Mapping of the term. It can be `c` for a category, `b` for a brand, or `specificationFilter_{specificationId}` for a specification. You need to include a map for each term you are searching for in the same term's order.
     */
    map: string;
    /**
     * Term used for the facet's search. You can search for as much term as you want. The term can be: `categoryId`, `brandId`, `specificationId`.
     */
    term: string;
}
export declare class Facetscategory200ApplicationJSONBrands extends SpeakeasyBase {
    /**
     * Link of the facet.
     */
    link: string;
    /**
     * Enconded link of the facet.
     */
    linkEncoded: string;
    /**
     * Mapping of the facet.
     */
    map: string;
    /**
     * Brand name.
     */
    name: string;
    /**
     * Position of the facet.
     */
    position: number;
    /**
     * Quantity of facets.
     */
    quantity: number;
    /**
     * Value of the facet.
     */
    value: string;
}
export declare class Facetscategory200ApplicationJSONCategoriesTreesChildren extends SpeakeasyBase {
    /**
     * Category children.
     */
    children: any[];
    /**
     * Category ID.
     */
    id: number;
    /**
     * Link of the facet.
     */
    link: string;
    /**
     * Encoded link of the facet.
     */
    linkEncoded: string;
    /**
     * Mapping of the facet.
     */
    map: string;
    /**
     * Category name.
     */
    name: string;
    /**
     * Position of the facet.
     */
    position: number;
    /**
     * Quantity of the facets.
     */
    quantity: number;
    /**
     * Value of the facet.
     */
    value: string;
}
export declare class Facetscategory200ApplicationJSONCategoriesTrees extends SpeakeasyBase {
    /**
     * Category children.
     */
    children: Facetscategory200ApplicationJSONCategoriesTreesChildren[];
    /**
     * Category ID.
     */
    id: number;
    /**
     * Link of the facet.
     */
    link: string;
    /**
     * Encoded link of the facet.
     */
    linkEncoded: string;
    /**
     * Mapping of the facet.
     */
    map: string;
    /**
     * Category name.
     */
    name: string;
    /**
     * Position of the facet.
     */
    position: number;
    /**
     * Quantity of the facets.
     */
    quantity: number;
    /**
     * Value of the facet.
     */
    value: string;
}
export declare class Facetscategory200ApplicationJSONDepartments extends SpeakeasyBase {
    /**
     * Link of the facet.
     */
    link: string;
    /**
     * Encoded link of the facet.
     */
    linkEncoded: string;
    /**
     * Mapping of the facet.
     */
    map: string;
    /**
     * Category name.
     */
    name: string;
    /**
     * Position of the facets.
     */
    position: number;
    /**
     * Quantity of facets.
     */
    quantity: number;
    /**
     * Value of the facet.
     */
    value: string;
}
/**
 * Brands' quantity of displayed and total items.
 */
export declare class Facetscategory200ApplicationJSONSummaryBrands extends SpeakeasyBase {
    /**
     * Quantity of displayed items.
     */
    displayedItems: number;
    /**
     * Quantity of total items.
     */
    totalItems: number;
}
/**
 * Category tree's quantity of displayed and total items.
 */
export declare class Facetscategory200ApplicationJSONSummaryCategoriesTrees extends SpeakeasyBase {
    /**
     * Quantity of displayed items.
     */
    displayedItems: number;
    /**
     * Quantity of total items.
     */
    totalItems: number;
}
/**
 * Departments' quantity of displayed and total items.
 */
export declare class Facetscategory200ApplicationJSONSummaryDepartments extends SpeakeasyBase {
    /**
     * Quantity of displayed items.
     */
    displayedItems: number;
    /**
     * Quantity of total items.
     */
    totalItems: number;
}
/**
 * Price ranges' quantity of displayed and total items.
 */
export declare class Facetscategory200ApplicationJSONSummaryPriceRanges extends SpeakeasyBase {
    /**
     * Quantity of displayed items.
     */
    displayedItems: number;
    /**
     * Quantity of total items.
     */
    totalItems: number;
}
/**
 * Summary of the facets.
 */
export declare class Facetscategory200ApplicationJSONSummary extends SpeakeasyBase {
    /**
     * Brands' quantity of displayed and total items.
     */
    brands: Facetscategory200ApplicationJSONSummaryBrands;
    /**
     * Category tree's quantity of displayed and total items.
     */
    categoriesTrees: Facetscategory200ApplicationJSONSummaryCategoriesTrees;
    /**
     * Departments' quantity of displayed and total items.
     */
    departments: Facetscategory200ApplicationJSONSummaryDepartments;
    /**
     * Price ranges' quantity of displayed and total items.
     */
    priceRanges: Facetscategory200ApplicationJSONSummaryPriceRanges;
    /**
     * Specification filters' quantity of displayed and total items.
     */
    specificationFilters: Record<string, any>;
}
/**
 * OK
 */
export declare class Facetscategory200ApplicationJSON extends SpeakeasyBase {
    /**
     * Array of general information about the brands.
     */
    brands: Facetscategory200ApplicationJSONBrands[];
    /**
     * Array of the category tree.
     */
    categoriesTrees: Facetscategory200ApplicationJSONCategoriesTrees[];
    /**
     * Array of general information about the categories.
     */
    departments: Facetscategory200ApplicationJSONDepartments[];
    /**
     * Array with general information of the price ranges.
     */
    priceRanges: any[];
    /**
     * Object with general information of specifications.
     */
    specificationFilters: Record<string, any>;
    /**
     * Summary of the facets.
     */
    summary: Facetscategory200ApplicationJSONSummary;
}
export declare class FacetscategoryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    facetscategory200ApplicationJSONObject?: Facetscategory200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
