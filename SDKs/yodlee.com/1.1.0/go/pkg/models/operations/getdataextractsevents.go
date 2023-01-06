package operations

import (
	"openapi/pkg/models/shared"
)

type GetDataExtractsEventsQueryParams struct {
	EventName string `queryParam:"style=form,explode=true,name=eventName"`
	FromDate  string `queryParam:"style=form,explode=true,name=fromDate"`
	ToDate    string `queryParam:"style=form,explode=true,name=toDate"`
}

type GetDataExtractsEventsRequest struct {
	QueryParams GetDataExtractsEventsQueryParams
}

type GetDataExtractsEventsResponse struct {
	ContentType               string
	DataExtractsEventResponse *shared.DataExtractsEventResponse
	StatusCode                int64
	YodleeError               *shared.YodleeError
}
