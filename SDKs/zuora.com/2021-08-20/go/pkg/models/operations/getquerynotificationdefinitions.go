package operations

import (
	"openapi/pkg/models/shared"
)

type GetQueryNotificationDefinitionsQueryParams struct {
	EmailTemplateID *string `queryParam:"style=form,explode=true,name=emailTemplateId"`
	EventTypeName   *string `queryParam:"style=form,explode=true,name=eventTypeName"`
	Limit           *int32  `queryParam:"style=form,explode=true,name=limit"`
	ProfileID       *string `queryParam:"style=form,explode=true,name=profileId"`
	Start           *int32  `queryParam:"style=form,explode=true,name=start"`
}

type GetQueryNotificationDefinitionsHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetQueryNotificationDefinitions200ApplicationJSON struct {
	Data []shared.GetPublicNotificationDefinitionResponse `json:"data,omitempty"`
	Next *string                                          `json:"next,omitempty"`
}

type GetQueryNotificationDefinitionsRequest struct {
	QueryParams GetQueryNotificationDefinitionsQueryParams
	Headers     GetQueryNotificationDefinitionsHeaders
}

type GetQueryNotificationDefinitionsResponse struct {
	ContentType                                             string
	ErrorResponse                                           *shared.ErrorResponse
	GETQueryNotificationDefinitions200ApplicationJSONObject *GetQueryNotificationDefinitions200ApplicationJSON
	Headers                                                 map[string][]string
	StatusCode                                              int64
}
