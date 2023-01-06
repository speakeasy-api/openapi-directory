package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PostCustomObjectBulkJobHeaders struct {
	Authorization  string     `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string    `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string    `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *time.Time `header:"style=simple,explode=false,name=Zuora-Version"`
}

type PostCustomObjectBulkJobRequest struct {
	Headers PostCustomObjectBulkJobHeaders
	Request shared.CustomObjectBulkJobRequest `request:"mediaType=application/json"`
}

type PostCustomObjectBulkJobResponse struct {
	CommonErrorResponse         *shared.CommonErrorResponse
	ContentType                 string
	CustomObjectBulkJobResponse *shared.CustomObjectBulkJobResponse
	Headers                     map[string][]string
	StatusCode                  int64
}
