import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreatePodcastEpisodeRequestBodyFileLogo extends SpeakeasyBase {
    content: Uint8Array;
    fileLogo: string;
}
export declare class CreatePodcastEpisodeRequestBodyFileMedia extends SpeakeasyBase {
    content: Uint8Array;
    fileMedia: string;
}
export declare class CreatePodcastEpisodeRequestBody extends SpeakeasyBase {
    /**
     * PodcastEpisode model
     */
    episode: shared.PodcastEpisode;
    fileLogo: CreatePodcastEpisodeRequestBodyFileLogo;
    fileMedia: CreatePodcastEpisodeRequestBodyFileMedia;
}
export declare class CreatePodcastEpisodeRequest extends SpeakeasyBase {
    requestBody?: CreatePodcastEpisodeRequestBody;
    podcastKey: string;
}
export declare class CreatePodcastEpisodeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
