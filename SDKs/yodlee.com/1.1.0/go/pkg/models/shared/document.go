package shared

type DocumentDocTypeEnum string

const (
	DocumentDocTypeEnumStmt  DocumentDocTypeEnum = "STMT"
	DocumentDocTypeEnumTax   DocumentDocTypeEnum = "TAX"
	DocumentDocTypeEnumEbill DocumentDocTypeEnum = "EBILL"
)

type Document struct {
	AccountID   *int64               `json:"accountID,omitempty"`
	DocType     *DocumentDocTypeEnum `json:"docType,omitempty"`
	FormType    *string              `json:"formType,omitempty"`
	ID          *string              `json:"id,omitempty"`
	LastUpdated *string              `json:"lastUpdated,omitempty"`
	Name        *string              `json:"name,omitempty"`
	Source      *string              `json:"source,omitempty"`
	Status      *string              `json:"status,omitempty"`
}
