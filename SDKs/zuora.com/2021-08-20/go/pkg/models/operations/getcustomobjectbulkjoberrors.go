package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetCustomObjectBulkJobErrorsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetCustomObjectBulkJobErrorsHeaders struct {
	Authorization  string     `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string    `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string    `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *time.Time `header:"style=simple,explode=false,name=Zuora-Version"`
}

type GetCustomObjectBulkJobErrorsRequest struct {
	PathParams GetCustomObjectBulkJobErrorsPathParams
	Headers    GetCustomObjectBulkJobErrorsHeaders
}

type GetCustomObjectBulkJobErrorsResponse struct {
	CommonErrorResponse                        *shared.CommonErrorResponse
	ContentType                                string
	CustomObjectBulkJobErrorResponseCollection *shared.CustomObjectBulkJobErrorResponseCollection
	Headers                                    map[string][]string
	StatusCode                                 int64
}
