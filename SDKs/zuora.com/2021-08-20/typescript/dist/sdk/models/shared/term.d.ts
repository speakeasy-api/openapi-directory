import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List of terms for the subscription.
 *
 * @remarks
 *
 */
export declare class Term extends SpeakeasyBase {
    /**
     * The end date of the term.
     *
     * @remarks
     *
     */
    endDate?: Date;
    /**
     * Indicates whether the term is evergreen.
     *
     * @remarks
     *
     */
    isEvergreen?: boolean;
    /**
     * The start date of the term.
     *
     * @remarks
     *
     */
    startDate?: Date;
    /**
     * The term number.
     *
     * @remarks
     *
     */
    termNumber?: number;
}
