package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type WebinarPanelistCreatePathParams struct {
	WebinarID int64 `pathParam:"style=simple,explode=false,name=webinarId"`
}

// WebinarPanelistCreateApplicationJSONPanelists
// Panelist base object.
type WebinarPanelistCreateApplicationJSONPanelists struct {
	Email *string `json:"email,omitempty"`
	Name  *string `json:"name,omitempty"`
}

// WebinarPanelistCreateApplicationJSON
// Webinar panelist.
type WebinarPanelistCreateApplicationJSON struct {
	Panelists []WebinarPanelistCreateApplicationJSONPanelists `json:"panelists,omitempty"`
}

// WebinarPanelistCreateMultipartFormDataPanelists
// Panelist base object.
type WebinarPanelistCreateMultipartFormDataPanelists struct {
	Email *string `json:"email,omitempty"`
	Name  *string `json:"name,omitempty"`
}

// WebinarPanelistCreateMultipartFormData1
// Webinar panelist.
type WebinarPanelistCreateMultipartFormData1 struct {
	Panelists []WebinarPanelistCreateMultipartFormDataPanelists `multipartForm:"name=panelists,json"`
}

type WebinarPanelistCreateRequests struct {
	Object  *WebinarPanelistCreateApplicationJSON    `request:"mediaType=application/json"`
	Object1 *WebinarPanelistCreateMultipartFormData1 `request:"mediaType=multipart/form-data"`
}

type WebinarPanelistCreateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type WebinarPanelistCreate201ApplicationJSON struct {
	ID        *string    `json:"id,omitempty"`
	UpdatedAt *time.Time `json:"updated_at,omitempty"`
}

type WebinarPanelistCreateRequest struct {
	PathParams WebinarPanelistCreatePathParams
	Request    WebinarPanelistCreateRequests
	Security   WebinarPanelistCreateSecurity
}

type WebinarPanelistCreateResponse struct {
	Body                                          []byte
	ContentType                                   string
	StatusCode                                    int64
	WebinarPanelistCreate201ApplicationJSONObject *WebinarPanelistCreate201ApplicationJSON
}
