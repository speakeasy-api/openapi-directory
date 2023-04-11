import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSearchSuggestionsRequest extends SpeakeasyBase {
    /**
     * Indicates the target language as a BCP 47 language code. The Intelligent Search must have indexed the account in the target language.
     */
    locale?: string;
    /**
     * Search term. It can contain any character.
     */
    query?: string;
}
export declare class GetSearchSuggestionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Server error.
     */
    error?: shared.ErrorT;
    /**
     * OK
     */
    searchSuggestions?: shared.SearchSuggestions;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
