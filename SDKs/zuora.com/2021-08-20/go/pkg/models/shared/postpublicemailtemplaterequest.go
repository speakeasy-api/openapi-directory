package shared

type PostPublicEmailTemplateRequestCcEmailTypeEnum string

const (
	POSTPublicEmailTemplateRequestCcEmailTypeEnumBillToContact                       PostPublicEmailTemplateRequestCcEmailTypeEnum = "BillToContact"
	POSTPublicEmailTemplateRequestCcEmailTypeEnumSoldToContact                       PostPublicEmailTemplateRequestCcEmailTypeEnum = "SoldToContact"
	POSTPublicEmailTemplateRequestCcEmailTypeEnumSpecificEmails                      PostPublicEmailTemplateRequestCcEmailTypeEnum = "SpecificEmails"
	POSTPublicEmailTemplateRequestCcEmailTypeEnumTenantAdmin                         PostPublicEmailTemplateRequestCcEmailTypeEnum = "TenantAdmin"
	POSTPublicEmailTemplateRequestCcEmailTypeEnumBillToAndSoldToContacts             PostPublicEmailTemplateRequestCcEmailTypeEnum = "BillToAndSoldToContacts"
	POSTPublicEmailTemplateRequestCcEmailTypeEnumRunOwner                            PostPublicEmailTemplateRequestCcEmailTypeEnum = "RunOwner"
	POSTPublicEmailTemplateRequestCcEmailTypeEnumAllContacts                         PostPublicEmailTemplateRequestCcEmailTypeEnum = "AllContacts"
	POSTPublicEmailTemplateRequestCcEmailTypeEnumInvoiceOwnerBillToContact           PostPublicEmailTemplateRequestCcEmailTypeEnum = "InvoiceOwnerBillToContact"
	POSTPublicEmailTemplateRequestCcEmailTypeEnumInvoiceOwnerSoldToContact           PostPublicEmailTemplateRequestCcEmailTypeEnum = "InvoiceOwnerSoldToContact"
	POSTPublicEmailTemplateRequestCcEmailTypeEnumInvoiceOwnerBillToAndSoldToContacts PostPublicEmailTemplateRequestCcEmailTypeEnum = "InvoiceOwnerBillToAndSoldToContacts"
	POSTPublicEmailTemplateRequestCcEmailTypeEnumInvoiceOwnerAllContacts             PostPublicEmailTemplateRequestCcEmailTypeEnum = "InvoiceOwnerAllContacts"
)

type PostPublicEmailTemplateRequestEncodingTypeEnum string

const (
	POSTPublicEmailTemplateRequestEncodingTypeEnumUTF8      PostPublicEmailTemplateRequestEncodingTypeEnum = "UTF8"
	POSTPublicEmailTemplateRequestEncodingTypeEnumShiftJis  PostPublicEmailTemplateRequestEncodingTypeEnum = "Shift_JIS"
	POSTPublicEmailTemplateRequestEncodingTypeEnumIso2022Jp PostPublicEmailTemplateRequestEncodingTypeEnum = "ISO_2022_JP"
	POSTPublicEmailTemplateRequestEncodingTypeEnumEucJp     PostPublicEmailTemplateRequestEncodingTypeEnum = "EUC_JP"
	POSTPublicEmailTemplateRequestEncodingTypeEnumXSjis0213 PostPublicEmailTemplateRequestEncodingTypeEnum = "X_SJIS_0213"
)

type PostPublicEmailTemplateRequestFromEmailTypeEnum string

const (
	POSTPublicEmailTemplateRequestFromEmailTypeEnumTenantEmail   PostPublicEmailTemplateRequestFromEmailTypeEnum = "TenantEmail"
	POSTPublicEmailTemplateRequestFromEmailTypeEnumSpecificEmail PostPublicEmailTemplateRequestFromEmailTypeEnum = "SpecificEmail"
)

type PostPublicEmailTemplateRequestReplyToEmailTypeEnum string

const (
	POSTPublicEmailTemplateRequestReplyToEmailTypeEnumTenantEmail   PostPublicEmailTemplateRequestReplyToEmailTypeEnum = "TenantEmail"
	POSTPublicEmailTemplateRequestReplyToEmailTypeEnumSpecificEmail PostPublicEmailTemplateRequestReplyToEmailTypeEnum = "SpecificEmail"
)

type PostPublicEmailTemplateRequestToEmailTypeEnum string

const (
	POSTPublicEmailTemplateRequestToEmailTypeEnumBillToContact                       PostPublicEmailTemplateRequestToEmailTypeEnum = "BillToContact"
	POSTPublicEmailTemplateRequestToEmailTypeEnumSoldToContact                       PostPublicEmailTemplateRequestToEmailTypeEnum = "SoldToContact"
	POSTPublicEmailTemplateRequestToEmailTypeEnumSpecificEmails                      PostPublicEmailTemplateRequestToEmailTypeEnum = "SpecificEmails"
	POSTPublicEmailTemplateRequestToEmailTypeEnumTenantAdmin                         PostPublicEmailTemplateRequestToEmailTypeEnum = "TenantAdmin"
	POSTPublicEmailTemplateRequestToEmailTypeEnumBillToAndSoldToContacts             PostPublicEmailTemplateRequestToEmailTypeEnum = "BillToAndSoldToContacts"
	POSTPublicEmailTemplateRequestToEmailTypeEnumRunOwner                            PostPublicEmailTemplateRequestToEmailTypeEnum = "RunOwner"
	POSTPublicEmailTemplateRequestToEmailTypeEnumAllContacts                         PostPublicEmailTemplateRequestToEmailTypeEnum = "AllContacts"
	POSTPublicEmailTemplateRequestToEmailTypeEnumInvoiceOwnerBillToContact           PostPublicEmailTemplateRequestToEmailTypeEnum = "InvoiceOwnerBillToContact"
	POSTPublicEmailTemplateRequestToEmailTypeEnumInvoiceOwnerSoldToContact           PostPublicEmailTemplateRequestToEmailTypeEnum = "InvoiceOwnerSoldToContact"
	POSTPublicEmailTemplateRequestToEmailTypeEnumInvoiceOwnerBillToAndSoldToContacts PostPublicEmailTemplateRequestToEmailTypeEnum = "InvoiceOwnerBillToAndSoldToContacts"
	POSTPublicEmailTemplateRequestToEmailTypeEnumInvoiceOwnerAllContacts             PostPublicEmailTemplateRequestToEmailTypeEnum = "InvoiceOwnerAllContacts"
)

type PostPublicEmailTemplateRequest struct {
	Active              *bool                                               `json:"active,omitempty"`
	BccEmailAddress     *string                                             `json:"bccEmailAddress,omitempty"`
	CcEmailAddress      *string                                             `json:"ccEmailAddress,omitempty"`
	CcEmailType         *PostPublicEmailTemplateRequestCcEmailTypeEnum      `json:"ccEmailType,omitempty"`
	Description         *string                                             `json:"description,omitempty"`
	EmailBody           string                                              `json:"emailBody"`
	EmailSubject        string                                              `json:"emailSubject"`
	EncodingType        *PostPublicEmailTemplateRequestEncodingTypeEnum     `json:"encodingType,omitempty"`
	EventTypeName       string                                              `json:"eventTypeName"`
	EventTypeNamespace  *string                                             `json:"eventTypeNamespace,omitempty"`
	FromEmailAddress    *string                                             `json:"fromEmailAddress,omitempty"`
	FromEmailType       PostPublicEmailTemplateRequestFromEmailTypeEnum     `json:"fromEmailType"`
	FromName            *string                                             `json:"fromName,omitempty"`
	IsHTML              *bool                                               `json:"isHtml,omitempty"`
	Name                string                                              `json:"name"`
	ReplyToEmailAddress *string                                             `json:"replyToEmailAddress,omitempty"`
	ReplyToEmailType    *PostPublicEmailTemplateRequestReplyToEmailTypeEnum `json:"replyToEmailType,omitempty"`
	ToEmailAddress      *string                                             `json:"toEmailAddress,omitempty"`
	ToEmailType         PostPublicEmailTemplateRequestToEmailTypeEnum       `json:"toEmailType"`
}
