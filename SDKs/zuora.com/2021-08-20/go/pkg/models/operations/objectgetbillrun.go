package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetBillRunPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetBillRunQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetBillRunHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetBillRunRequest struct {
	PathParams  ObjectGetBillRunPathParams
	QueryParams ObjectGetBillRunQueryParams
	Headers     ObjectGetBillRunHeaders
}

type ObjectGetBillRunResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyGetBillRun           *shared.ProxyGetBillRun
	ProxyNoDataResponse       *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
