import { SpeakeasyBase } from "../../../internal/utils";
import { Podcast } from "./podcast";
/**
 * Podcast search results
 */
export declare class PodcastSearchResults extends SpeakeasyBase {
    hits?: Podcast[];
    total?: number;
}
