package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PostUploadFileForCustomObjectBulkJobPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostUploadFileForCustomObjectBulkJobHeaders struct {
	Authorization  string     `header:"style=simple,explode=false,name=Authorization"`
	ContentType    string     `header:"style=simple,explode=false,name=Content-Type"`
	ZuoraEntityIds *string    `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string    `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *time.Time `header:"style=simple,explode=false,name=Zuora-Version"`
}

type PostUploadFileForCustomObjectBulkJobRequest struct {
	PathParams PostUploadFileForCustomObjectBulkJobPathParams
	Headers    PostUploadFileForCustomObjectBulkJobHeaders
	Request    string `request:"mediaType=text/csv"`
}

type PostUploadFileForCustomObjectBulkJobResponse struct {
	CommonErrorResponse         *shared.CommonErrorResponse
	ContentType                 string
	CustomObjectBulkJobResponse *shared.CustomObjectBulkJobResponse
	Headers                     map[string][]string
	StatusCode                  int64
}
