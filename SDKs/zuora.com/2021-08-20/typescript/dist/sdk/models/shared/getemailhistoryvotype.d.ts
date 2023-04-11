import { SpeakeasyBase } from "../../../internal/utils";
export declare class GETEmailHistoryVOType extends SpeakeasyBase {
    /**
     * Blind carbon copy recipients of the email.
     *
     * @remarks
     *
     */
    bcc?: string;
    /**
     * Carbon Copy recipients of the email.
     *
     * @remarks
     *
     */
    cc?: string;
    /**
     * null if the content of result is "OK". A description of the error if the content of result is not "OK".
     *
     * @remarks
     *
     */
    errorMessage?: string;
    /**
     * The event category of the email.
     *
     * @remarks
     *
     */
    eventCategory?: string;
    /**
     * The sender of the email.
     *
     * @remarks
     *
     */
    fromEmail?: string;
    /**
     * The name of the notification.
     *
     * @remarks
     *
     */
    notification?: string;
    /**
     * The reply-to address as configured in the email template.
     *
     * @remarks
     *
     */
    replyTo?: string;
    /**
     * The result from the mail server of sending the email.
     *
     * @remarks
     *
     */
    result?: string;
    /**
     * The date and time the email was sent.
     *
     * @remarks
     *
     */
    sendTime?: string;
    /**
     * The subject of the email.
     *
     * @remarks
     *
     */
    subject?: string;
    /**
     * The intended recipient of the email.
     *
     * @remarks
     *
     */
    toEmail?: string;
}
