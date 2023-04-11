import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Email CC type:
 *
 * @remarks
 * * When EventType is CDC/External and 'ReferenceObjectType' in EventType is associated to Account, ccEmailType can be ALL values in enum.
 * * When EventType is CDC/External and 'ReferenceObjectType' in EventType is not associated to Account, ccEmailType MUST be TenantAdmin, RunOwner or SpecificEmail.
 * * When EventType is CDC/External and 'ReferenceObjectType' in EventType is EMPTY, ccEmailType MUST be TenantAdmin, RunOwner or SpecificEmail.
 */
export declare enum POSTPublicEmailTemplateRequestCcEmailTypeEnum {
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
export declare enum POSTPublicEmailTemplateRequestEncodingTypeEnum {
    Utf8 = "UTF8",
    ShiftJIS = "Shift_JIS",
    Iso2022Jp = "ISO_2022_JP",
    EucJp = "EUC_JP",
    XSjis0213 = "X_SJIS_0213"
}
/**
 * The type of the email.
 */
export declare enum POSTPublicEmailTemplateRequestFromEmailTypeEnum {
    TenantEmail = "TenantEmail",
    SpecificEmail = "SpecificEmail"
}
/**
 * Type of the replyTo email.
 */
export declare enum POSTPublicEmailTemplateRequestReplyToEmailTypeEnum {
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
export declare enum POSTPublicEmailTemplateRequestToEmailTypeEnum {
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
 * The request body to create an email template.
 */
export declare class POSTPublicEmailTemplateRequest extends SpeakeasyBase {
    /**
     * The status of the email template. The default value is true.
     */
    active?: boolean;
    /**
     * The email bcc address.
     */
    bccEmailAddress?: string;
    /**
     * The email CC address.
     */
    ccEmailAddress?: string;
    /**
     * Email CC type:
     *
     * @remarks
     * * When EventType is CDC/External and 'ReferenceObjectType' in EventType is associated to Account, ccEmailType can be ALL values in enum.
     * * When EventType is CDC/External and 'ReferenceObjectType' in EventType is not associated to Account, ccEmailType MUST be TenantAdmin, RunOwner or SpecificEmail.
     * * When EventType is CDC/External and 'ReferenceObjectType' in EventType is EMPTY, ccEmailType MUST be TenantAdmin, RunOwner or SpecificEmail.
     */
    ccEmailType?: POSTPublicEmailTemplateRequestCcEmailTypeEnum;
    /**
     * The description of the email template.
     */
    description?: string;
    /**
     * The email body. You can add merge fields in the email object using angle brackets.
     *
     * @remarks
     * You can also embed HTML tags if 'isHtml' is true.
     */
    emailBody: string;
    /**
     * The email subject. Users can add merge fields in the email subject using angle brackets.
     */
    emailSubject: string;
    /**
     * The endcode type of the email body.
     */
    encodingType?: POSTPublicEmailTemplateRequestEncodingTypeEnum;
    /**
     * The name of the event type.
     *
     * @remarks
     *
     */
    eventTypeName: string;
    /**
     * The namespace of the `eventTypeName` field. The `eventTypeName` has the `user.notification` namespace by default.
     *
     * @remarks
     *
     * Note that if the `eventTypeName` is a standard event type, you must specify the `com.zuora.notification` namespace; otherwise, you will get an error.
     *
     * For example, if you want to create an email template on the `OrderActionProcessed` event, you must specify `com.zuora.notification` for this field.
     *
     */
    eventTypeNamespace?: string;
    /**
     * If fromEmailType is SpecificEmail, this field is required.
     */
    fromEmailAddress?: string;
    /**
     * The type of the email.
     */
    fromEmailType: POSTPublicEmailTemplateRequestFromEmailTypeEnum;
    /**
     * The name of the email sender.
     */
    fromName?: string;
    /**
     * Specifies whether the style of email body is HTML. The default value is false.
     */
    isHtml?: boolean;
    /**
     * The name of the email template, a unique name in a tenant.
     */
    name: string;
    /**
     * If replyToEmailType is SpecificEmail, this field is required.
     */
    replyToEmailAddress?: string;
    /**
     * Type of the replyTo email.
     */
    replyToEmailType?: POSTPublicEmailTemplateRequestReplyToEmailTypeEnum;
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
    toEmailType: POSTPublicEmailTemplateRequestToEmailTypeEnum;
}
