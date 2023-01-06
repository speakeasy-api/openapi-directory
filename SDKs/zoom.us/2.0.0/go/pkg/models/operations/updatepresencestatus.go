package operations

type UpdatePresenceStatusPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UpdatePresenceStatusApplicationJSONStatusEnum string

const (
	UpdatePresenceStatusApplicationJSONStatusEnumDoNoDisturb UpdatePresenceStatusApplicationJSONStatusEnum = "Do_No_Disturb"
	UpdatePresenceStatusApplicationJSONStatusEnumAway        UpdatePresenceStatusApplicationJSONStatusEnum = "Away"
	UpdatePresenceStatusApplicationJSONStatusEnumAvailable   UpdatePresenceStatusApplicationJSONStatusEnum = "Available"
)

type UpdatePresenceStatusApplicationJSON struct {
	Duration *int64                                         `json:"duration,omitempty"`
	Status   *UpdatePresenceStatusApplicationJSONStatusEnum `json:"status,omitempty"`
}

type UpdatePresenceStatusMultipartFormDataStatusEnum string

const (
	UpdatePresenceStatusMultipartFormDataStatusEnumDoNoDisturb UpdatePresenceStatusMultipartFormDataStatusEnum = "Do_No_Disturb"
	UpdatePresenceStatusMultipartFormDataStatusEnumAway        UpdatePresenceStatusMultipartFormDataStatusEnum = "Away"
	UpdatePresenceStatusMultipartFormDataStatusEnumAvailable   UpdatePresenceStatusMultipartFormDataStatusEnum = "Available"
)

type UpdatePresenceStatusMultipartFormData struct {
	Duration *int64                                           `multipartForm:"name=duration"`
	Status   *UpdatePresenceStatusMultipartFormDataStatusEnum `multipartForm:"name=status"`
}

type UpdatePresenceStatusRequests struct {
	Object  *UpdatePresenceStatusApplicationJSON   `request:"mediaType=application/json"`
	Object1 *UpdatePresenceStatusMultipartFormData `request:"mediaType=multipart/form-data"`
}

type UpdatePresenceStatusRequest struct {
	PathParams UpdatePresenceStatusPathParams
	Request    *UpdatePresenceStatusRequests
}

type UpdatePresenceStatusResponse struct {
	Body                                      []byte
	ContentType                               string
	StatusCode                                int64
	UpdatePresenceStatus204ApplicationJSONAny *interface{}
}
