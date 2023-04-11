import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletePodcast1Request extends SpeakeasyBase {
    episodeKey: string;
    podcastKey: string;
}
export declare class DeletePodcast1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
