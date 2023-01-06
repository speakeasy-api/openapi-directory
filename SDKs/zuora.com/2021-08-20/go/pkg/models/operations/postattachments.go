package operations

import (
	"openapi/pkg/models/shared"
)

type PostAttachmentsQueryParams struct {
	AssociatedObjectKey  string                                      `queryParam:"style=form,explode=true,name=associatedObjectKey"`
	AssociatedObjectType shared.GlobalHeaderZuoraEntityIdsSingleEnum `queryParam:"style=form,explode=true,name=associatedObjectType"`
	Description          *string                                     `queryParam:"style=form,explode=true,name=description"`
}

type PostAttachmentsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostAttachmentsRequestBodyFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type PostAttachmentsRequestBody struct {
	File PostAttachmentsRequestBodyFile `multipartForm:"file"`
}

type PostAttachmentsRequest struct {
	QueryParams PostAttachmentsQueryParams
	Headers     PostAttachmentsHeaders
	Request     PostAttachmentsRequestBody `request:"mediaType=multipart/form-data"`
}

type PostAttachmentsResponse struct {
	ContentType                string
	Headers                    map[string][]string
	POSTAttachmentResponseType *shared.PostAttachmentResponseType
	StatusCode                 int64
}
