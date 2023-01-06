package operations

import (
	"openapi/pkg/models/shared"
)

type GetSecuritiesQueryParams struct {
	HoldingID *string `queryParam:"style=form,explode=true,name=holdingId"`
}

type GetSecuritiesRequest struct {
	QueryParams GetSecuritiesQueryParams
}

type GetSecuritiesResponse struct {
	ContentType               string
	HoldingSecuritiesResponse *shared.HoldingSecuritiesResponse
	StatusCode                int64
	YodleeError               *shared.YodleeError
}
