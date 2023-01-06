package operations

import (
	"openapi/pkg/models/shared"
)

type GetStatementsQueryParams struct {
	AccountID *string `queryParam:"style=form,explode=true,name=accountId"`
	Container *string `queryParam:"style=form,explode=true,name=container"`
	FromDate  *string `queryParam:"style=form,explode=true,name=fromDate"`
	IsLatest  *string `queryParam:"style=form,explode=true,name=isLatest"`
	Status    *string `queryParam:"style=form,explode=true,name=status"`
}

type GetStatementsRequest struct {
	QueryParams GetStatementsQueryParams
}

type GetStatementsResponse struct {
	ContentType       string
	StatementResponse *shared.StatementResponse
	StatusCode        int64
	YodleeError       *shared.YodleeError
}
