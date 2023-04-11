import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPodcastEpisodeRequest extends SpeakeasyBase {
    episodeKey: string;
    podcastKey: string;
}
export declare class GetPodcastEpisodeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
