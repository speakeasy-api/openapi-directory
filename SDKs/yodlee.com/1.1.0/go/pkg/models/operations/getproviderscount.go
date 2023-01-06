package operations

import (
	"openapi/pkg/models/shared"
)

type GetProvidersCountQueryParams struct {
	Capability              *string `queryParam:"style=form,explode=true,name=capability"`
	DatasetDollarFilter     *string `queryParam:"style=form,explode=true,name=dataset$filter"`
	FullAccountNumberFields *string `queryParam:"style=form,explode=true,name=fullAccountNumberFields"`
	Name                    *string `queryParam:"style=form,explode=true,name=name"`
	Priority                *string `queryParam:"style=form,explode=true,name=priority"`
}

type GetProvidersCountRequest struct {
	QueryParams GetProvidersCountQueryParams
}

type GetProvidersCountResponse struct {
	ContentType            string
	ProvidersCountResponse *shared.ProvidersCountResponse
	StatusCode             int64
	YodleeError            *shared.YodleeError
}
