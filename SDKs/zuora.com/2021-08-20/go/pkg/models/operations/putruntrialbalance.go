package operations

import (
	"openapi/pkg/models/shared"
)

type PutRunTrialBalancePathParams struct {
	ApID string `pathParam:"style=simple,explode=false,name=ap-id"`
}

type PutRunTrialBalanceHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutRunTrialBalanceRequest struct {
	PathParams PutRunTrialBalancePathParams
	Headers    PutRunTrialBalanceHeaders
}

type PutRunTrialBalanceResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
