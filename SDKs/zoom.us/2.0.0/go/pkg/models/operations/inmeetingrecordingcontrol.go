package operations

type InMeetingRecordingControlPathParams struct {
	MeetingID string `pathParam:"style=simple,explode=false,name=meetingId"`
}

type InMeetingRecordingControlApplicationJSON struct {
	Method *string `json:"method,omitempty"`
}

type InMeetingRecordingControlMultipartFormData struct {
	Method *string `multipartForm:"name=method"`
}

type InMeetingRecordingControlRequests struct {
	Object  *InMeetingRecordingControlApplicationJSON   `request:"mediaType=application/json"`
	Object1 *InMeetingRecordingControlMultipartFormData `request:"mediaType=multipart/form-data"`
}

type InMeetingRecordingControlRequest struct {
	PathParams InMeetingRecordingControlPathParams
	Request    *InMeetingRecordingControlRequests
}

type InMeetingRecordingControlResponse struct {
	Body                                           []byte
	ContentType                                    string
	StatusCode                                     int64
	InMeetingRecordingControl202ApplicationJSONAny *interface{}
}
