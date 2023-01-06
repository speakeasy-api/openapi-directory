package operations

type ChangeZoomRoomsAppVersionPathParams struct {
	DeviceID string `pathParam:"style=simple,explode=false,name=deviceId"`
	RoomID   string `pathParam:"style=simple,explode=false,name=roomId"`
}

type ChangeZoomRoomsAppVersionApplicationJSONActionEnum string

const (
	ChangeZoomRoomsAppVersionApplicationJSONActionEnumUpgrade   ChangeZoomRoomsAppVersionApplicationJSONActionEnum = "upgrade"
	ChangeZoomRoomsAppVersionApplicationJSONActionEnumDowngrade ChangeZoomRoomsAppVersionApplicationJSONActionEnum = "downgrade"
	ChangeZoomRoomsAppVersionApplicationJSONActionEnumCancel    ChangeZoomRoomsAppVersionApplicationJSONActionEnum = "cancel"
)

type ChangeZoomRoomsAppVersionApplicationJSON struct {
	Action *ChangeZoomRoomsAppVersionApplicationJSONActionEnum `json:"action,omitempty"`
}

type ChangeZoomRoomsAppVersionMultipartFormDataActionEnum string

const (
	ChangeZoomRoomsAppVersionMultipartFormDataActionEnumUpgrade   ChangeZoomRoomsAppVersionMultipartFormDataActionEnum = "upgrade"
	ChangeZoomRoomsAppVersionMultipartFormDataActionEnumDowngrade ChangeZoomRoomsAppVersionMultipartFormDataActionEnum = "downgrade"
	ChangeZoomRoomsAppVersionMultipartFormDataActionEnumCancel    ChangeZoomRoomsAppVersionMultipartFormDataActionEnum = "cancel"
)

type ChangeZoomRoomsAppVersionMultipartFormData struct {
	Action *ChangeZoomRoomsAppVersionMultipartFormDataActionEnum `multipartForm:"name=action"`
}

type ChangeZoomRoomsAppVersionRequests struct {
	Object  *ChangeZoomRoomsAppVersionApplicationJSON   `request:"mediaType=application/json"`
	Object1 *ChangeZoomRoomsAppVersionMultipartFormData `request:"mediaType=multipart/form-data"`
}

type ChangeZoomRoomsAppVersionRequest struct {
	PathParams ChangeZoomRoomsAppVersionPathParams
	Request    *ChangeZoomRoomsAppVersionRequests
}

type ChangeZoomRoomsAppVersionResponse struct {
	Body                                           []byte
	ContentType                                    string
	StatusCode                                     int64
	ChangeZoomRoomsAppVersion204ApplicationJSONAny *interface{}
}
