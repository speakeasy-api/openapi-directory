package shared

type FieldOperationFieldEnum string

const (
	FieldOperationFieldEnumAmount      FieldOperationFieldEnum = "amount"
	FieldOperationFieldEnumDescription FieldOperationFieldEnum = "description"
)

type FieldOperationOperationEnum string

const (
	FieldOperationOperationEnumNumberEquals            FieldOperationOperationEnum = "numberEquals"
	FieldOperationOperationEnumNumberLessThan          FieldOperationOperationEnum = "numberLessThan"
	FieldOperationOperationEnumNumberLessThanEquals    FieldOperationOperationEnum = "numberLessThanEquals"
	FieldOperationOperationEnumNumberGreaterThan       FieldOperationOperationEnum = "numberGreaterThan"
	FieldOperationOperationEnumNumberGreaterThanEquals FieldOperationOperationEnum = "numberGreaterThanEquals"
	FieldOperationOperationEnumStringEquals            FieldOperationOperationEnum = "stringEquals"
	FieldOperationOperationEnumStringContains          FieldOperationOperationEnum = "stringContains"
)

type FieldOperation struct {
	Field     *FieldOperationFieldEnum     `json:"field,omitempty"`
	Operation *FieldOperationOperationEnum `json:"operation,omitempty"`
	Value     map[string]interface{}       `json:"value,omitempty"`
}
