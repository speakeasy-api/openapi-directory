import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPodcastEpisodesRequest extends SpeakeasyBase {
    limit?: string;
    offset?: string;
    podcastKey: string;
}
export declare class GetPodcastEpisodesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
