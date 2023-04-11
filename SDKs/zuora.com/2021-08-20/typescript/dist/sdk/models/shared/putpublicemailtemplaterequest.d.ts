import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Email cc type.
 *
 * @remarks
 * * When EventType is CDC/External and 'ReferenceObjectType' in EventType is associated to Account, ccEmailType can be ALL values in enum.
 * * When EventType is CDC/External and 'ReferenceObjectType' in EventType is not associated to Account, ccEmailType MUST be TenantAdmin, RunOwner or SpecificEmail.
 * * When EventType is CDC/External and 'ReferenceObjectType' in EventType is EMPTY, ccEmailType MUST be TenantAdmin, RunOwner or SpecificEmail.
 */
export declare enum PUTPublicEmailTemplateRequestCcEmailTypeEnum {
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
export declare enum PUTPublicEmailTemplateRequestEncodingTypeEnum {
    Utf8 = "UTF8",
    ShiftJIS = "Shift_JIS",
    Iso2022Jp = "ISO_2022_JP",
    EucJp = "EUC_JP",
    XSjis0213 = "X_SJIS_0213"
}
/**
 * The type of fromEmail.
 */
export declare enum PUTPublicEmailTemplateRequestFromEmailTypeEnum {
    TenantEmail = "TenantEmail",
    SpecificEmail = "SpecificEmail"
}
/**
 * The type of the reply email.
 */
export declare enum PUTPublicEmailTemplateRequestReplyToEmailTypeEnum {
    TenantEmail = "TenantEmail",
    SpecificEmail = "SpecificEmail"
}
/**
 * Email receive type.
 *
 * @remarks
 * * When EventType is CDC/External and 'ReferenceObjectType' in EventType is associated to Account, toEmailType can be ALL values in enum.
 * * When EventType is CDC/External and 'ReferenceObjectType' in EventType is not associated to Account, toEmailType MUST be TenantAdmin, RunOwner or SpecificEmail.
 * * When EventType is CDC/External and 'ReferenceObjectType' in EventType is EMPTY, toEmailType MUST be TenantAdmin, RunOwner or SpecificEmail.
 */
export declare enum PUTPublicEmailTemplateRequestToEmailTypeEnum {
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
 * The request body to update an email template.
 */
export declare class PUTPublicEmailTemplateRequest extends SpeakeasyBase {
    /**
     * The status of the email template.
     */
    active?: boolean;
    /**
     * Email bcc address.
     */
    bccEmailAddress?: string;
    /**
     * Email cc address.
     */
    ccEmailAddress?: string;
    /**
     * Email cc type.
     *
     * @remarks
     * * When EventType is CDC/External and 'ReferenceObjectType' in EventType is associated to Account, ccEmailType can be ALL values in enum.
     * * When EventType is CDC/External and 'ReferenceObjectType' in EventType is not associated to Account, ccEmailType MUST be TenantAdmin, RunOwner or SpecificEmail.
     * * When EventType is CDC/External and 'ReferenceObjectType' in EventType is EMPTY, ccEmailType MUST be TenantAdmin, RunOwner or SpecificEmail.
     */
    ccEmailType?: PUTPublicEmailTemplateRequestCcEmailTypeEnum;
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
    encodingType?: PUTPublicEmailTemplateRequestEncodingTypeEnum;
    /**
     * If fromEmailType is SpecificEmail, this field is required
     */
    fromEmailAddress?: string;
    /**
     * The type of fromEmail.
     */
    fromEmailType?: PUTPublicEmailTemplateRequestFromEmailTypeEnum;
    /**
     * The name of email sender.
     */
    fromName?: string;
    /**
     * Specifies whether the style of email body is HTML.
     */
    isHtml?: boolean;
    /**
     * The name of the email template.
     */
    name?: string;
    /**
     * If replyToEmailType is SpecificEmail, this field is required.
     */
    replyToEmailAddress?: string;
    /**
     * The type of the reply email.
     */
    replyToEmailType?: PUTPublicEmailTemplateRequestReplyToEmailTypeEnum;
    /**
     * If toEmailType is SpecificEmail, this field is required.
     */
    toEmailAddress?: string;
    /**
     * Email receive type.
     *
     * @remarks
     * * When EventType is CDC/External and 'ReferenceObjectType' in EventType is associated to Account, toEmailType can be ALL values in enum.
     * * When EventType is CDC/External and 'ReferenceObjectType' in EventType is not associated to Account, toEmailType MUST be TenantAdmin, RunOwner or SpecificEmail.
     * * When EventType is CDC/External and 'ReferenceObjectType' in EventType is EMPTY, toEmailType MUST be TenantAdmin, RunOwner or SpecificEmail.
     */
    toEmailType?: PUTPublicEmailTemplateRequestToEmailTypeEnum;
}
