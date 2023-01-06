package operations

import (
	"openapi/pkg/models/shared"
)

type GetRampByRampNumberPathParams struct {
	RampNumber string `pathParam:"style=simple,explode=false,name=rampNumber"`
}

type GetRampByRampNumberHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetRampByRampNumberRequest struct {
	PathParams GetRampByRampNumberPathParams
	Headers    GetRampByRampNumberHeaders
}

type GetRampByRampNumberResponse struct {
	ContentType                     string
	GETRampByRampNumberResponseType *shared.GetRampByRampNumberResponseType
	Headers                         map[string][]string
	StatusCode                      int64
}
