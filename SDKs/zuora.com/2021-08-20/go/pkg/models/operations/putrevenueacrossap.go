package operations

import (
	"openapi/pkg/models/shared"
)

type PutRevenueAcrossApPathParams struct {
	RsNumber string `pathParam:"style=simple,explode=false,name=rs-number"`
}

type PutRevenueAcrossApHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutRevenueAcrossApRequest struct {
	PathParams PutRevenueAcrossApPathParams
	Headers    PutRevenueAcrossApHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PutRevenueAcrossApResponse struct {
	ContentType                    string
	Headers                        map[string][]string
	PUTRevenueScheduleResponseType *shared.PutRevenueScheduleResponseType
	StatusCode                     int64
}
