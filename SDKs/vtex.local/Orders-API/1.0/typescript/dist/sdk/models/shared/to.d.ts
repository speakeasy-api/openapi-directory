import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Conversation receiver.
 */
export declare class To extends SpeakeasyBase {
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
     * Receiver's email.
     */
    email: string;
    /**
     * Sender transactional tracker email.
     */
    emailAlias: string;
    /**
     * Receiver's name.
     */
    name: string;
    /**
     * If it is a customer or null, for transactional emails.
     */
    role: string;
}
