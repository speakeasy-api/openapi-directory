package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetAllRecordsForCustomObjectTypePathParams struct {
	Object string `pathParam:"style=simple,explode=false,name=object"`
}

type GetAllRecordsForCustomObjectTypeQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	Ids      *string `queryParam:"style=form,explode=true,name=ids"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=pageSize"`
	Q        *string `queryParam:"style=form,explode=true,name=q"`
}

type GetAllRecordsForCustomObjectTypeHeaders struct {
	Authorization  string     `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string    `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string    `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *time.Time `header:"style=simple,explode=false,name=Zuora-Version"`
}

type GetAllRecordsForCustomObjectTypeRequest struct {
	PathParams  GetAllRecordsForCustomObjectTypePathParams
	QueryParams GetAllRecordsForCustomObjectTypeQueryParams
	Headers     GetAllRecordsForCustomObjectTypeHeaders
}

type GetAllRecordsForCustomObjectTypeResponse struct {
	ContentType                      string
	Headers                          map[string][]string
	QueryCustomObjectRecordsResponse *shared.QueryCustomObjectRecordsResponse
	StatusCode                       int64
}
