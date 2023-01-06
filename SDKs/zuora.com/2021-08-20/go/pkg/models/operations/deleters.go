package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRsPathParams struct {
	RsNumber string `pathParam:"style=simple,explode=false,name=rs-number"`
}

type DeleteRsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type DeleteRsRequest struct {
	PathParams DeleteRsPathParams
	Headers    DeleteRsHeaders
}

type DeleteRsResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
