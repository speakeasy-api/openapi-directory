package shared

type TransactionCategoryClassificationEnum string

const (
	TransactionCategoryClassificationEnumPersonal TransactionCategoryClassificationEnum = "PERSONAL"
	TransactionCategoryClassificationEnumBusiness TransactionCategoryClassificationEnum = "BUSINESS"
)

type TransactionCategory struct {
	Category                     *string                                `json:"category,omitempty"`
	Classification               *TransactionCategoryClassificationEnum `json:"classification,omitempty"`
	DefaultCategoryName          *string                                `json:"defaultCategoryName,omitempty"`
	DefaultHighLevelCategoryName *string                                `json:"defaultHighLevelCategoryName,omitempty"`
	DetailCategory               []DetailCategory                       `json:"detailCategory,omitempty"`
	HighLevelCategoryID          *int64                                 `json:"highLevelCategoryId,omitempty"`
	HighLevelCategoryName        *string                                `json:"highLevelCategoryName,omitempty"`
	ID                           *int64                                 `json:"id,omitempty"`
	Source                       *TransactionCategorySourceEnum         `json:"source,omitempty"`
	Type                         *TransactionCategoryTypeEnum           `json:"type,omitempty"`
}
