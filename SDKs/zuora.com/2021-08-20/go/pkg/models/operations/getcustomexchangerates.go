package operations

import (
	"openapi/pkg/models/shared"
)

type GetCustomExchangeRatesPathParams struct {
	Currency string `pathParam:"style=simple,explode=false,name=currency"`
}

type GetCustomExchangeRatesQueryParams struct {
	EndDate   string `queryParam:"style=form,explode=true,name=endDate"`
	StartDate string `queryParam:"style=form,explode=true,name=startDate"`
}

type GetCustomExchangeRatesHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetCustomExchangeRatesRequest struct {
	PathParams  GetCustomExchangeRatesPathParams
	QueryParams GetCustomExchangeRatesQueryParams
	Headers     GetCustomExchangeRatesHeaders
}

type GetCustomExchangeRatesResponse struct {
	ContentType                string
	GETCustomExchangeRatesType *shared.GetCustomExchangeRatesType
	Headers                    map[string][]string
	StatusCode                 int64
}
