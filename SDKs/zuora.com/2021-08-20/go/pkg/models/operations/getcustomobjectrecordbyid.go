package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetCustomObjectRecordByIDPathParams struct {
	ID     string `pathParam:"style=simple,explode=false,name=id"`
	Object string `pathParam:"style=simple,explode=false,name=object"`
}

type GetCustomObjectRecordByIDHeaders struct {
	Authorization  string     `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string    `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string    `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *time.Time `header:"style=simple,explode=false,name=Zuora-Version"`
}

type GetCustomObjectRecordByIDRequest struct {
	PathParams GetCustomObjectRecordByIDPathParams
	Headers    GetCustomObjectRecordByIDHeaders
}

type GetCustomObjectRecordByIDResponse struct {
	CommonErrorResponse             *shared.CommonErrorResponse
	ContentType                     string
	CustomObjectRecordWithAllFields map[string]interface{}
	Headers                         map[string][]string
	StatusCode                      int64
}
