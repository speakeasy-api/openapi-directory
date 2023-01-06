package operations

type UserPaCsPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UserPaCs200ApplicationJSONPacAccountsDedicatedDialInNumber struct {
	Country *string `json:"country,omitempty"`
	Number  *string `json:"number,omitempty"`
}

type UserPaCs200ApplicationJSONPacAccountsGlobalDialInNumbers struct {
	Country *string `json:"country,omitempty"`
	Number  *string `json:"number,omitempty"`
}

type UserPaCs200ApplicationJSONPacAccounts struct {
	ConferenceID          *int64                                                       `json:"conference_id,omitempty"`
	DedicatedDialInNumber []UserPaCs200ApplicationJSONPacAccountsDedicatedDialInNumber `json:"dedicated_dial_in_number,omitempty"`
	GlobalDialInNumbers   []UserPaCs200ApplicationJSONPacAccountsGlobalDialInNumbers   `json:"global_dial_in_numbers,omitempty"`
	ListenOnlyPassword    *string                                                      `json:"listen_only_password,omitempty"`
	ParticipantPassword   *string                                                      `json:"participant_password,omitempty"`
}

type UserPaCs200ApplicationJSON struct {
	PacAccounts []UserPaCs200ApplicationJSONPacAccounts `json:"pac_accounts,omitempty"`
}

type UserPaCsRequest struct {
	PathParams UserPaCsPathParams
}

type UserPaCsResponse struct {
	Body                             []byte
	ContentType                      string
	StatusCode                       int64
	UserPACs200ApplicationJSONObject *UserPaCs200ApplicationJSON
}
