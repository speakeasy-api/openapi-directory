import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTopSearchesRequest extends SpeakeasyBase {
    /**
     * Indicates the target language as a BCP 47 language code. The Intelligent Search must have indexed the account in the target language.
     */
    locale?: string;
}
export declare class GetTopSearchesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Server error.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    topSearches?: shared.TopSearches;
}
