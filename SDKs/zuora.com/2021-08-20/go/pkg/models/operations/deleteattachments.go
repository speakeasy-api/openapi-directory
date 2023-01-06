package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAttachmentsPathParams struct {
	AttachmentID string `pathParam:"style=simple,explode=false,name=attachment-id"`
}

type DeleteAttachmentsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type DeleteAttachmentsRequest struct {
	PathParams DeleteAttachmentsPathParams
	Headers    DeleteAttachmentsHeaders
}

type DeleteAttachmentsResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
