package shared

type PostDocumentPropertiesTypeDocumentTypeEnum string

const (
	POSTDocumentPropertiesTypeDocumentTypeEnumInvoice    PostDocumentPropertiesTypeDocumentTypeEnum = "Invoice"
	POSTDocumentPropertiesTypeDocumentTypeEnumCreditMemo PostDocumentPropertiesTypeDocumentTypeEnum = "CreditMemo"
	POSTDocumentPropertiesTypeDocumentTypeEnumDebitMemo  PostDocumentPropertiesTypeDocumentTypeEnum = "DebitMemo"
)

type PostDocumentPropertiesType struct {
	CustomFileName *string                                     `json:"customFileName,omitempty"`
	DocumentID     *string                                     `json:"documentId,omitempty"`
	DocumentType   *PostDocumentPropertiesTypeDocumentTypeEnum `json:"documentType,omitempty"`
}
