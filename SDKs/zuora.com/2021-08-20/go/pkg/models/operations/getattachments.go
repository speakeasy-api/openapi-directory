package operations

import (
	"openapi/pkg/models/shared"
)

type GetAttachmentsPathParams struct {
	AttachmentID string `pathParam:"style=simple,explode=false,name=attachment-id"`
}

type GetAttachmentsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetAttachmentsRequest struct {
	PathParams GetAttachmentsPathParams
	Headers    GetAttachmentsHeaders
}

type GetAttachmentsResponse struct {
	ContentType               string
	GETAttachmentResponseType *shared.GetAttachmentResponseType
	Headers                   map[string][]string
	StatusCode                int64
}
