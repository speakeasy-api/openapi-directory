import { SpeakeasyBase } from "../../../internal/utils";
import { StationFilters } from "./stationfilters";
/**
 * Station search params
 */
export declare class StationSearchParams extends SpeakeasyBase {
    /**
     * Filters for station search
     */
    filters?: StationFilters;
    hitsPerPage?: number;
    page?: number;
    query?: string;
}
