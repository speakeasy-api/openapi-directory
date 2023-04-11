import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
import { Video } from "./video";
/**
 * The upload attempt was returned.
 */
export declare class UploadAttempt extends SpeakeasyBase {
    /**
     * The video to upload.
     */
    clip?: Video;
    /**
     * The completion URI of the upload.
     */
    completeUri?: string;
    /**
     * The HTML upload form.
     */
    form?: string;
    /**
     * The ticket identifier string for the upload.
     */
    ticketId: string;
    /**
     * The upload URL.
     */
    uploadLink: string;
    /**
     * The upload URI.
     */
    uri: string;
    /**
     * The owner of the uploaded video.
     */
    user: User;
}
