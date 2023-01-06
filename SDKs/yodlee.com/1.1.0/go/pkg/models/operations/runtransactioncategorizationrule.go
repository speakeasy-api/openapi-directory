package operations

import (
	"openapi/pkg/models/shared"
)

type RunTransactionCategorizationRulePathParams struct {
	RuleID int64 `pathParam:"style=simple,explode=false,name=ruleId"`
}

type RunTransactionCategorizationRuleActionEnum string

const (
	RunTransactionCategorizationRuleActionEnumRun RunTransactionCategorizationRuleActionEnum = "run"
)

type RunTransactionCategorizationRuleQueryParams struct {
	Action RunTransactionCategorizationRuleActionEnum `queryParam:"style=form,explode=true,name=action"`
}

type RunTransactionCategorizationRuleRequest struct {
	PathParams  RunTransactionCategorizationRulePathParams
	QueryParams RunTransactionCategorizationRuleQueryParams
}

type RunTransactionCategorizationRuleResponse struct {
	ContentType string
	StatusCode  int64
	YodleeError *shared.YodleeError
}
