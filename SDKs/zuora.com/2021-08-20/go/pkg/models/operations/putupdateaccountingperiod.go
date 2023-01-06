package operations

import (
	"openapi/pkg/models/shared"
)

type PutUpdateAccountingPeriodPathParams struct {
	ApID string `pathParam:"style=simple,explode=false,name=ap-id"`
}

type PutUpdateAccountingPeriodHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutUpdateAccountingPeriodRequest struct {
	PathParams PutUpdateAccountingPeriodPathParams
	Headers    PutUpdateAccountingPeriodHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PutUpdateAccountingPeriodResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
