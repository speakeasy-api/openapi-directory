import { SpeakeasyBase } from "../../../internal/utils";
import { Did } from "./did";
export declare class UserExtension extends SpeakeasyBase {
    /**
     * Collection of phone numbers assigned to the extension
     */
    dids?: Did[];
    /**
     * Extension number
     */
    extensionNumber?: string;
}
