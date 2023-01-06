package operations

import (
	"openapi/pkg/models/shared"
)

type PostAccountingPeriodHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostAccountingPeriodRequest struct {
	Headers PostAccountingPeriodHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type PostAccountingPeriodResponse struct {
	ContentType                      string
	Headers                          map[string][]string
	POSTAccountingPeriodResponseType *shared.PostAccountingPeriodResponseType
	StatusCode                       int64
}
