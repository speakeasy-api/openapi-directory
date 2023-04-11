import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Conversation sender.
 */
export declare class From extends SpeakeasyBase {
    /**
     * Conversation tracker mask type.
     */
    aliasMaskType: number;
    /**
     * Related order ID.
     */
    conversationRelatedTo: string;
    /**
     * Conversation subject.
     */
    conversationSubject: string;
    /**
     * Sender's email.
     */
    email: string;
    /**
     * Sender transactional tracker email.
     */
    emailAlias: string;
    /**
     * Sender's name.
     */
    name: string;
    /**
     * If it is a client or null, for transactional emails.
     */
    role: string;
}
