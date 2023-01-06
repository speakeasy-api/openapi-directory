package operations

import (
	"openapi/pkg/models/shared"
)

type GetHoldingsQueryParams struct {
	AccountID                             *string `queryParam:"style=form,explode=true,name=accountId"`
	AssetClassificationClassificationType *string `queryParam:"style=form,explode=true,name=assetClassification.classificationType"`
	ClassificationValue                   *string `queryParam:"style=form,explode=true,name=classificationValue"`
	Include                               *string `queryParam:"style=form,explode=true,name=include"`
	ProviderAccountID                     *string `queryParam:"style=form,explode=true,name=providerAccountId"`
}

type GetHoldingsRequest struct {
	QueryParams GetHoldingsQueryParams
}

type GetHoldingsResponse struct {
	ContentType     string
	HoldingResponse *shared.HoldingResponse
	StatusCode      int64
	YodleeError     *shared.YodleeError
}
