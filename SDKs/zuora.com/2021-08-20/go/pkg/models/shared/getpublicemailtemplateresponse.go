package shared

import (
	"time"
)

type GetPublicEmailTemplateResponseCcEmailTypeEnum string

const (
	GETPublicEmailTemplateResponseCcEmailTypeEnumBillToContact                       GetPublicEmailTemplateResponseCcEmailTypeEnum = "BillToContact"
	GETPublicEmailTemplateResponseCcEmailTypeEnumSoldToContact                       GetPublicEmailTemplateResponseCcEmailTypeEnum = "SoldToContact"
	GETPublicEmailTemplateResponseCcEmailTypeEnumSpecificEmails                      GetPublicEmailTemplateResponseCcEmailTypeEnum = "SpecificEmails"
	GETPublicEmailTemplateResponseCcEmailTypeEnumTenantAdmin                         GetPublicEmailTemplateResponseCcEmailTypeEnum = "TenantAdmin"
	GETPublicEmailTemplateResponseCcEmailTypeEnumBillToAndSoldToContacts             GetPublicEmailTemplateResponseCcEmailTypeEnum = "BillToAndSoldToContacts"
	GETPublicEmailTemplateResponseCcEmailTypeEnumRunOwner                            GetPublicEmailTemplateResponseCcEmailTypeEnum = "RunOwner"
	GETPublicEmailTemplateResponseCcEmailTypeEnumAllContacts                         GetPublicEmailTemplateResponseCcEmailTypeEnum = "AllContacts"
	GETPublicEmailTemplateResponseCcEmailTypeEnumInvoiceOwnerBillToContact           GetPublicEmailTemplateResponseCcEmailTypeEnum = "InvoiceOwnerBillToContact"
	GETPublicEmailTemplateResponseCcEmailTypeEnumInvoiceOwnerSoldToContact           GetPublicEmailTemplateResponseCcEmailTypeEnum = "InvoiceOwnerSoldToContact"
	GETPublicEmailTemplateResponseCcEmailTypeEnumInvoiceOwnerBillToAndSoldToContacts GetPublicEmailTemplateResponseCcEmailTypeEnum = "InvoiceOwnerBillToAndSoldToContacts"
	GETPublicEmailTemplateResponseCcEmailTypeEnumInvoiceOwnerAllContacts             GetPublicEmailTemplateResponseCcEmailTypeEnum = "InvoiceOwnerAllContacts"
)

type GetPublicEmailTemplateResponseEncodingTypeEnum string

const (
	GETPublicEmailTemplateResponseEncodingTypeEnumUTF8      GetPublicEmailTemplateResponseEncodingTypeEnum = "UTF8"
	GETPublicEmailTemplateResponseEncodingTypeEnumShiftJis  GetPublicEmailTemplateResponseEncodingTypeEnum = "Shift_JIS"
	GETPublicEmailTemplateResponseEncodingTypeEnumIso2022Jp GetPublicEmailTemplateResponseEncodingTypeEnum = "ISO_2022_JP"
	GETPublicEmailTemplateResponseEncodingTypeEnumEucJp     GetPublicEmailTemplateResponseEncodingTypeEnum = "EUC_JP"
	GETPublicEmailTemplateResponseEncodingTypeEnumXSjis0213 GetPublicEmailTemplateResponseEncodingTypeEnum = "X_SJIS_0213"
)

type GetPublicEmailTemplateResponseFromEmailTypeEnum string

const (
	GETPublicEmailTemplateResponseFromEmailTypeEnumTenantEmail   GetPublicEmailTemplateResponseFromEmailTypeEnum = "TenantEmail"
	GETPublicEmailTemplateResponseFromEmailTypeEnumSpecificEmail GetPublicEmailTemplateResponseFromEmailTypeEnum = "SpecificEmail"
)

type GetPublicEmailTemplateResponseReplyToEmailTypeEnum string

const (
	GETPublicEmailTemplateResponseReplyToEmailTypeEnumTenantEmail   GetPublicEmailTemplateResponseReplyToEmailTypeEnum = "TenantEmail"
	GETPublicEmailTemplateResponseReplyToEmailTypeEnumSpecificEmail GetPublicEmailTemplateResponseReplyToEmailTypeEnum = "SpecificEmail"
)

type GetPublicEmailTemplateResponseToEmailTypeEnum string

const (
	GETPublicEmailTemplateResponseToEmailTypeEnumBillToContact                       GetPublicEmailTemplateResponseToEmailTypeEnum = "BillToContact"
	GETPublicEmailTemplateResponseToEmailTypeEnumSoldToContact                       GetPublicEmailTemplateResponseToEmailTypeEnum = "SoldToContact"
	GETPublicEmailTemplateResponseToEmailTypeEnumSpecificEmails                      GetPublicEmailTemplateResponseToEmailTypeEnum = "SpecificEmails"
	GETPublicEmailTemplateResponseToEmailTypeEnumTenantAdmin                         GetPublicEmailTemplateResponseToEmailTypeEnum = "TenantAdmin"
	GETPublicEmailTemplateResponseToEmailTypeEnumBillToAndSoldToContacts             GetPublicEmailTemplateResponseToEmailTypeEnum = "BillToAndSoldToContacts"
	GETPublicEmailTemplateResponseToEmailTypeEnumRunOwner                            GetPublicEmailTemplateResponseToEmailTypeEnum = "RunOwner"
	GETPublicEmailTemplateResponseToEmailTypeEnumAllContacts                         GetPublicEmailTemplateResponseToEmailTypeEnum = "AllContacts"
	GETPublicEmailTemplateResponseToEmailTypeEnumInvoiceOwnerBillToContact           GetPublicEmailTemplateResponseToEmailTypeEnum = "InvoiceOwnerBillToContact"
	GETPublicEmailTemplateResponseToEmailTypeEnumInvoiceOwnerSoldToContact           GetPublicEmailTemplateResponseToEmailTypeEnum = "InvoiceOwnerSoldToContact"
	GETPublicEmailTemplateResponseToEmailTypeEnumInvoiceOwnerBillToAndSoldToContacts GetPublicEmailTemplateResponseToEmailTypeEnum = "InvoiceOwnerBillToAndSoldToContacts"
	GETPublicEmailTemplateResponseToEmailTypeEnumInvoiceOwnerAllContacts             GetPublicEmailTemplateResponseToEmailTypeEnum = "InvoiceOwnerAllContacts"
)

type GetPublicEmailTemplateResponse struct {
	Active              *bool                                               `json:"active,omitempty"`
	BccEmailAddress     *string                                             `json:"bccEmailAddress,omitempty"`
	CcEmailAddress      *string                                             `json:"ccEmailAddress,omitempty"`
	CcEmailType         *GetPublicEmailTemplateResponseCcEmailTypeEnum      `json:"ccEmailType,omitempty"`
	CreatedBy           *string                                             `json:"createdBy,omitempty"`
	CreatedOn           *time.Time                                          `json:"createdOn,omitempty"`
	Description         *string                                             `json:"description,omitempty"`
	EmailBody           *string                                             `json:"emailBody,omitempty"`
	EmailSubject        *string                                             `json:"emailSubject,omitempty"`
	EncodingType        *GetPublicEmailTemplateResponseEncodingTypeEnum     `json:"encodingType,omitempty"`
	EventTypeName       *string                                             `json:"eventTypeName,omitempty"`
	EventTypeNamespace  *string                                             `json:"eventTypeNamespace,omitempty"`
	FromEmailAddress    *string                                             `json:"fromEmailAddress,omitempty"`
	FromEmailType       *GetPublicEmailTemplateResponseFromEmailTypeEnum    `json:"fromEmailType,omitempty"`
	FromName            *string                                             `json:"fromName,omitempty"`
	ID                  *string                                             `json:"id,omitempty"`
	IsHTML              *bool                                               `json:"isHtml,omitempty"`
	Name                *string                                             `json:"name,omitempty"`
	ReplyToEmailAddress *string                                             `json:"replyToEmailAddress,omitempty"`
	ReplyToEmailType    *GetPublicEmailTemplateResponseReplyToEmailTypeEnum `json:"replyToEmailType,omitempty"`
	ToEmailAddress      *string                                             `json:"toEmailAddress,omitempty"`
	ToEmailType         *GetPublicEmailTemplateResponseToEmailTypeEnum      `json:"toEmailType,omitempty"`
	UpdatedBy           *string                                             `json:"updatedBy,omitempty"`
	UpdatedOn           *time.Time                                          `json:"updatedOn,omitempty"`
}
