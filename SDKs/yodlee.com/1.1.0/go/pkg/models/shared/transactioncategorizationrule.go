package shared

type TransactionCategorizationRule struct {
	CategoryLevelID             *int32       `json:"categoryLevelId,omitempty"`
	MemID                       *int64       `json:"memId,omitempty"`
	RuleClauses                 []RuleClause `json:"ruleClauses,omitempty"`
	RulePriority                *int32       `json:"rulePriority,omitempty"`
	TransactionCategorisationID *int64       `json:"transactionCategorisationId,omitempty"`
	UserDefinedRuleID           *int64       `json:"userDefinedRuleId,omitempty"`
}
