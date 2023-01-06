package operations

import (
	"openapi/pkg/models/shared"
)

type PutAccountingCodePathParams struct {
	AcID string `pathParam:"style=simple,explode=false,name=ac-id"`
}

type PutAccountingCodeHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutAccountingCodeRequest struct {
	PathParams PutAccountingCodePathParams
	Headers    PutAccountingCodeHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PutAccountingCodeResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
