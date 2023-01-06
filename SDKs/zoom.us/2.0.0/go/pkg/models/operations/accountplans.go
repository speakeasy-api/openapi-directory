package operations

type AccountPlansPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type AccountPlans200ApplicationJSONPlanAudioStatusEnum string

const (
	AccountPlans200ApplicationJSONPlanAudioStatusEnumActive  AccountPlans200ApplicationJSONPlanAudioStatusEnum = "active"
	AccountPlans200ApplicationJSONPlanAudioStatusEnumCancel  AccountPlans200ApplicationJSONPlanAudioStatusEnum = "cancel"
	AccountPlans200ApplicationJSONPlanAudioStatusEnumExpired AccountPlans200ApplicationJSONPlanAudioStatusEnum = "expired"
)

// AccountPlans200ApplicationJSONPlanAudio
// Additional audio conferencing <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans">plan type.</a>
type AccountPlans200ApplicationJSONPlanAudio struct {
	CalloutCountries     *string                                            `json:"callout_countries,omitempty"`
	DdiNumbers           *int64                                             `json:"ddi_numbers,omitempty"`
	NextInvoiceDate      *string                                            `json:"next_invoice_date,omitempty"`
	PremiumCountries     *string                                            `json:"premium_countries,omitempty"`
	ServiceEffectiveDate *string                                            `json:"service_effective_date,omitempty"`
	Status               *AccountPlans200ApplicationJSONPlanAudioStatusEnum `json:"status,omitempty"`
	TollfreeCountries    *string                                            `json:"tollfree_countries,omitempty"`
	Type                 *string                                            `json:"type,omitempty"`
}

type AccountPlans200ApplicationJSONPlanBaseStatusEnum string

const (
	AccountPlans200ApplicationJSONPlanBaseStatusEnumActive  AccountPlans200ApplicationJSONPlanBaseStatusEnum = "active"
	AccountPlans200ApplicationJSONPlanBaseStatusEnumCancel  AccountPlans200ApplicationJSONPlanBaseStatusEnum = "cancel"
	AccountPlans200ApplicationJSONPlanBaseStatusEnumExpired AccountPlans200ApplicationJSONPlanBaseStatusEnum = "expired"
)

type AccountPlans200ApplicationJSONPlanBase struct {
	Hosts                *int64                                            `json:"hosts,omitempty"`
	NextInvoiceDate      *string                                           `json:"next_invoice_date,omitempty"`
	ServiceEffectiveDate *string                                           `json:"service_effective_date,omitempty"`
	Status               *AccountPlans200ApplicationJSONPlanBaseStatusEnum `json:"status,omitempty"`
	Type                 *string                                           `json:"type,omitempty"`
}

type AccountPlans200ApplicationJSONPlanLargeMeetingStatusEnum string

const (
	AccountPlans200ApplicationJSONPlanLargeMeetingStatusEnumActive  AccountPlans200ApplicationJSONPlanLargeMeetingStatusEnum = "active"
	AccountPlans200ApplicationJSONPlanLargeMeetingStatusEnumCancel  AccountPlans200ApplicationJSONPlanLargeMeetingStatusEnum = "cancel"
	AccountPlans200ApplicationJSONPlanLargeMeetingStatusEnumExpired AccountPlans200ApplicationJSONPlanLargeMeetingStatusEnum = "expired"
)

// AccountPlans200ApplicationJSONPlanLargeMeeting
// Account plan object.
type AccountPlans200ApplicationJSONPlanLargeMeeting struct {
	Hosts                *int64                                                    `json:"hosts,omitempty"`
	NextInvoiceDate      *string                                                   `json:"next_invoice_date,omitempty"`
	ServiceEffectiveDate *string                                                   `json:"service_effective_date,omitempty"`
	Status               *AccountPlans200ApplicationJSONPlanLargeMeetingStatusEnum `json:"status,omitempty"`
	Type                 *string                                                   `json:"type,omitempty"`
}

type AccountPlans200ApplicationJSONPhonePlanPlanBaseStatusEnum string

const (
	AccountPlans200ApplicationJSONPhonePlanPlanBaseStatusEnumActive  AccountPlans200ApplicationJSONPhonePlanPlanBaseStatusEnum = "active"
	AccountPlans200ApplicationJSONPhonePlanPlanBaseStatusEnumCancel  AccountPlans200ApplicationJSONPhonePlanPlanBaseStatusEnum = "cancel"
	AccountPlans200ApplicationJSONPhonePlanPlanBaseStatusEnumExpired AccountPlans200ApplicationJSONPhonePlanPlanBaseStatusEnum = "expired"
)

// AccountPlans200ApplicationJSONPhonePlanPlanBase
// Additional phone base plans.
type AccountPlans200ApplicationJSONPhonePlanPlanBase struct {
	CalloutCountries     *string                                                    `json:"callout_countries,omitempty"`
	NextInvoiceDate      *string                                                    `json:"next_invoice_date,omitempty"`
	ServiceEffectiveDate *string                                                    `json:"service_effective_date,omitempty"`
	Status               *AccountPlans200ApplicationJSONPhonePlanPlanBaseStatusEnum `json:"status,omitempty"`
	Type                 *string                                                    `json:"type,omitempty"`
}

type AccountPlans200ApplicationJSONPhonePlanPlanCallingStatusEnum string

const (
	AccountPlans200ApplicationJSONPhonePlanPlanCallingStatusEnumActive  AccountPlans200ApplicationJSONPhonePlanPlanCallingStatusEnum = "active"
	AccountPlans200ApplicationJSONPhonePlanPlanCallingStatusEnumCancel  AccountPlans200ApplicationJSONPhonePlanPlanCallingStatusEnum = "cancel"
	AccountPlans200ApplicationJSONPhonePlanPlanCallingStatusEnumExpired AccountPlans200ApplicationJSONPhonePlanPlanCallingStatusEnum = "expired"
)

type AccountPlans200ApplicationJSONPhonePlanPlanCalling struct {
	Hosts                *int64                                                        `json:"hosts,omitempty"`
	NextInvoiceDate      *string                                                       `json:"next_invoice_date,omitempty"`
	ServiceEffectiveDate *string                                                       `json:"service_effective_date,omitempty"`
	Status               *AccountPlans200ApplicationJSONPhonePlanPlanCallingStatusEnum `json:"status,omitempty"`
	Type                 *string                                                       `json:"type,omitempty"`
}

type AccountPlans200ApplicationJSONPhonePlanPlanNumberStatusEnum string

const (
	AccountPlans200ApplicationJSONPhonePlanPlanNumberStatusEnumActive  AccountPlans200ApplicationJSONPhonePlanPlanNumberStatusEnum = "active"
	AccountPlans200ApplicationJSONPhonePlanPlanNumberStatusEnumCancel  AccountPlans200ApplicationJSONPhonePlanPlanNumberStatusEnum = "cancel"
	AccountPlans200ApplicationJSONPhonePlanPlanNumberStatusEnumExpired AccountPlans200ApplicationJSONPhonePlanPlanNumberStatusEnum = "expired"
)

type AccountPlans200ApplicationJSONPhonePlanPlanNumber struct {
	Hosts                *int64                                                       `json:"hosts,omitempty"`
	NextInvoiceDate      *string                                                      `json:"next_invoice_date,omitempty"`
	ServiceEffectiveDate *string                                                      `json:"service_effective_date,omitempty"`
	Status               *AccountPlans200ApplicationJSONPhonePlanPlanNumberStatusEnum `json:"status,omitempty"`
	Type                 *string                                                      `json:"type,omitempty"`
}

// AccountPlans200ApplicationJSONPhonePlan
// Phone Plan Object
type AccountPlans200ApplicationJSONPhonePlan struct {
	PlanBase    *AccountPlans200ApplicationJSONPhonePlanPlanBase     `json:"plan_base,omitempty"`
	PlanCalling []AccountPlans200ApplicationJSONPhonePlanPlanCalling `json:"plan_calling,omitempty"`
	PlanNumber  []AccountPlans200ApplicationJSONPhonePlanPlanNumber  `json:"plan_number,omitempty"`
}

type AccountPlans200ApplicationJSONPlanRecordingStatusEnum string

const (
	AccountPlans200ApplicationJSONPlanRecordingStatusEnumActive    AccountPlans200ApplicationJSONPlanRecordingStatusEnum = "Active"
	AccountPlans200ApplicationJSONPlanRecordingStatusEnumCancelled AccountPlans200ApplicationJSONPlanRecordingStatusEnum = "Cancelled"
)

type AccountPlans200ApplicationJSONPlanRoomConnectorStatusEnum string

const (
	AccountPlans200ApplicationJSONPlanRoomConnectorStatusEnumActive  AccountPlans200ApplicationJSONPlanRoomConnectorStatusEnum = "active"
	AccountPlans200ApplicationJSONPlanRoomConnectorStatusEnumCancel  AccountPlans200ApplicationJSONPlanRoomConnectorStatusEnum = "cancel"
	AccountPlans200ApplicationJSONPlanRoomConnectorStatusEnumExpired AccountPlans200ApplicationJSONPlanRoomConnectorStatusEnum = "expired"
)

type AccountPlans200ApplicationJSONPlanRoomConnector struct {
	Hosts                *int64                                                     `json:"hosts,omitempty"`
	NextInvoiceDate      *string                                                    `json:"next_invoice_date,omitempty"`
	ServiceEffectiveDate *string                                                    `json:"service_effective_date,omitempty"`
	Status               *AccountPlans200ApplicationJSONPlanRoomConnectorStatusEnum `json:"status,omitempty"`
	Type                 *string                                                    `json:"type,omitempty"`
}

type AccountPlans200ApplicationJSONPlanWebinarStatusEnum string

const (
	AccountPlans200ApplicationJSONPlanWebinarStatusEnumActive  AccountPlans200ApplicationJSONPlanWebinarStatusEnum = "active"
	AccountPlans200ApplicationJSONPlanWebinarStatusEnumCancel  AccountPlans200ApplicationJSONPlanWebinarStatusEnum = "cancel"
	AccountPlans200ApplicationJSONPlanWebinarStatusEnumExpired AccountPlans200ApplicationJSONPlanWebinarStatusEnum = "expired"
)

// AccountPlans200ApplicationJSONPlanWebinar
// Account plan object.
type AccountPlans200ApplicationJSONPlanWebinar struct {
	Hosts                *int64                                               `json:"hosts,omitempty"`
	NextInvoiceDate      *string                                              `json:"next_invoice_date,omitempty"`
	ServiceEffectiveDate *string                                              `json:"service_effective_date,omitempty"`
	Status               *AccountPlans200ApplicationJSONPlanWebinarStatusEnum `json:"status,omitempty"`
	Type                 *string                                              `json:"type,omitempty"`
}

type AccountPlans200ApplicationJSONPlanZoomRoomsStatusEnum string

const (
	AccountPlans200ApplicationJSONPlanZoomRoomsStatusEnumActive  AccountPlans200ApplicationJSONPlanZoomRoomsStatusEnum = "active"
	AccountPlans200ApplicationJSONPlanZoomRoomsStatusEnumCancel  AccountPlans200ApplicationJSONPlanZoomRoomsStatusEnum = "cancel"
	AccountPlans200ApplicationJSONPlanZoomRoomsStatusEnumExpired AccountPlans200ApplicationJSONPlanZoomRoomsStatusEnum = "expired"
)

type AccountPlans200ApplicationJSONPlanZoomRooms struct {
	Hosts                *int64                                                 `json:"hosts,omitempty"`
	NextInvoiceDate      *string                                                `json:"next_invoice_date,omitempty"`
	ServiceEffectiveDate *string                                                `json:"service_effective_date,omitempty"`
	Status               *AccountPlans200ApplicationJSONPlanZoomRoomsStatusEnum `json:"status,omitempty"`
	Type                 *string                                                `json:"type,omitempty"`
}

type AccountPlans200ApplicationJSON struct {
	PlanAudio                         *AccountPlans200ApplicationJSONPlanAudio               `json:"plan_audio,omitempty"`
	PlanBase                          *AccountPlans200ApplicationJSONPlanBase                `json:"plan_base,omitempty"`
	PlanLargeMeeting                  []AccountPlans200ApplicationJSONPlanLargeMeeting       `json:"plan_large_meeting,omitempty"`
	PlanPhone                         *AccountPlans200ApplicationJSONPhonePlan               `json:"plan_phone,omitempty"`
	PlanRecording                     *string                                                `json:"plan_recording,omitempty"`
	PlanRecordingNextInvoiceDate      *string                                                `json:"plan_recording_next_invoice_date,omitempty"`
	PlanRecordingServiceEffectiveDate *string                                                `json:"plan_recording_service_effective_date,omitempty"`
	PlanRecordingStatus               *AccountPlans200ApplicationJSONPlanRecordingStatusEnum `json:"plan_recording_status,omitempty"`
	PlanRoomConnector                 *AccountPlans200ApplicationJSONPlanRoomConnector       `json:"plan_room_connector,omitempty"`
	PlanWebinar                       []AccountPlans200ApplicationJSONPlanWebinar            `json:"plan_webinar,omitempty"`
	PlanZoomRooms                     *AccountPlans200ApplicationJSONPlanZoomRooms           `json:"plan_zoom_rooms,omitempty"`
}

type AccountPlansRequest struct {
	PathParams AccountPlansPathParams
}

type AccountPlansResponse struct {
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
	AccountPlans200ApplicationJSONObject *AccountPlans200ApplicationJSON
}
