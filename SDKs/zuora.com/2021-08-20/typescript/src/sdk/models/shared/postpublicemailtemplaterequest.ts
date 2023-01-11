import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostPublicEmailTemplateRequestCcEmailTypeEnum {
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

export enum PostPublicEmailTemplateRequestEncodingTypeEnum {
    Utf8 = "UTF8",
    ShiftJis = "Shift_JIS",
    Iso2022Jp = "ISO_2022_JP",
    EucJp = "EUC_JP",
    XSjis0213 = "X_SJIS_0213"
}

export enum PostPublicEmailTemplateRequestFromEmailTypeEnum {
    TenantEmail = "TenantEmail",
    SpecificEmail = "SpecificEmail"
}

export enum PostPublicEmailTemplateRequestReplyToEmailTypeEnum {
    TenantEmail = "TenantEmail",
    SpecificEmail = "SpecificEmail"
}

export enum PostPublicEmailTemplateRequestToEmailTypeEnum {
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


export class PostPublicEmailTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bccEmailAddress" })
  bccEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=ccEmailAddress" })
  ccEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=ccEmailType" })
  ccEmailType?: PostPublicEmailTemplateRequestCcEmailTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=emailBody" })
  emailBody: string;

  @SpeakeasyMetadata({ data: "json, name=emailSubject" })
  emailSubject: string;

  @SpeakeasyMetadata({ data: "json, name=encodingType" })
  encodingType?: PostPublicEmailTemplateRequestEncodingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=eventTypeName" })
  eventTypeName: string;

  @SpeakeasyMetadata({ data: "json, name=eventTypeNamespace" })
  eventTypeNamespace?: string;

  @SpeakeasyMetadata({ data: "json, name=fromEmailAddress" })
  fromEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=fromEmailType" })
  fromEmailType: PostPublicEmailTemplateRequestFromEmailTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=fromName" })
  fromName?: string;

  @SpeakeasyMetadata({ data: "json, name=isHtml" })
  isHtml?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=replyToEmailAddress" })
  replyToEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=replyToEmailType" })
  replyToEmailType?: PostPublicEmailTemplateRequestReplyToEmailTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=toEmailAddress" })
  toEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=toEmailType" })
  toEmailType: PostPublicEmailTemplateRequestToEmailTypeEnum;
}
