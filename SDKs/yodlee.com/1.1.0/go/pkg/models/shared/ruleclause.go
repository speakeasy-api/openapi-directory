package shared

type RuleClauseFieldEnum string

const (
	RuleClauseFieldEnumAmount      RuleClauseFieldEnum = "amount"
	RuleClauseFieldEnumDescription RuleClauseFieldEnum = "description"
)

type RuleClauseOperationEnum string

const (
	RuleClauseOperationEnumNumberEquals            RuleClauseOperationEnum = "numberEquals"
	RuleClauseOperationEnumNumberLessThan          RuleClauseOperationEnum = "numberLessThan"
	RuleClauseOperationEnumNumberLessThanEquals    RuleClauseOperationEnum = "numberLessThanEquals"
	RuleClauseOperationEnumNumberGreaterThan       RuleClauseOperationEnum = "numberGreaterThan"
	RuleClauseOperationEnumNumberGreaterThanEquals RuleClauseOperationEnum = "numberGreaterThanEquals"
	RuleClauseOperationEnumStringEquals            RuleClauseOperationEnum = "stringEquals"
	RuleClauseOperationEnumStringContains          RuleClauseOperationEnum = "stringContains"
)

type RuleClause struct {
	Field             *RuleClauseFieldEnum     `json:"field,omitempty"`
	FieldValue        *string                  `json:"fieldValue,omitempty"`
	Operation         *RuleClauseOperationEnum `json:"operation,omitempty"`
	RuleClauseID      *int64                   `json:"ruleClauseId,omitempty"`
	UserDefinedRuleID *int64                   `json:"userDefinedRuleId,omitempty"`
}
