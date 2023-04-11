import { SpeakeasyBase } from "../../../internal/utils";
export declare class TopSearchesSearches extends SpeakeasyBase {
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
export declare class TopSearches extends SpeakeasyBase {
    /**
     * A list of the 10 most searched terms.
     */
    searches?: TopSearchesSearches[];
}
