package operations

import (
	"openapi/pkg/models/shared"
)

type PutRevenueSpecificDatePathParams struct {
	RsNumber string `pathParam:"style=simple,explode=false,name=rs-number"`
}

type PutRevenueSpecificDateHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutRevenueSpecificDateRequest struct {
	PathParams PutRevenueSpecificDatePathParams
	Headers    PutRevenueSpecificDateHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PutRevenueSpecificDateResponse struct {
	ContentType                    string
	Headers                        map[string][]string
	PUTRevenueScheduleResponseType *shared.PutRevenueScheduleResponseType
	StatusCode                     int64
}
