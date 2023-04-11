import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdatePodcastEpisodeRequestBodyFileLogo extends SpeakeasyBase {
    content: Uint8Array;
    fileLogo: string;
}
export declare class UpdatePodcastEpisodeRequestBody extends SpeakeasyBase {
    /**
     * PodcastEpisode model
     */
    episode: shared.PodcastEpisode;
    fileLogo?: UpdatePodcastEpisodeRequestBodyFileLogo;
}
export declare class UpdatePodcastEpisodeRequest extends SpeakeasyBase {
    requestBody?: UpdatePodcastEpisodeRequestBody;
    episodeKey: string;
    podcastKey: string;
}
export declare class UpdatePodcastEpisodeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
