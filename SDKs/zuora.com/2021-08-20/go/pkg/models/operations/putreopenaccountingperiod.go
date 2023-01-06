package operations

import (
	"openapi/pkg/models/shared"
)

type PutReopenAccountingPeriodPathParams struct {
	ApID string `pathParam:"style=simple,explode=false,name=ap-id"`
}

type PutReopenAccountingPeriodHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutReopenAccountingPeriodRequest struct {
	PathParams PutReopenAccountingPeriodPathParams
	Headers    PutReopenAccountingPeriodHeaders
}

type PutReopenAccountingPeriodResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
