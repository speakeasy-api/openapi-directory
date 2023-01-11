import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostPublicEmailTemplateRequestCcEmailTypeEnum {
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
export declare enum PostPublicEmailTemplateRequestEncodingTypeEnum {
    Utf8 = "UTF8",
    ShiftJis = "Shift_JIS",
    Iso2022Jp = "ISO_2022_JP",
    EucJp = "EUC_JP",
    XSjis0213 = "X_SJIS_0213"
}
export declare enum PostPublicEmailTemplateRequestFromEmailTypeEnum {
    TenantEmail = "TenantEmail",
    SpecificEmail = "SpecificEmail"
}
export declare enum PostPublicEmailTemplateRequestReplyToEmailTypeEnum {
    TenantEmail = "TenantEmail",
    SpecificEmail = "SpecificEmail"
}
export declare enum PostPublicEmailTemplateRequestToEmailTypeEnum {
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
export declare class PostPublicEmailTemplateRequest extends SpeakeasyBase {
    active?: boolean;
    bccEmailAddress?: string;
    ccEmailAddress?: string;
    ccEmailType?: PostPublicEmailTemplateRequestCcEmailTypeEnum;
    description?: string;
    emailBody: string;
    emailSubject: string;
    encodingType?: PostPublicEmailTemplateRequestEncodingTypeEnum;
    eventTypeName: string;
    eventTypeNamespace?: string;
    fromEmailAddress?: string;
    fromEmailType: PostPublicEmailTemplateRequestFromEmailTypeEnum;
    fromName?: string;
    isHtml?: boolean;
    name: string;
    replyToEmailAddress?: string;
    replyToEmailType?: PostPublicEmailTemplateRequestReplyToEmailTypeEnum;
    toEmailAddress?: string;
    toEmailType: PostPublicEmailTemplateRequestToEmailTypeEnum;
}
