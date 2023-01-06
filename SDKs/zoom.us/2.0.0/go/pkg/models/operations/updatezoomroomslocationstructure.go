package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateZoomRoomsLocationStructureApplicationJSON struct {
	Structures []string `json:"structures,omitempty"`
}

type UpdateZoomRoomsLocationStructureMultipartFormData struct {
	Structures []string `multipartForm:"name=structures,json"`
}

type UpdateZoomRoomsLocationStructureRequests struct {
	Object  *UpdateZoomRoomsLocationStructureApplicationJSON   `request:"mediaType=application/json"`
	Object1 *UpdateZoomRoomsLocationStructureMultipartFormData `request:"mediaType=multipart/form-data"`
}

type UpdateZoomRoomsLocationStructureSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UpdateZoomRoomsLocationStructureRequest struct {
	Request  *UpdateZoomRoomsLocationStructureRequests
	Security UpdateZoomRoomsLocationStructureSecurity
}

type UpdateZoomRoomsLocationStructureResponse struct {
	Body                                                  []byte
	ContentType                                           string
	StatusCode                                            int64
	UpdateZoomRoomsLocationStructure204ApplicationJSONAny *interface{}
}
