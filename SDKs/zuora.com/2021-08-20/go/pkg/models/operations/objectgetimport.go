package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetImportPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetImportQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetImportHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetImportRequest struct {
	PathParams  ObjectGetImportPathParams
	QueryParams ObjectGetImportQueryParams
	Headers     ObjectGetImportHeaders
}

type ObjectGetImportResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyGetImport            *shared.ProxyGetImport
	ProxyNoDataResponse       *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
