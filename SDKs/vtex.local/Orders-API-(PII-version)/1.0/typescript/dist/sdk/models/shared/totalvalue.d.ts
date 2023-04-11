import { SpeakeasyBase } from "../../../internal/utils";
import { Facets } from "./facets";
export declare class TotalValue extends SpeakeasyBase {
    /**
     * Value count.
     */
    count: number;
    facets: Facets;
    /**
     * Value maximum.
     */
    max: number;
    /**
     * Value mean.
     */
    mean: number;
    /**
     * Value minimum.
     */
    min: number;
    /**
     * Missing values.
     */
    missing: number;
    /**
     * Values standard deviation.
     */
    stdDev: number;
    /**
     * Values sum.
     */
    sum: number;
    /**
     * Values sum of squares
     */
    sumOfSquares: number;
}
