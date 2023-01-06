package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllAccountingCodesQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetAllAccountingCodesHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetAllAccountingCodesRequest struct {
	QueryParams GetAllAccountingCodesQueryParams
	Headers     GetAllAccountingCodesHeaders
}

type GetAllAccountingCodesResponse struct {
	ContentType            string
	GETAccountingCodesType *shared.GetAccountingCodesType
	Headers                map[string][]string
	StatusCode             int64
}
