package operations

import (
	"openapi/pkg/models/shared"
)

type GetAttachmentsListPathParams struct {
	ObjectKey  string                           `pathParam:"style=simple,explode=false,name=object-key"`
	ObjectType shared.GlobalRequestPageSizeEnum `pathParam:"style=simple,explode=false,name=object-type"`
}

type GetAttachmentsListQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetAttachmentsListHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetAttachmentsListRequest struct {
	PathParams  GetAttachmentsListPathParams
	QueryParams GetAttachmentsListQueryParams
	Headers     GetAttachmentsListHeaders
}

type GetAttachmentsListResponse struct {
	ContentType                string
	GETAttachmentsResponseType *shared.GetAttachmentsResponseType
	Headers                    map[string][]string
	StatusCode                 int64
}
