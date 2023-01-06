package operations

import (
	"openapi/pkg/models/shared"
)

type PutPendingCloseAccountingPeriodPathParams struct {
	ApID string `pathParam:"style=simple,explode=false,name=ap-id"`
}

type PutPendingCloseAccountingPeriodHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutPendingCloseAccountingPeriodRequest struct {
	PathParams PutPendingCloseAccountingPeriodPathParams
	Headers    PutPendingCloseAccountingPeriodHeaders
}

type PutPendingCloseAccountingPeriodResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
