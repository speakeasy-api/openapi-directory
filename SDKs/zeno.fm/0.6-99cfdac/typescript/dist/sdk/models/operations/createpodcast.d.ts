import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreatePodcastRequestBodyFileLogo extends SpeakeasyBase {
    content: Uint8Array;
    fileLogo: string;
}
export declare class CreatePodcastRequestBody extends SpeakeasyBase {
    fileLogo: CreatePodcastRequestBodyFileLogo;
    /**
     * Podcast model
     */
    podcast: shared.Podcast;
}
export declare class CreatePodcastResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
