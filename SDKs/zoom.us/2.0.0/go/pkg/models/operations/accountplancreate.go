package operations

type AccountPlanCreatePathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

// AccountPlanCreateApplicationJSONPlanAudio
// Additional audio conferencing <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans">plan type</a>.
type AccountPlanCreateApplicationJSONPlanAudio struct {
	CalloutCountries  *string `json:"callout_countries,omitempty"`
	DdiNumbers        *int64  `json:"ddi_numbers,omitempty"`
	PremiumCountries  *string `json:"premium_countries,omitempty"`
	TollfreeCountries *string `json:"tollfree_countries,omitempty"`
	Type              *string `json:"type,omitempty"`
}

// AccountPlanCreateApplicationJSONPlanBase
// Account base plan object.
type AccountPlanCreateApplicationJSONPlanBase struct {
	Hosts int64  `json:"hosts"`
	Type  string `json:"type"`
}

// AccountPlanCreateApplicationJSONPlanLargeMeeting
// Account plan object.
type AccountPlanCreateApplicationJSONPlanLargeMeeting struct {
	Hosts *int64  `json:"hosts,omitempty"`
	Type  *string `json:"type,omitempty"`
}

// AccountPlanCreateApplicationJSONPhonePlanPlanBase
// Additional phone base plans.
type AccountPlanCreateApplicationJSONPhonePlanPlanBase struct {
	CalloutCountries *string `json:"callout_countries,omitempty"`
	Type             *string `json:"type,omitempty"`
}

type AccountPlanCreateApplicationJSONPhonePlanPlanCalling struct {
	Hosts *int64  `json:"hosts,omitempty"`
	Type  *string `json:"type,omitempty"`
}

type AccountPlanCreateApplicationJSONPhonePlanPlanNumber struct {
	Hosts *int64  `json:"hosts,omitempty"`
	Type  *string `json:"type,omitempty"`
}

// AccountPlanCreateApplicationJSONPhonePlan
// Phone Plan Object
type AccountPlanCreateApplicationJSONPhonePlan struct {
	PlanBase    *AccountPlanCreateApplicationJSONPhonePlanPlanBase     `json:"plan_base,omitempty"`
	PlanCalling []AccountPlanCreateApplicationJSONPhonePlanPlanCalling `json:"plan_calling,omitempty"`
	PlanNumber  []AccountPlanCreateApplicationJSONPhonePlanPlanNumber  `json:"plan_number,omitempty"`
}

// AccountPlanCreateApplicationJSONPlanRoomConnector
// Account plan object.
type AccountPlanCreateApplicationJSONPlanRoomConnector struct {
	Hosts *int64  `json:"hosts,omitempty"`
	Type  *string `json:"type,omitempty"`
}

// AccountPlanCreateApplicationJSONPlanWebinar
// Account plan object.
type AccountPlanCreateApplicationJSONPlanWebinar struct {
	Hosts *int64  `json:"hosts,omitempty"`
	Type  *string `json:"type,omitempty"`
}

// AccountPlanCreateApplicationJSONPlanZoomRooms
// Account plan object.
type AccountPlanCreateApplicationJSONPlanZoomRooms struct {
	Hosts *int64  `json:"hosts,omitempty"`
	Type  *string `json:"type,omitempty"`
}

// AccountPlanCreateApplicationJSON
// Account Plans object.
type AccountPlanCreateApplicationJSON struct {
	PlanAudio         *AccountPlanCreateApplicationJSONPlanAudio         `json:"plan_audio,omitempty"`
	PlanBase          AccountPlanCreateApplicationJSONPlanBase           `json:"plan_base"`
	PlanLargeMeeting  []AccountPlanCreateApplicationJSONPlanLargeMeeting `json:"plan_large_meeting,omitempty"`
	PlanPhone         *AccountPlanCreateApplicationJSONPhonePlan         `json:"plan_phone,omitempty"`
	PlanRecording     *string                                            `json:"plan_recording,omitempty"`
	PlanRoomConnector *AccountPlanCreateApplicationJSONPlanRoomConnector `json:"plan_room_connector,omitempty"`
	PlanWebinar       []AccountPlanCreateApplicationJSONPlanWebinar      `json:"plan_webinar,omitempty"`
	PlanZoomRooms     *AccountPlanCreateApplicationJSONPlanZoomRooms     `json:"plan_zoom_rooms,omitempty"`
}

// AccountPlanCreateMultipartFormDataPlanAudio
// Additional audio conferencing <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans">plan type</a>.
type AccountPlanCreateMultipartFormDataPlanAudio struct {
	CalloutCountries  *string `json:"callout_countries,omitempty"`
	DdiNumbers        *int64  `json:"ddi_numbers,omitempty"`
	PremiumCountries  *string `json:"premium_countries,omitempty"`
	TollfreeCountries *string `json:"tollfree_countries,omitempty"`
	Type              *string `json:"type,omitempty"`
}

// AccountPlanCreateMultipartFormDataPlanBase
// Account base plan object.
type AccountPlanCreateMultipartFormDataPlanBase struct {
	Hosts int64  `json:"hosts"`
	Type  string `json:"type"`
}

// AccountPlanCreateMultipartFormDataPlanLargeMeeting
// Account plan object.
type AccountPlanCreateMultipartFormDataPlanLargeMeeting struct {
	Hosts *int64  `json:"hosts,omitempty"`
	Type  *string `json:"type,omitempty"`
}

// AccountPlanCreateMultipartFormDataPhonePlanPlanBase
// Additional phone base plans.
type AccountPlanCreateMultipartFormDataPhonePlanPlanBase struct {
	CalloutCountries *string `json:"callout_countries,omitempty"`
	Type             *string `json:"type,omitempty"`
}

type AccountPlanCreateMultipartFormDataPhonePlanPlanCalling struct {
	Hosts *int64  `json:"hosts,omitempty"`
	Type  *string `json:"type,omitempty"`
}

type AccountPlanCreateMultipartFormDataPhonePlanPlanNumber struct {
	Hosts *int64  `json:"hosts,omitempty"`
	Type  *string `json:"type,omitempty"`
}

// AccountPlanCreateMultipartFormDataPhonePlan
// Phone Plan Object
type AccountPlanCreateMultipartFormDataPhonePlan struct {
	PlanBase    *AccountPlanCreateMultipartFormDataPhonePlanPlanBase     `json:"plan_base,omitempty"`
	PlanCalling []AccountPlanCreateMultipartFormDataPhonePlanPlanCalling `json:"plan_calling,omitempty"`
	PlanNumber  []AccountPlanCreateMultipartFormDataPhonePlanPlanNumber  `json:"plan_number,omitempty"`
}

// AccountPlanCreateMultipartFormDataPlanRoomConnector
// Account plan object.
type AccountPlanCreateMultipartFormDataPlanRoomConnector struct {
	Hosts *int64  `json:"hosts,omitempty"`
	Type  *string `json:"type,omitempty"`
}

// AccountPlanCreateMultipartFormDataPlanWebinar
// Account plan object.
type AccountPlanCreateMultipartFormDataPlanWebinar struct {
	Hosts *int64  `json:"hosts,omitempty"`
	Type  *string `json:"type,omitempty"`
}

// AccountPlanCreateMultipartFormDataPlanZoomRooms
// Account plan object.
type AccountPlanCreateMultipartFormDataPlanZoomRooms struct {
	Hosts *int64  `json:"hosts,omitempty"`
	Type  *string `json:"type,omitempty"`
}

// AccountPlanCreateMultipartFormData1
// Account Plans object.
type AccountPlanCreateMultipartFormData1 struct {
	PlanAudio         *AccountPlanCreateMultipartFormDataPlanAudio         `multipartForm:"name=plan_audio,json"`
	PlanBase          AccountPlanCreateMultipartFormDataPlanBase           `multipartForm:"name=plan_base,json"`
	PlanLargeMeeting  []AccountPlanCreateMultipartFormDataPlanLargeMeeting `multipartForm:"name=plan_large_meeting,json"`
	PlanPhone         *AccountPlanCreateMultipartFormDataPhonePlan         `multipartForm:"name=plan_phone,json"`
	PlanRecording     *string                                              `multipartForm:"name=plan_recording"`
	PlanRoomConnector *AccountPlanCreateMultipartFormDataPlanRoomConnector `multipartForm:"name=plan_room_connector,json"`
	PlanWebinar       []AccountPlanCreateMultipartFormDataPlanWebinar      `multipartForm:"name=plan_webinar,json"`
	PlanZoomRooms     *AccountPlanCreateMultipartFormDataPlanZoomRooms     `multipartForm:"name=plan_zoom_rooms,json"`
}

type AccountPlanCreateRequests struct {
	Object  *AccountPlanCreateApplicationJSON    `request:"mediaType=application/json"`
	Object1 *AccountPlanCreateMultipartFormData1 `request:"mediaType=multipart/form-data"`
}

// AccountPlanCreate201ApplicationJSONPlanAudio
// Additional audio conferencing <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans">plan type</a>.
type AccountPlanCreate201ApplicationJSONPlanAudio struct {
	CalloutCountries  *string `json:"callout_countries,omitempty"`
	DdiNumbers        *int64  `json:"ddi_numbers,omitempty"`
	PremiumCountries  *string `json:"premium_countries,omitempty"`
	TollfreeCountries *string `json:"tollfree_countries,omitempty"`
	Type              *string `json:"type,omitempty"`
}

// AccountPlanCreate201ApplicationJSONPlanBase
// Account base plan object.
type AccountPlanCreate201ApplicationJSONPlanBase struct {
	Hosts int64  `json:"hosts"`
	Type  string `json:"type"`
}

// AccountPlanCreate201ApplicationJSONPlanLargeMeeting
// Account plan object.
type AccountPlanCreate201ApplicationJSONPlanLargeMeeting struct {
	Hosts *int64  `json:"hosts,omitempty"`
	Type  *string `json:"type,omitempty"`
}

// AccountPlanCreate201ApplicationJSONPhonePlanPlanBase
// Additional phone base plans.
type AccountPlanCreate201ApplicationJSONPhonePlanPlanBase struct {
	CalloutCountries *string `json:"callout_countries,omitempty"`
	Type             *string `json:"type,omitempty"`
}

type AccountPlanCreate201ApplicationJSONPhonePlanPlanCalling struct {
	Hosts *int64  `json:"hosts,omitempty"`
	Type  *string `json:"type,omitempty"`
}

type AccountPlanCreate201ApplicationJSONPhonePlanPlanNumber struct {
	Hosts *int64  `json:"hosts,omitempty"`
	Type  *string `json:"type,omitempty"`
}

// AccountPlanCreate201ApplicationJSONPhonePlan
// Phone Plan Object
type AccountPlanCreate201ApplicationJSONPhonePlan struct {
	PlanBase    *AccountPlanCreate201ApplicationJSONPhonePlanPlanBase     `json:"plan_base,omitempty"`
	PlanCalling []AccountPlanCreate201ApplicationJSONPhonePlanPlanCalling `json:"plan_calling,omitempty"`
	PlanNumber  []AccountPlanCreate201ApplicationJSONPhonePlanPlanNumber  `json:"plan_number,omitempty"`
}

// AccountPlanCreate201ApplicationJSONPlanRoomConnector
// Account plan object.
type AccountPlanCreate201ApplicationJSONPlanRoomConnector struct {
	Hosts *int64  `json:"hosts,omitempty"`
	Type  *string `json:"type,omitempty"`
}

// AccountPlanCreate201ApplicationJSONPlanWebinar
// Account plan object.
type AccountPlanCreate201ApplicationJSONPlanWebinar struct {
	Hosts *int64  `json:"hosts,omitempty"`
	Type  *string `json:"type,omitempty"`
}

// AccountPlanCreate201ApplicationJSONPlanZoomRooms
// Account plan object.
type AccountPlanCreate201ApplicationJSONPlanZoomRooms struct {
	Hosts *int64  `json:"hosts,omitempty"`
	Type  *string `json:"type,omitempty"`
}

// AccountPlanCreate201ApplicationJSON
// Account Plans object.
type AccountPlanCreate201ApplicationJSON struct {
	PlanAudio         *AccountPlanCreate201ApplicationJSONPlanAudio         `json:"plan_audio,omitempty"`
	PlanBase          AccountPlanCreate201ApplicationJSONPlanBase           `json:"plan_base"`
	PlanLargeMeeting  []AccountPlanCreate201ApplicationJSONPlanLargeMeeting `json:"plan_large_meeting,omitempty"`
	PlanPhone         *AccountPlanCreate201ApplicationJSONPhonePlan         `json:"plan_phone,omitempty"`
	PlanRecording     *string                                               `json:"plan_recording,omitempty"`
	PlanRoomConnector *AccountPlanCreate201ApplicationJSONPlanRoomConnector `json:"plan_room_connector,omitempty"`
	PlanWebinar       []AccountPlanCreate201ApplicationJSONPlanWebinar      `json:"plan_webinar,omitempty"`
	PlanZoomRooms     *AccountPlanCreate201ApplicationJSONPlanZoomRooms     `json:"plan_zoom_rooms,omitempty"`
}

type AccountPlanCreateRequest struct {
	PathParams AccountPlanCreatePathParams
	Request    AccountPlanCreateRequests
}

type AccountPlanCreateResponse struct {
	Body                                      []byte
	ContentType                               string
	StatusCode                                int64
	AccountPlanCreate200ApplicationJSONAny    *interface{}
	AccountPlanCreate201ApplicationJSONObject *AccountPlanCreate201ApplicationJSON
}
