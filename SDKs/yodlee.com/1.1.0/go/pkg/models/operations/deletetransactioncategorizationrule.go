package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTransactionCategorizationRulePathParams struct {
	RuleID int64 `pathParam:"style=simple,explode=false,name=ruleId"`
}

type DeleteTransactionCategorizationRuleRequest struct {
	PathParams DeleteTransactionCategorizationRulePathParams
}

type DeleteTransactionCategorizationRuleResponse struct {
	ContentType string
	StatusCode  int64
	YodleeError *shared.YodleeError
}
