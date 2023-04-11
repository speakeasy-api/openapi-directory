import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddVideoCreditAlt1RequestBody extends SpeakeasyBase {
    /**
     * The email address of the credited person.
     */
    email: string;
    /**
     * The name of the credited person.
     */
    name: string;
    /**
     * The role of the credited person.
     */
    role: string;
    /**
     * The URI of the Vimeo user who should be given credit in this video.
     */
    userUri: string;
}
export declare class AddVideoCreditAlt1Request extends SpeakeasyBase {
    requestBody: AddVideoCreditAlt1RequestBody;
    /**
     * The ID of the channel.
     */
    channelId: number;
    /**
     * The ID of the video.
     */
    videoId: number;
}
export declare class AddVideoCreditAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The credit was added.
     */
    credit?: shared.Credit;
    /**
     * * The credit was added.
     *
     * @remarks
     * * A parameter is invalid.
     * * The authenticated user has an unverified email address.
     * * There is a user block between the video owner and the person receiving credit.
     */
    legacyError?: shared.LegacyError;
}
