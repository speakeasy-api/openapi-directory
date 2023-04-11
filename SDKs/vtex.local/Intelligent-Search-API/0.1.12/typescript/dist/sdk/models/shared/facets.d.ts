import { SpeakeasyBase } from "../../../internal/utils";
export declare class FacetsBreadcrumb extends SpeakeasyBase {
    /**
     * Query link.
     */
    href?: string;
    /**
     * Human-readable format of the facet key.
     */
    name?: string;
}
/**
 * Facet type
 *
 * @remarks
 *  - `TEXT` - The value is a simple text.
 *  - `PRICERANGE` - The value contains the property `range` representing the minimum and the maximum price for the query.
 *
 */
export declare enum FacetsFacetsTypeEnum {
    Text = "TEXT",
    Pricerange = "PRICERANGE"
}
export declare class FacetsFacetsValues extends SpeakeasyBase {
    /**
     * Value id
     */
    id?: string;
    /**
     * Facet key.
     */
    key?: string;
    /**
     * Human-readable format of the facet value
     */
    name?: string;
    /**
     * Number of resulting products.
     */
    quantity?: number;
    /**
     * Whether the value is selected (`true`) or not (`false`).
     */
    selected?: boolean;
    /**
     * Facet value.
     */
    value?: string;
}
export declare class FacetsFacets extends SpeakeasyBase {
    /**
     * Whether the client-side should hide the facet (`true`) or not (`false`)
     */
    hidden?: boolean;
    /**
     * Human-readable format of the facet key.
     */
    name?: string;
    /**
     * Number of possible values.
     */
    quantity?: number;
    /**
     * Facet type
     *
     * @remarks
     *  - `TEXT` - The value is a simple text.
     *  - `PRICERANGE` - The value contains the property `range` representing the minimum and the maximum price for the query.
     *
     */
    type?: FacetsFacetsTypeEnum;
    /**
     * Possible values.
     */
    values?: FacetsFacetsValues[];
}
export declare class FacetsQueryArgsSelectedFacets extends SpeakeasyBase {
    /**
     * facet key.
     */
    key?: string;
    /**
     * facet value.
     */
    value?: string;
}
/**
 * Term and facets used in the query
 */
export declare class FacetsQueryArgs extends SpeakeasyBase {
    /**
     * Search term used in the query.
     */
    query?: string;
    /**
     * Facets used in the query.
     */
    selectedFacets?: FacetsQueryArgsSelectedFacets[];
}
/**
 * List of facets for the given query.
 */
export declare class Facets extends SpeakeasyBase {
    /**
     * Generated breadcrumb for the given query.
     */
    breadcrumb?: FacetsBreadcrumb[];
    /**
     * List of facets
     */
    facets?: FacetsFacets[];
    /**
     * Term and facets used in the query
     */
    queryArgs?: FacetsQueryArgs;
    /**
     * Indicates whether there was sampling in the aggregation of facets or not. In search results that have many products, only the first 30000 will be aggregated to avoid performance issues.
     */
    sampling?: boolean;
}
