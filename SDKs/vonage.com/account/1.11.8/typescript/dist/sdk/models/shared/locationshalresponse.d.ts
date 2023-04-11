import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { LocationsEmbeddedObject } from "./locationsembeddedobject";
/**
 * Success
 */
export declare class LocationsHalResponse extends SpeakeasyBase {
    /**
     * Collection of location objects
     */
    embedded?: LocationsEmbeddedObject;
    links?: Links;
    page?: number;
    pageSize?: number;
    totalItems?: number;
    totalPages?: number;
}
