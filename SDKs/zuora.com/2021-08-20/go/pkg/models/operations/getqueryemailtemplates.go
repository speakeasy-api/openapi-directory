package operations

import (
	"openapi/pkg/models/shared"
)

type GetQueryEmailTemplatesQueryParams struct {
	EventTypeName *string `queryParam:"style=form,explode=true,name=eventTypeName"`
	Limit         *int32  `queryParam:"style=form,explode=true,name=limit"`
	Name          *string `queryParam:"style=form,explode=true,name=name"`
	Start         *int32  `queryParam:"style=form,explode=true,name=start"`
}

type GetQueryEmailTemplatesHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetQueryEmailTemplates200ApplicationJSON struct {
	Data []shared.GetPublicEmailTemplateResponse `json:"data,omitempty"`
	Next *string                                 `json:"next,omitempty"`
}

type GetQueryEmailTemplatesRequest struct {
	QueryParams GetQueryEmailTemplatesQueryParams
	Headers     GetQueryEmailTemplatesHeaders
}

type GetQueryEmailTemplatesResponse struct {
	ContentType                                    string
	ErrorResponse                                  *shared.ErrorResponse
	GETQueryEmailTemplates200ApplicationJSONObject *GetQueryEmailTemplates200ApplicationJSON
	Headers                                        map[string][]string
	StatusCode                                     int64
}
