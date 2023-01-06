package operations

import (
	"openapi/pkg/models/shared"
)

type GetListAllSettingsHeaders struct {
	Accept         *string `header:"style=simple,explode=false,name=Accept"`
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetListAllSettingsRequest struct {
	Headers GetListAllSettingsHeaders
}

type GetListAllSettingsResponse struct {
	Body                    []byte
	ContentType             string
	Headers                 map[string][]string
	ListAllSettingsResponse *shared.ListAllSettingsResponse
	StatusCode              int64
}
