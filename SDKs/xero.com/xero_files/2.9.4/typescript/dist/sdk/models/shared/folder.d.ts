import { SpeakeasyBase } from "../../../internal/utils";
/**
 * search results matching criteria
 */
export declare class Folder extends SpeakeasyBase {
    /**
     * The email address used to email files to the inbox. Only the inbox will have this element.
     */
    email?: string;
    /**
     * The number of files in the folder
     */
    fileCount?: number;
    /**
     * Xero unique identifier for a folder  Files
     */
    id?: string;
    /**
     * to indicate if the folder is the Inbox. The Inbox cannot be renamed or deleted.
     */
    isInbox?: boolean;
    /**
     * The name of the folder
     */
    name?: string;
}
