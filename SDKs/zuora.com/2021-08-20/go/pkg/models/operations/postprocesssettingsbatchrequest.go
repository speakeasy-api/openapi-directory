package operations

import (
	"openapi/pkg/models/shared"
)

type PostProcessSettingsBatchRequestHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostProcessSettingsBatchRequestRequest struct {
	Headers PostProcessSettingsBatchRequestHeaders
	Request shared.SettingsBatchRequest `request:"mediaType=application/json"`
}

type PostProcessSettingsBatchRequestResponse struct {
	ContentType           string
	Headers               map[string][]string
	SettingsBatchResponse *shared.SettingsBatchResponse
	StatusCode            int64
}
