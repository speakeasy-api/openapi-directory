package shared

type PutPublicEmailTemplateRequestCcEmailTypeEnum string

const (
	PUTPublicEmailTemplateRequestCcEmailTypeEnumBillToContact                       PutPublicEmailTemplateRequestCcEmailTypeEnum = "BillToContact"
	PUTPublicEmailTemplateRequestCcEmailTypeEnumSoldToContact                       PutPublicEmailTemplateRequestCcEmailTypeEnum = "SoldToContact"
	PUTPublicEmailTemplateRequestCcEmailTypeEnumSpecificEmails                      PutPublicEmailTemplateRequestCcEmailTypeEnum = "SpecificEmails"
	PUTPublicEmailTemplateRequestCcEmailTypeEnumTenantAdmin                         PutPublicEmailTemplateRequestCcEmailTypeEnum = "TenantAdmin"
	PUTPublicEmailTemplateRequestCcEmailTypeEnumBillToAndSoldToContacts             PutPublicEmailTemplateRequestCcEmailTypeEnum = "BillToAndSoldToContacts"
	PUTPublicEmailTemplateRequestCcEmailTypeEnumRunOwner                            PutPublicEmailTemplateRequestCcEmailTypeEnum = "RunOwner"
	PUTPublicEmailTemplateRequestCcEmailTypeEnumAllContacts                         PutPublicEmailTemplateRequestCcEmailTypeEnum = "AllContacts"
	PUTPublicEmailTemplateRequestCcEmailTypeEnumInvoiceOwnerBillToContact           PutPublicEmailTemplateRequestCcEmailTypeEnum = "InvoiceOwnerBillToContact"
	PUTPublicEmailTemplateRequestCcEmailTypeEnumInvoiceOwnerSoldToContact           PutPublicEmailTemplateRequestCcEmailTypeEnum = "InvoiceOwnerSoldToContact"
	PUTPublicEmailTemplateRequestCcEmailTypeEnumInvoiceOwnerBillToAndSoldToContacts PutPublicEmailTemplateRequestCcEmailTypeEnum = "InvoiceOwnerBillToAndSoldToContacts"
	PUTPublicEmailTemplateRequestCcEmailTypeEnumInvoiceOwnerAllContacts             PutPublicEmailTemplateRequestCcEmailTypeEnum = "InvoiceOwnerAllContacts"
)

type PutPublicEmailTemplateRequestEncodingTypeEnum string

const (
	PUTPublicEmailTemplateRequestEncodingTypeEnumUTF8      PutPublicEmailTemplateRequestEncodingTypeEnum = "UTF8"
	PUTPublicEmailTemplateRequestEncodingTypeEnumShiftJis  PutPublicEmailTemplateRequestEncodingTypeEnum = "Shift_JIS"
	PUTPublicEmailTemplateRequestEncodingTypeEnumIso2022Jp PutPublicEmailTemplateRequestEncodingTypeEnum = "ISO_2022_JP"
	PUTPublicEmailTemplateRequestEncodingTypeEnumEucJp     PutPublicEmailTemplateRequestEncodingTypeEnum = "EUC_JP"
	PUTPublicEmailTemplateRequestEncodingTypeEnumXSjis0213 PutPublicEmailTemplateRequestEncodingTypeEnum = "X_SJIS_0213"
)

type PutPublicEmailTemplateRequestFromEmailTypeEnum string

const (
	PUTPublicEmailTemplateRequestFromEmailTypeEnumTenantEmail   PutPublicEmailTemplateRequestFromEmailTypeEnum = "TenantEmail"
	PUTPublicEmailTemplateRequestFromEmailTypeEnumSpecificEmail PutPublicEmailTemplateRequestFromEmailTypeEnum = "SpecificEmail"
)

type PutPublicEmailTemplateRequestReplyToEmailTypeEnum string

const (
	PUTPublicEmailTemplateRequestReplyToEmailTypeEnumTenantEmail   PutPublicEmailTemplateRequestReplyToEmailTypeEnum = "TenantEmail"
	PUTPublicEmailTemplateRequestReplyToEmailTypeEnumSpecificEmail PutPublicEmailTemplateRequestReplyToEmailTypeEnum = "SpecificEmail"
)

type PutPublicEmailTemplateRequestToEmailTypeEnum string

const (
	PUTPublicEmailTemplateRequestToEmailTypeEnumBillToContact                       PutPublicEmailTemplateRequestToEmailTypeEnum = "BillToContact"
	PUTPublicEmailTemplateRequestToEmailTypeEnumSoldToContact                       PutPublicEmailTemplateRequestToEmailTypeEnum = "SoldToContact"
	PUTPublicEmailTemplateRequestToEmailTypeEnumSpecificEmails                      PutPublicEmailTemplateRequestToEmailTypeEnum = "SpecificEmails"
	PUTPublicEmailTemplateRequestToEmailTypeEnumTenantAdmin                         PutPublicEmailTemplateRequestToEmailTypeEnum = "TenantAdmin"
	PUTPublicEmailTemplateRequestToEmailTypeEnumBillToAndSoldToContacts             PutPublicEmailTemplateRequestToEmailTypeEnum = "BillToAndSoldToContacts"
	PUTPublicEmailTemplateRequestToEmailTypeEnumRunOwner                            PutPublicEmailTemplateRequestToEmailTypeEnum = "RunOwner"
	PUTPublicEmailTemplateRequestToEmailTypeEnumAllContacts                         PutPublicEmailTemplateRequestToEmailTypeEnum = "AllContacts"
	PUTPublicEmailTemplateRequestToEmailTypeEnumInvoiceOwnerBillToContact           PutPublicEmailTemplateRequestToEmailTypeEnum = "InvoiceOwnerBillToContact"
	PUTPublicEmailTemplateRequestToEmailTypeEnumInvoiceOwnerSoldToContact           PutPublicEmailTemplateRequestToEmailTypeEnum = "InvoiceOwnerSoldToContact"
	PUTPublicEmailTemplateRequestToEmailTypeEnumInvoiceOwnerBillToAndSoldToContacts PutPublicEmailTemplateRequestToEmailTypeEnum = "InvoiceOwnerBillToAndSoldToContacts"
	PUTPublicEmailTemplateRequestToEmailTypeEnumInvoiceOwnerAllContacts             PutPublicEmailTemplateRequestToEmailTypeEnum = "InvoiceOwnerAllContacts"
)

type PutPublicEmailTemplateRequest struct {
	Active              *bool                                              `json:"active,omitempty"`
	BccEmailAddress     *string                                            `json:"bccEmailAddress,omitempty"`
	CcEmailAddress      *string                                            `json:"ccEmailAddress,omitempty"`
	CcEmailType         *PutPublicEmailTemplateRequestCcEmailTypeEnum      `json:"ccEmailType,omitempty"`
	Description         *string                                            `json:"description,omitempty"`
	EmailBody           *string                                            `json:"emailBody,omitempty"`
	EmailSubject        *string                                            `json:"emailSubject,omitempty"`
	EncodingType        *PutPublicEmailTemplateRequestEncodingTypeEnum     `json:"encodingType,omitempty"`
	FromEmailAddress    *string                                            `json:"fromEmailAddress,omitempty"`
	FromEmailType       *PutPublicEmailTemplateRequestFromEmailTypeEnum    `json:"fromEmailType,omitempty"`
	FromName            *string                                            `json:"fromName,omitempty"`
	IsHTML              *bool                                              `json:"isHtml,omitempty"`
	Name                *string                                            `json:"name,omitempty"`
	ReplyToEmailAddress *string                                            `json:"replyToEmailAddress,omitempty"`
	ReplyToEmailType    *PutPublicEmailTemplateRequestReplyToEmailTypeEnum `json:"replyToEmailType,omitempty"`
	ToEmailAddress      *string                                            `json:"toEmailAddress,omitempty"`
	ToEmailType         *PutPublicEmailTemplateRequestToEmailTypeEnum      `json:"toEmailType,omitempty"`
}
