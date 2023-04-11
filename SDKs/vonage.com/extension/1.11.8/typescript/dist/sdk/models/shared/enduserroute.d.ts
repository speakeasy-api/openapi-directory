import { SpeakeasyBase } from "../../../internal/utils";
import { BasicUser } from "./basicuser";
import { Did } from "./did";
import { Line } from "./line";
export declare class EndUserRoute extends SpeakeasyBase {
    /**
     * Block Caller ID status of the extension
     */
    blockCallerId?: boolean;
    /**
     * Caller ID of the extension
     */
    callerId?: string;
    /**
     * Collection of phone numbers assigned to the extension
     */
    dids?: Did[];
    /**
     * Do Not Disturb status of the extension
     */
    dndEnabled?: boolean;
    /**
     * Collection of handsets assigned to the extension
     */
    extensionHandsets?: Line[];
    /**
     * Extension number
     */
    extensionNumber?: string;
    /**
     * Unique identifier of the assigned location
     */
    locationId?: number;
    user?: BasicUser;
    /**
     * Voicemail transcription status of the location
     */
    vttEnabled?: boolean;
}
