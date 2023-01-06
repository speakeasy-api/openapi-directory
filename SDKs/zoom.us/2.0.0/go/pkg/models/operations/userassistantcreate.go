package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type UserAssistantCreatePathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UserAssistantCreateUserAssistantsListAssistants struct {
	Email *string `json:"email,omitempty"`
	ID    *string `json:"id,omitempty"`
}

// UserAssistantCreateUserAssistantsList
// List of user's assistants.
type UserAssistantCreateUserAssistantsList struct {
	Assistants []UserAssistantCreateUserAssistantsListAssistants `json:"assistants,omitempty" multipartForm:"name=assistants,json"`
}

type UserAssistantCreateRequests struct {
	UserAssistantsList  *UserAssistantCreateUserAssistantsList `request:"mediaType=application/json"`
	UserAssistantsList1 *UserAssistantCreateUserAssistantsList `request:"mediaType=multipart/form-data"`
}

type UserAssistantCreateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UserAssistantCreate201ApplicationJSON struct {
	AddAt *time.Time `json:"add_at,omitempty"`
	Ids   *string    `json:"ids,omitempty"`
}

type UserAssistantCreateRequest struct {
	PathParams UserAssistantCreatePathParams
	Request    UserAssistantCreateRequests
	Security   UserAssistantCreateSecurity
}

type UserAssistantCreateResponse struct {
	Body                                        []byte
	ContentType                                 string
	Headers                                     map[string][]string
	StatusCode                                  int64
	UserAssistantCreate201ApplicationJSONObject *UserAssistantCreate201ApplicationJSON
}
