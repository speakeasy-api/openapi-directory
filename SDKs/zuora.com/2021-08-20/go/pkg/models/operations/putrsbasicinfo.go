package operations

import (
	"openapi/pkg/models/shared"
)

type PutRsBasicInfoPathParams struct {
	RsNumber string `pathParam:"style=simple,explode=false,name=rs-number"`
}

type PutRsBasicInfoHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutRsBasicInfoRequest struct {
	PathParams PutRsBasicInfoPathParams
	Headers    PutRsBasicInfoHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PutRsBasicInfoResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
