import { SpeakeasyBase } from "../../../internal/utils";
import { Station } from "./station";
/**
 * Station search results
 */
export declare class StationSearchResults extends SpeakeasyBase {
    hits?: Station[];
    total?: number;
}
