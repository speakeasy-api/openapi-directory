package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPostExportQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPostExportHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPostExportRequest struct {
	QueryParams ObjectPostExportQueryParams
	Headers     ObjectPostExportHeaders
	Request     shared.ProxyCreateExport `request:"mediaType=application/json"`
}

type ObjectPostExportResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyBadRequestResponse     *shared.ProxyBadRequestResponse
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
