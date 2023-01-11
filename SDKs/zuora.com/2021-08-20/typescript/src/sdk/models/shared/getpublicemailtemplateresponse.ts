import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetPublicEmailTemplateResponseCcEmailTypeEnum {
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

export enum GetPublicEmailTemplateResponseEncodingTypeEnum {
    Utf8 = "UTF8",
    ShiftJis = "Shift_JIS",
    Iso2022Jp = "ISO_2022_JP",
    EucJp = "EUC_JP",
    XSjis0213 = "X_SJIS_0213"
}

export enum GetPublicEmailTemplateResponseFromEmailTypeEnum {
    TenantEmail = "TenantEmail",
    SpecificEmail = "SpecificEmail"
}

export enum GetPublicEmailTemplateResponseReplyToEmailTypeEnum {
    TenantEmail = "TenantEmail",
    SpecificEmail = "SpecificEmail"
}

export enum GetPublicEmailTemplateResponseToEmailTypeEnum {
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


export class GetPublicEmailTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bccEmailAddress" })
  bccEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=ccEmailAddress" })
  ccEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=ccEmailType" })
  ccEmailType?: GetPublicEmailTemplateResponseCcEmailTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=createdOn" })
  createdOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=emailBody" })
  emailBody?: string;

  @SpeakeasyMetadata({ data: "json, name=emailSubject" })
  emailSubject?: string;

  @SpeakeasyMetadata({ data: "json, name=encodingType" })
  encodingType?: GetPublicEmailTemplateResponseEncodingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=eventTypeName" })
  eventTypeName?: string;

  @SpeakeasyMetadata({ data: "json, name=eventTypeNamespace" })
  eventTypeNamespace?: string;

  @SpeakeasyMetadata({ data: "json, name=fromEmailAddress" })
  fromEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=fromEmailType" })
  fromEmailType?: GetPublicEmailTemplateResponseFromEmailTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=fromName" })
  fromName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isHtml" })
  isHtml?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=replyToEmailAddress" })
  replyToEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=replyToEmailType" })
  replyToEmailType?: GetPublicEmailTemplateResponseReplyToEmailTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=toEmailAddress" })
  toEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=toEmailType" })
  toEmailType?: GetPublicEmailTemplateResponseToEmailTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updatedBy" })
  updatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedOn" })
  updatedOn?: Date;
}
