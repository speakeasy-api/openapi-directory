import { SpeakeasyBase } from "../../../internal/utils";
import { From } from "./from";
import { To } from "./to";
export declare class GetConversation extends SpeakeasyBase {
    /**
     * List with attachments' names, if there are any.
     */
    attachmentNames: string[];
    /**
     * Conversation content body.
     */
    body: string;
    /**
     * Conversation date.
     */
    date: string;
    /**
     * First words of Conversation content.
     */
    firstWords: string;
    /**
     * Conversation sender.
     */
    from: From;
    /**
     * When set as `true`, it means there are attachments, when set as `false`, there are not.
     */
    hasAttachment: boolean;
    /**
     * Conversation ID.
     */
    id: string;
    /**
     * Conversation content subject.
     */
    subject: string;
    /**
     * Conversation receiver.
     */
    to: To[];
}
