package operations

import (
	"openapi/pkg/models/shared"
)

type CreateOrRunTransactionCategorizationRulesQueryParams struct {
	Action    *string `queryParam:"style=form,explode=true,name=action"`
	RuleParam *string `queryParam:"style=form,explode=true,name=ruleParam"`
}

type CreateOrRunTransactionCategorizationRulesRequest struct {
	QueryParams CreateOrRunTransactionCategorizationRulesQueryParams
}

type CreateOrRunTransactionCategorizationRulesResponse struct {
	ContentType string
	StatusCode  int64
	YodleeError *shared.YodleeError
}
