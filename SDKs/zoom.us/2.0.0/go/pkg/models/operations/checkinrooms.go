package operations

type CheckInRoomsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CheckInRoomsApplicationJSONParams struct {
	CalendarID    *string `json:"calendar_id,omitempty"`
	ChangeKey     *string `json:"change_key,omitempty"`
	EventID       string  `json:"event_id"`
	ResourceEmail *string `json:"resource_email,omitempty"`
}

type CheckInRoomsApplicationJSON struct {
	Method *string                            `json:"method,omitempty"`
	Params *CheckInRoomsApplicationJSONParams `json:"params,omitempty"`
}

type CheckInRoomsMultipartFormDataParams struct {
	CalendarID    *string `json:"calendar_id,omitempty"`
	ChangeKey     *string `json:"change_key,omitempty"`
	EventID       string  `json:"event_id"`
	ResourceEmail *string `json:"resource_email,omitempty"`
}

type CheckInRoomsMultipartFormData struct {
	Method *string                              `multipartForm:"name=method"`
	Params *CheckInRoomsMultipartFormDataParams `multipartForm:"name=params,json"`
}

type CheckInRoomsRequests struct {
	Object  *CheckInRoomsApplicationJSON   `request:"mediaType=application/json"`
	Object1 *CheckInRoomsMultipartFormData `request:"mediaType=multipart/form-data"`
}

type CheckInRoomsRequest struct {
	PathParams CheckInRoomsPathParams
	Request    *CheckInRoomsRequests
}

type CheckInRoomsResponse struct {
	Body                              []byte
	ContentType                       string
	StatusCode                        int64
	CheckInRooms202ApplicationJSONAny *interface{}
}
