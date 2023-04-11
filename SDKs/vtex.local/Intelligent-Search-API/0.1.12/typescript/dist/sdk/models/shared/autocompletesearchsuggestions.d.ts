import { SpeakeasyBase } from "../../../internal/utils";
export declare class AutocompleteSearchSuggestionsSearchesAttributes extends SpeakeasyBase {
    /**
     * Facet key.
     */
    key?: string;
    /**
     * Human-readable format of the facet key.
     */
    labelKey?: string;
    /**
     * Human-readable format of the facet value.
     */
    labelValue?: string;
    /**
     * Facet value.
     */
    value?: string;
}
export declare class AutocompleteSearchSuggestionsSearches extends SpeakeasyBase {
    /**
     * List of facets in which the term can be searched.
     */
    attributes?: AutocompleteSearchSuggestionsSearchesAttributes[];
    /**
     * Number of times the term was searched.
     */
    count?: number;
    /**
     * Search term.
     */
    term?: string;
}
/**
 * OK
 */
export declare class AutocompleteSearchSuggestions extends SpeakeasyBase {
    /**
     * List of suggested facets and terms.
     */
    searches?: AutocompleteSearchSuggestionsSearches[];
}
