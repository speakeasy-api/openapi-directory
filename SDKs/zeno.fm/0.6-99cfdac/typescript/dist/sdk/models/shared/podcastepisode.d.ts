import { SpeakeasyBase } from "../../../internal/utils";
/**
 * PodcastEpisode model
 */
export declare class PodcastEpisode extends SpeakeasyBase {
    author?: string;
    block?: boolean;
    description: string;
    duration?: number;
    episode?: number;
    episodeType?: string;
    explicit?: boolean;
    fileUrl?: string;
    image?: string;
    key?: string;
    link?: string;
    publishDate: Date;
    season?: number;
    size?: number;
    subtitle?: string;
    summary: string;
    tags?: string[];
    title: string;
}
