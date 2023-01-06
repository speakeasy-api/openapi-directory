package shared

type TransactionCategorizationRuleInfoSourceEnum string

const (
	TransactionCategorizationRuleInfoSourceEnumSystem TransactionCategorizationRuleInfoSourceEnum = "SYSTEM"
	TransactionCategorizationRuleInfoSourceEnumUser   TransactionCategorizationRuleInfoSourceEnum = "USER"
)

type TransactionCategorizationRuleInfo struct {
	CategoryID int32                                        `json:"categoryId"`
	Priority   *int32                                       `json:"priority,omitempty"`
	RuleClause []FieldOperation                             `json:"ruleClause"`
	Source     *TransactionCategorizationRuleInfoSourceEnum `json:"source,omitempty"`
}
