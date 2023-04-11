import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchSuggestionsSearches extends SpeakeasyBase {
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
export declare class SearchSuggestions extends SpeakeasyBase {
    /**
     * List of suggested terms.
     */
    searches?: SearchSuggestionsSearches[];
}
