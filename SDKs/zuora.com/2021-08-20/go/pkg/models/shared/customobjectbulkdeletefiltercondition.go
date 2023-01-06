package shared

type CustomObjectBulkDeleteFilterConditionOperatorEnum string

const (
	CustomObjectBulkDeleteFilterConditionOperatorEnumEq CustomObjectBulkDeleteFilterConditionOperatorEnum = "EQ"
	CustomObjectBulkDeleteFilterConditionOperatorEnumGt CustomObjectBulkDeleteFilterConditionOperatorEnum = "GT"
	CustomObjectBulkDeleteFilterConditionOperatorEnumLt CustomObjectBulkDeleteFilterConditionOperatorEnum = "LT"
	CustomObjectBulkDeleteFilterConditionOperatorEnumGe CustomObjectBulkDeleteFilterConditionOperatorEnum = "GE"
	CustomObjectBulkDeleteFilterConditionOperatorEnumLe CustomObjectBulkDeleteFilterConditionOperatorEnum = "LE"
)

// CustomObjectBulkDeleteFilterCondition
// Condition evaluated on a single object field
type CustomObjectBulkDeleteFilterCondition struct {
	Field    string                                            `json:"field"`
	Operator CustomObjectBulkDeleteFilterConditionOperatorEnum `json:"operator"`
	Value    interface{}                                       `json:"value"`
}
