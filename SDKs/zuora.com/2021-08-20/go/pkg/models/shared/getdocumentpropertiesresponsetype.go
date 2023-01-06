package shared

type GetDocumentPropertiesResponseTypeDocumentTypeEnum string

const (
	GETDocumentPropertiesResponseTypeDocumentTypeEnumInvoice    GetDocumentPropertiesResponseTypeDocumentTypeEnum = "Invoice"
	GETDocumentPropertiesResponseTypeDocumentTypeEnumCreditMemo GetDocumentPropertiesResponseTypeDocumentTypeEnum = "CreditMemo"
	GETDocumentPropertiesResponseTypeDocumentTypeEnumDebitMemo  GetDocumentPropertiesResponseTypeDocumentTypeEnum = "DebitMemo"
)

type GetDocumentPropertiesResponseType struct {
	CustomFileName *string                                            `json:"customFileName,omitempty"`
	DocumentID     *string                                            `json:"documentId,omitempty"`
	DocumentType   *GetDocumentPropertiesResponseTypeDocumentTypeEnum `json:"documentType,omitempty"`
	ID             *string                                            `json:"id,omitempty"`
	Success        *bool                                              `json:"success,omitempty"`
}
