package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PatchPartialUpdateCustomObjectRecordPathParams struct {
	ID     string `pathParam:"style=simple,explode=false,name=id"`
	Object string `pathParam:"style=simple,explode=false,name=object"`
}

type PatchPartialUpdateCustomObjectRecordHeaders struct {
	Authorization  string     `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string    `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string    `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *time.Time `header:"style=simple,explode=false,name=Zuora-Version"`
}

type PatchPartialUpdateCustomObjectRecordRequest struct {
	PathParams PatchPartialUpdateCustomObjectRecordPathParams
	Headers    PatchPartialUpdateCustomObjectRecordHeaders
	Request    map[string]interface{} `request:"mediaType=application/merge-patch+json"`
}

type PatchPartialUpdateCustomObjectRecordResponse struct {
	CommonErrorResponse             *shared.CommonErrorResponse
	ContentType                     string
	CustomObjectRecordWithAllFields map[string]interface{}
	Headers                         map[string][]string
	StatusCode                      int64
}
