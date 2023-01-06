package operations

import (
	"openapi/pkg/models/shared"
)

type GetSequenceSetsQueryParams struct {
	Name     *string `queryParam:"style=form,explode=true,name=name"`
	Page     *int64  `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetSequenceSetsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetSequenceSetsRequest struct {
	QueryParams GetSequenceSetsQueryParams
	Headers     GetSequenceSetsHeaders
}

type GetSequenceSetsResponse struct {
	ContentType             string
	GETSequenceSetsResponse *shared.GetSequenceSetsResponse
	Headers                 map[string][]string
	StatusCode              int64
}
