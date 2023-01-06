package operations

import (
	"openapi/pkg/models/shared"
)

type PutCloseAccountingPeriodPathParams struct {
	ApID string `pathParam:"style=simple,explode=false,name=ap-id"`
}

type PutCloseAccountingPeriodHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutCloseAccountingPeriodRequest struct {
	PathParams PutCloseAccountingPeriodPathParams
	Headers    PutCloseAccountingPeriodHeaders
}

type PutCloseAccountingPeriodResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
