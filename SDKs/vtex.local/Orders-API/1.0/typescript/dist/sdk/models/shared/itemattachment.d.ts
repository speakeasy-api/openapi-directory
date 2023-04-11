import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about attachments, if it applies.
 */
export declare class ItemAttachment extends SpeakeasyBase {
    /**
     * Attachment's custom field for content.
     */
    content: Record<string, any>;
    /**
     * Attachment's name.
     */
    name: string;
}
