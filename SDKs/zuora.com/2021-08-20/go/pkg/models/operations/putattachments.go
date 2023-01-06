package operations

import (
	"openapi/pkg/models/shared"
)

type PutAttachmentsPathParams struct {
	AttachmentID string `pathParam:"style=simple,explode=false,name=attachment-id"`
}

type PutAttachmentsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutAttachmentsRequest struct {
	PathParams PutAttachmentsPathParams
	Headers    PutAttachmentsHeaders
	Request    *shared.PutAttachmentType `request:"mediaType=application/json"`
}

type PutAttachmentsResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
