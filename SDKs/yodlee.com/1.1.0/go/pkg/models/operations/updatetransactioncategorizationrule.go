package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTransactionCategorizationRulePathParams struct {
	RuleID int64 `pathParam:"style=simple,explode=false,name=ruleId"`
}

type UpdateTransactionCategorizationRuleRequest struct {
	PathParams UpdateTransactionCategorizationRulePathParams
	Request    shared.TransactionCategorizationRuleRequest `request:"mediaType=application/json"`
}

type UpdateTransactionCategorizationRuleResponse struct {
	ContentType string
	StatusCode  int64
	YodleeError *shared.YodleeError
}
