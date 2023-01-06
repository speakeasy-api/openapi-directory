package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetCustomObjectBulkJobPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetCustomObjectBulkJobHeaders struct {
	Authorization  string     `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string    `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string    `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *time.Time `header:"style=simple,explode=false,name=Zuora-Version"`
}

type GetCustomObjectBulkJobRequest struct {
	PathParams GetCustomObjectBulkJobPathParams
	Headers    GetCustomObjectBulkJobHeaders
}

type GetCustomObjectBulkJobResponse struct {
	CommonErrorResponse         *shared.CommonErrorResponse
	ContentType                 string
	CustomObjectBulkJobResponse *shared.CustomObjectBulkJobResponse
	Headers                     map[string][]string
	StatusCode                  int64
}
