import { SpeakeasyBase } from "../../../internal/utils";
import { PodcastFilters } from "./podcastfilters";
/**
 * Podcast search params
 */
export declare class PodcastSearchParams extends SpeakeasyBase {
    /**
     * Filters for podcast search
     */
    filters?: PodcastFilters;
    hitsPerPage?: number;
    page?: number;
    query?: string;
}
