import { SpeakeasyBase } from "../../../internal/utils";
import { Facets } from "./facets";
export declare class TotalValue extends SpeakeasyBase {
    count: number;
    facets: Facets;
    max: number;
    mean: number;
    min: number;
    missing: number;
    stdDev: number;
    sum: number;
    sumOfSquares: number;
}
