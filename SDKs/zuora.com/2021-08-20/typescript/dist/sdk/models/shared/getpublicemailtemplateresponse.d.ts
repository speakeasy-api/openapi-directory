import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Email cc type.
 */
export declare enum GETPublicEmailTemplateResponseCcEmailTypeEnum {
    BillToContact = "BillToContact",
    SoldToContact = "SoldToContact",
    SpecificEmails = "SpecificEmails",
    TenantAdmin = "TenantAdmin",
    BillToAndSoldToContacts = "BillToAndSoldToContacts",
    RunOwner = "RunOwner",
    AllContacts = "AllContacts",
    InvoiceOwnerBillToContact = "InvoiceOwnerBillToContact",
    InvoiceOwnerSoldToContact = "InvoiceOwnerSoldToContact",
    InvoiceOwnerBillToAndSoldToContacts = "InvoiceOwnerBillToAndSoldToContacts",
    InvoiceOwnerAllContacts = "InvoiceOwnerAllContacts"
}
/**
 * The endcode type of the email body.
 */
export declare enum GETPublicEmailTemplateResponseEncodingTypeEnum {
    Utf8 = "UTF8",
    ShiftJIS = "Shift_JIS",
    Iso2022Jp = "ISO_2022_JP",
    EucJp = "EUC_JP",
    XSjis0213 = "X_SJIS_0213"
}
/**
 * The from email type.
 */
export declare enum GETPublicEmailTemplateResponseFromEmailTypeEnum {
    TenantEmail = "TenantEmail",
    SpecificEmail = "SpecificEmail"
}
/**
 * The reply email type.
 */
export declare enum GETPublicEmailTemplateResponseReplyToEmailTypeEnum {
    TenantEmail = "TenantEmail",
    SpecificEmail = "SpecificEmail"
}
/**
 * Email receive type.
 */
export declare enum GETPublicEmailTemplateResponseToEmailTypeEnum {
    BillToContact = "BillToContact",
    SoldToContact = "SoldToContact",
    SpecificEmails = "SpecificEmails",
    TenantAdmin = "TenantAdmin",
    BillToAndSoldToContacts = "BillToAndSoldToContacts",
    RunOwner = "RunOwner",
    AllContacts = "AllContacts",
    InvoiceOwnerBillToContact = "InvoiceOwnerBillToContact",
    InvoiceOwnerSoldToContact = "InvoiceOwnerSoldToContact",
    InvoiceOwnerBillToAndSoldToContacts = "InvoiceOwnerBillToAndSoldToContacts",
    InvoiceOwnerAllContacts = "InvoiceOwnerAllContacts"
}
/**
 * OK
 */
export declare class GETPublicEmailTemplateResponse extends SpeakeasyBase {
    /**
     * The status of the email template.
     */
    active?: boolean;
    /**
     * Email BCC address.
     */
    bccEmailAddress?: string;
    /**
     * Email CC address.
     */
    ccEmailAddress?: string;
    /**
     * Email cc type.
     */
    ccEmailType?: GETPublicEmailTemplateResponseCcEmailTypeEnum;
    /**
     * The ID of the user who created the notification definition.
     */
    createdBy?: string;
    /**
     * The time when the notification definition was created. Specified in the UTC timezone in the ISO860 format (YYYY-MM-DDThh:mm:ss.sTZD). E.g. 1997-07-16T19:20:30.45+00:00
     */
    createdOn?: Date;
    /**
     * The description of the email template.
     */
    description?: string;
    /**
     * The email body. You can add merge fields in the email object using angle brackets.
     *
     * @remarks
     * User can also embed html tags if 'isHtml' is true.
     */
    emailBody?: string;
    /**
     * The email subject. You can add merge fields in the email subject using angle brackets.
     */
    emailSubject?: string;
    /**
     * The endcode type of the email body.
     */
    encodingType?: GETPublicEmailTemplateResponseEncodingTypeEnum;
    /**
     * The name of the event type.
     */
    eventTypeName?: string;
    /**
     * The namespace of the `eventTypeName` field.
     *
     * @remarks
     *
     */
    eventTypeNamespace?: string;
    /**
     * If formEmailType is SpecificEmail, this field is required.
     */
    fromEmailAddress?: string;
    /**
     * The from email type.
     */
    fromEmailType?: GETPublicEmailTemplateResponseFromEmailTypeEnum;
    /**
     * The name of email sender.
     */
    fromName?: string;
    /**
     * The filter rule associated with this notification definition.
     */
    id?: string;
    /**
     * Specified whether the style of email body is HTML.
     */
    isHtml?: boolean;
    /**
     * The name of the email template.
     */
    name?: string;
    /**
     * If replyToEmailType is SpecificEmail, this field is required
     */
    replyToEmailAddress?: string;
    /**
     * The reply email type.
     */
    replyToEmailType?: GETPublicEmailTemplateResponseReplyToEmailTypeEnum;
    /**
     * If toEmailType is SpecificEmail, this field is required.
     */
    toEmailAddress?: string;
    /**
     * Email receive type.
     */
    toEmailType?: GETPublicEmailTemplateResponseToEmailTypeEnum;
    /**
     * The ID of the user who updated the notification definition.
     */
    updatedBy?: string;
    /**
     * The time when the notification definition was updated. Specified in the UTC timezone in the ISO860 format (YYYY-MM-DDThh:mm:ss.sTZD). E.g. 1997-07-16T19:20:30.45+00:00
     */
    updatedOn?: Date;
}
