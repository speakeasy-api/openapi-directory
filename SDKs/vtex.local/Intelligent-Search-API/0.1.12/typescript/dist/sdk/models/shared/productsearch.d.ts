import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object with information of misspelled terms.
 */
export declare class ProductSearchCorrection extends SpeakeasyBase {
    /**
     * Whether the term is misspelled (`true`) or not (`false`).
     */
    misspelled?: boolean;
}
/**
 * Indicates how the search-engine dealt with the fullText when there is more than one word.
 *
 * @remarks
 *  * `and` - It means that the products contains all the words in the query.
 *  * `or` - It means that the results will contain at least one word from the original search query. If `and` was not possible, `or` will be the fallback.
 */
export declare enum ProductSearchOperatorEnum {
    And = "and",
    Or = "or"
}
/**
 * List of products for the given query.
 */
export declare class ProductSearch extends SpeakeasyBase {
    /**
     * Object with information of misspelled terms.
     */
    correction?: ProductSearchCorrection;
    /**
     * Indicates how the search engine corrected the misspelled word by using fuzzy logic. It can be a number representing the max number of misspelled letters, or the string `auto` suggesting that the search-engine should set this value by itself.
     */
    fuzzy?: string;
    /**
     * Indicates how the search-engine dealt with the fullText when there is more than one word.
     *
     * @remarks
     *  * `and` - It means that the products contains all the words in the query.
     *  * `or` - It means that the results will contain at least one word from the original search query. If `and` was not possible, `or` will be the fallback.
     */
    operator?: ProductSearchOperatorEnum;
    /**
     * List of products
     */
    products?: Record<string, any>[];
    /**
     * Total number of products.
     */
    recordsFiltered?: number;
    /**
     * Whether the list of products was translated by the IS (`true`) or not (`false`).
     */
    translated?: boolean;
}
