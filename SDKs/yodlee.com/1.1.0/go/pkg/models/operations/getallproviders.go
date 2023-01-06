package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllProvidersQueryParams struct {
	Capability              *string `queryParam:"style=form,explode=true,name=capability"`
	DatasetDollarFilter     *string `queryParam:"style=form,explode=true,name=dataset$filter"`
	FullAccountNumberFields *string `queryParam:"style=form,explode=true,name=fullAccountNumberFields"`
	InstitutionID           *int64  `queryParam:"style=form,explode=true,name=institutionId"`
	Name                    *string `queryParam:"style=form,explode=true,name=name"`
	Priority                *string `queryParam:"style=form,explode=true,name=priority"`
	ProviderID              *string `queryParam:"style=form,explode=true,name=providerId"`
	Skip                    *int32  `queryParam:"style=form,explode=true,name=skip"`
	Top                     *int32  `queryParam:"style=form,explode=true,name=top"`
}

type GetAllProvidersRequest struct {
	QueryParams GetAllProvidersQueryParams
}

type GetAllProvidersResponse struct {
	ContentType      string
	ProviderResponse *shared.ProviderResponse
	StatusCode       int64
	YodleeError      *shared.YodleeError
}
