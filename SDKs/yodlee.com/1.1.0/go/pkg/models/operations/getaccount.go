package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountPathParams struct {
	AccountID int64 `pathParam:"style=simple,explode=false,name=accountId"`
}

type GetAccountQueryParams struct {
	Include *string `queryParam:"style=form,explode=true,name=include"`
}

type GetAccountRequest struct {
	PathParams  GetAccountPathParams
	QueryParams GetAccountQueryParams
}

type GetAccountResponse struct {
	AccountResponse *shared.AccountResponse
	ContentType     string
	StatusCode      int64
}
