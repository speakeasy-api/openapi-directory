import { SpeakeasyBase } from "../../../internal/utils";
import { Solution } from "./solution";
export declare class ErrorT extends SpeakeasyBase {
    /**
     * A unique William Hill identifier for the error
     */
    code?: string;
    /**
     * To help pinpoint the exact parameter where a request has failed
     */
    field?: string;
    /**
     * A unique William Hill text string to enable you to identify the error (in English only)
     */
    message?: string;
    solution?: Solution;
}
