import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetScrabbleScoreRequest extends SpeakeasyBase {
    /**
     * Word to get scrabble score for.
     */
    word: string;
}
export declare class GetScrabbleScoreResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
