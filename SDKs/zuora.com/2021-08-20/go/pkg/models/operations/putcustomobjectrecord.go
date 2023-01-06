package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PutCustomObjectRecordPathParams struct {
	ID     string `pathParam:"style=simple,explode=false,name=id"`
	Object string `pathParam:"style=simple,explode=false,name=object"`
}

type PutCustomObjectRecordHeaders struct {
	Authorization  string     `header:"style=simple,explode=false,name=Authorization"`
	IfMatch        *string    `header:"style=simple,explode=false,name=If-Match"`
	ZuoraEntityIds *string    `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string    `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *time.Time `header:"style=simple,explode=false,name=Zuora-Version"`
}

type PutCustomObjectRecordRequest struct {
	PathParams PutCustomObjectRecordPathParams
	Headers    PutCustomObjectRecordHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PutCustomObjectRecordResponse struct {
	CommonErrorResponse             *shared.CommonErrorResponse
	ContentType                     string
	CustomObjectRecordWithAllFields map[string]interface{}
	Headers                         map[string][]string
	StatusCode                      int64
}
