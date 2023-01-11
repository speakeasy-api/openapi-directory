import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PutPublicEmailTemplateRequestCcEmailTypeEnum {
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
export declare enum PutPublicEmailTemplateRequestEncodingTypeEnum {
    Utf8 = "UTF8",
    ShiftJis = "Shift_JIS",
    Iso2022Jp = "ISO_2022_JP",
    EucJp = "EUC_JP",
    XSjis0213 = "X_SJIS_0213"
}
export declare enum PutPublicEmailTemplateRequestFromEmailTypeEnum {
    TenantEmail = "TenantEmail",
    SpecificEmail = "SpecificEmail"
}
export declare enum PutPublicEmailTemplateRequestReplyToEmailTypeEnum {
    TenantEmail = "TenantEmail",
    SpecificEmail = "SpecificEmail"
}
export declare enum PutPublicEmailTemplateRequestToEmailTypeEnum {
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
export declare class PutPublicEmailTemplateRequest extends SpeakeasyBase {
    active?: boolean;
    bccEmailAddress?: string;
    ccEmailAddress?: string;
    ccEmailType?: PutPublicEmailTemplateRequestCcEmailTypeEnum;
    description?: string;
    emailBody?: string;
    emailSubject?: string;
    encodingType?: PutPublicEmailTemplateRequestEncodingTypeEnum;
    fromEmailAddress?: string;
    fromEmailType?: PutPublicEmailTemplateRequestFromEmailTypeEnum;
    fromName?: string;
    isHtml?: boolean;
    name?: string;
    replyToEmailAddress?: string;
    replyToEmailType?: PutPublicEmailTemplateRequestReplyToEmailTypeEnum;
    toEmailAddress?: string;
    toEmailType?: PutPublicEmailTemplateRequestToEmailTypeEnum;
}
