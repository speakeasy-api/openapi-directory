import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetPublicEmailTemplateResponseCcEmailTypeEnum {
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
export declare enum GetPublicEmailTemplateResponseEncodingTypeEnum {
    Utf8 = "UTF8",
    ShiftJis = "Shift_JIS",
    Iso2022Jp = "ISO_2022_JP",
    EucJp = "EUC_JP",
    XSjis0213 = "X_SJIS_0213"
}
export declare enum GetPublicEmailTemplateResponseFromEmailTypeEnum {
    TenantEmail = "TenantEmail",
    SpecificEmail = "SpecificEmail"
}
export declare enum GetPublicEmailTemplateResponseReplyToEmailTypeEnum {
    TenantEmail = "TenantEmail",
    SpecificEmail = "SpecificEmail"
}
export declare enum GetPublicEmailTemplateResponseToEmailTypeEnum {
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
export declare class GetPublicEmailTemplateResponse extends SpeakeasyBase {
    active?: boolean;
    bccEmailAddress?: string;
    ccEmailAddress?: string;
    ccEmailType?: GetPublicEmailTemplateResponseCcEmailTypeEnum;
    createdBy?: string;
    createdOn?: Date;
    description?: string;
    emailBody?: string;
    emailSubject?: string;
    encodingType?: GetPublicEmailTemplateResponseEncodingTypeEnum;
    eventTypeName?: string;
    eventTypeNamespace?: string;
    fromEmailAddress?: string;
    fromEmailType?: GetPublicEmailTemplateResponseFromEmailTypeEnum;
    fromName?: string;
    id?: string;
    isHtml?: boolean;
    name?: string;
    replyToEmailAddress?: string;
    replyToEmailType?: GetPublicEmailTemplateResponseReplyToEmailTypeEnum;
    toEmailAddress?: string;
    toEmailType?: GetPublicEmailTemplateResponseToEmailTypeEnum;
    updatedBy?: string;
    updatedOn?: Date;
}
