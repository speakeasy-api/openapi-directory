package operations

import (
	"openapi/pkg/models/shared"
)

type GetTransactionCategorizationRulesResponse struct {
	ContentType                           string
	StatusCode                            int64
	TransactionCategorizationRuleResponse *shared.TransactionCategorizationRuleResponse
}
