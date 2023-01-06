package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetExportPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetExportQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetExportHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetExportRequest struct {
	PathParams  ObjectGetExportPathParams
	QueryParams ObjectGetExportQueryParams
	Headers     ObjectGetExportHeaders
}

type ObjectGetExportResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyGetExport            *shared.ProxyGetExport
	ProxyNoDataResponse       *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
