import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdatePodcastRequestBodyFileLogo extends SpeakeasyBase {
    content: Uint8Array;
    fileLogo: string;
}
export declare class UpdatePodcastRequestBody extends SpeakeasyBase {
    fileLogo?: UpdatePodcastRequestBodyFileLogo;
    /**
     * Podcast model
     */
    podcast: shared.Podcast;
}
export declare class UpdatePodcastRequest extends SpeakeasyBase {
    requestBody?: UpdatePodcastRequestBody;
    podcastKey: string;
}
export declare class UpdatePodcastResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
