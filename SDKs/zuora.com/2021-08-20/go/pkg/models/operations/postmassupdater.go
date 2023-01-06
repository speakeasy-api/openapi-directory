package operations

import (
	"openapi/pkg/models/shared"
)

type PostMassUpdaterHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostMassUpdaterRequestBodyFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type PostMassUpdaterRequestBody struct {
	File   PostMassUpdaterRequestBodyFile `multipartForm:"file"`
	Params string                         `multipartForm:"name=params"`
}

type PostMassUpdaterRequest struct {
	Headers PostMassUpdaterHeaders
	Request PostMassUpdaterRequestBody `request:"mediaType=multipart/form-data"`
}

type PostMassUpdaterResponse struct {
	ContentType                string
	Headers                    map[string][]string
	POSTMassUpdateResponseType *shared.PostMassUpdateResponseType
	StatusCode                 int64
}
