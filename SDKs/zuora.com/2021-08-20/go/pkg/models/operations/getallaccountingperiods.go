package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllAccountingPeriodsQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetAllAccountingPeriodsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetAllAccountingPeriodsRequest struct {
	QueryParams GetAllAccountingPeriodsQueryParams
	Headers     GetAllAccountingPeriodsHeaders
}

type GetAllAccountingPeriodsResponse struct {
	ContentType              string
	GETAccountingPeriodsType *shared.GetAccountingPeriodsType
	Headers                  map[string][]string
	StatusCode               int64
}
