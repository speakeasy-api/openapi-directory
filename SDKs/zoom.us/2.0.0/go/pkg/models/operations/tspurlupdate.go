package operations

import (
	"openapi/pkg/models/shared"
)

type TspURLUpdatePathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type TspURLUpdateTspGlobalDialInURLSetting struct {
	AudioURL *string `json:"audio_url,omitempty" multipartForm:"name=audio_url"`
}

type TspURLUpdateRequests struct {
	TSPGlobalDialInURLSetting  *TspURLUpdateTspGlobalDialInURLSetting `request:"mediaType=application/json"`
	TSPGlobalDialInURLSetting1 *TspURLUpdateTspGlobalDialInURLSetting `request:"mediaType=multipart/form-data"`
}

type TspURLUpdateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type TspURLUpdateRequest struct {
	PathParams TspURLUpdatePathParams
	Request    *TspURLUpdateRequests
	Security   TspURLUpdateSecurity
}

type TspURLUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
