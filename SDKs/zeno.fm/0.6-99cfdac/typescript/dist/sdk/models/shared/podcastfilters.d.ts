import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PodcastFiltersPodcastTypeEnum {
    Podcasts = "podcasts",
    Shows = "shows"
}
/**
 * Filters for podcast search
 */
export declare class PodcastFilters extends SpeakeasyBase {
    category?: string[];
    country?: string[];
    language?: string[];
    podcastType?: PodcastFiltersPodcastTypeEnum;
}
