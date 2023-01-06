package operations

import (
	"openapi/pkg/models/shared"
)

type GetZrLocationStructureSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type GetZrLocationStructure200ApplicationJSON struct {
	Structures []string `json:"structures,omitempty"`
}

type GetZrLocationStructureRequest struct {
	Security GetZrLocationStructureSecurity
}

type GetZrLocationStructureResponse struct {
	Body                                           []byte
	ContentType                                    string
	StatusCode                                     int64
	GetZRLocationStructure200ApplicationJSONObject *GetZrLocationStructure200ApplicationJSON
}
