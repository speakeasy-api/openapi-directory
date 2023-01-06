package operations

import (
	"openapi/pkg/models/shared"
)

type GetHoldingSummaryQueryParams struct {
	AccountIds         *string `queryParam:"style=form,explode=true,name=accountIds"`
	ClassificationType *string `queryParam:"style=form,explode=true,name=classificationType"`
	Include            *string `queryParam:"style=form,explode=true,name=include"`
}

type GetHoldingSummaryRequest struct {
	QueryParams GetHoldingSummaryQueryParams
}

type GetHoldingSummaryResponse struct {
	ContentType                   string
	DerivedHoldingSummaryResponse *shared.DerivedHoldingSummaryResponse
	StatusCode                    int64
	YodleeError                   *shared.YodleeError
}
