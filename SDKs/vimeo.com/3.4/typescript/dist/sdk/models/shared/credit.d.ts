import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
import { Video } from "./video";
/**
 * The credit was added.
 */
export declare class Credit extends SpeakeasyBase {
    /**
     * The name of the person credited.
     */
    name: string;
    /**
     * The character that this person portrayed, or the job that this person performed.
     */
    role: string;
    /**
     * The unique identifier to access the credits resource.
     */
    uri: string;
    /**
     * The Vimeo user associated with this credit.
     */
    user?: User;
    /**
     * The video associated with this credit.
     */
    video?: Video;
}
