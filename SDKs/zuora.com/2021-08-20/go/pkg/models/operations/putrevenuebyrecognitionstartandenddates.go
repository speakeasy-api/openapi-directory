package operations

import (
	"openapi/pkg/models/shared"
)

type PutRevenueByRecognitionStartandEndDatesPathParams struct {
	RsNumber string `pathParam:"style=simple,explode=false,name=rs-number"`
}

type PutRevenueByRecognitionStartandEndDatesHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutRevenueByRecognitionStartandEndDatesRequest struct {
	PathParams PutRevenueByRecognitionStartandEndDatesPathParams
	Headers    PutRevenueByRecognitionStartandEndDatesHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PutRevenueByRecognitionStartandEndDatesResponse struct {
	ContentType                    string
	Headers                        map[string][]string
	PUTRevenueScheduleResponseType *shared.PutRevenueScheduleResponseType
	StatusCode                     int64
}
