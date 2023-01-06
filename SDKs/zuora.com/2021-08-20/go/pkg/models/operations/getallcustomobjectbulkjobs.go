package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetAllCustomObjectBulkJobsQueryParams struct {
	Cursor   *string `queryParam:"style=form,explode=true,name=cursor"`
	PageSize *int64  `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetAllCustomObjectBulkJobsHeaders struct {
	Authorization  string     `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string    `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string    `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *time.Time `header:"style=simple,explode=false,name=Zuora-Version"`
}

type GetAllCustomObjectBulkJobsRequest struct {
	QueryParams GetAllCustomObjectBulkJobsQueryParams
	Headers     GetAllCustomObjectBulkJobsHeaders
}

type GetAllCustomObjectBulkJobsResponse struct {
	ContentType                           string
	CustomObjectBulkJobResponseCollection *shared.CustomObjectBulkJobResponseCollection
	Headers                               map[string][]string
	StatusCode                            int64
}
