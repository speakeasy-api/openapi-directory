package operations

import (
	"openapi/pkg/models/shared"
)

type GetTransactionCategorizationRulesDeprecatedResponse struct {
	ContentType                    string
	StatusCode                     int64
	TransactionCategorizationRules []shared.TransactionCategorizationRule
}
