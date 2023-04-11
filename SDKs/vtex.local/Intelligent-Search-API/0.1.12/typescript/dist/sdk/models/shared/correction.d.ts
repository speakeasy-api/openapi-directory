import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object that indicates if the term was misspelled and suggests a possible correction.
 */
export declare class CorrectionCorrection extends SpeakeasyBase {
    /**
     * Whether the API was able to suggest a correction (`true`) or not (`false`).
     */
    correction?: boolean;
    /**
     * The same as `text`, but it highlights the corrected word. Useful when there is more than one word.
     */
    highlighted?: string;
    /**
     * Whether the term was misspelled (`true`) or not (`false`).
     */
    misspelled?: boolean;
    /**
     * The corrected term. If the API was not able to correct the term, it will show the original search term.
     */
    text?: string;
}
/**
 * OK
 */
export declare class Correction extends SpeakeasyBase {
    /**
     * Object that indicates if the term was misspelled and suggests a possible correction.
     */
    correction?: CorrectionCorrection;
}
