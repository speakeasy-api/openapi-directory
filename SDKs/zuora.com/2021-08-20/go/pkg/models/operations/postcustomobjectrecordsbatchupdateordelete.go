package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PostCustomObjectRecordsBatchUpdateOrDeletePathParams struct {
	Object string `pathParam:"style=simple,explode=false,name=object"`
}

type PostCustomObjectRecordsBatchUpdateOrDeleteHeaders struct {
	Authorization  string     `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string    `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string    `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *time.Time `header:"style=simple,explode=false,name=Zuora-Version"`
}

type PostCustomObjectRecordsBatchUpdateOrDeleteRequest struct {
	PathParams PostCustomObjectRecordsBatchUpdateOrDeletePathParams
	Headers    PostCustomObjectRecordsBatchUpdateOrDeleteHeaders
	Request    shared.CustomObjectRecordBatchRequest `request:"mediaType=application/json"`
}

type PostCustomObjectRecordsBatchUpdateOrDeleteResponse struct {
	ContentType                                          string
	CustomObjectRecordsBatchUpdatePartialSuccessResponse *shared.CustomObjectRecordsBatchUpdatePartialSuccessResponse
	CustomObjectRecordsErrorResponse                     *shared.CustomObjectRecordsErrorResponse
	CustomObjectRecordsThrottledResponse                 *shared.CustomObjectRecordsThrottledResponse
	ErrorResponse401Record                               *shared.ErrorResponse401Record
	Headers                                              map[string][]string
	StatusCode                                           int64
}
