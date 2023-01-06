package operations

import (
	"openapi/pkg/models/shared"
)

type PostUsageHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostUsageRequestBodyFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type PostUsageRequestBody struct {
	File PostUsageRequestBodyFile `multipartForm:"file"`
}

type PostUsageRequest struct {
	Headers PostUsageHeaders
	Request PostUsageRequestBody `request:"mediaType=multipart/form-data"`
}

type PostUsageResponse struct {
	ContentType           string
	Headers               map[string][]string
	POSTUsageResponseType *shared.PostUsageResponseType
	StatusCode            int64
}
