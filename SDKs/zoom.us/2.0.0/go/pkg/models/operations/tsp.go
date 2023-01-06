package operations

type Tsp200ApplicationJSONDialInNumbers struct {
	Code   *string `json:"code,omitempty"`
	Number *string `json:"number,omitempty"`
	Type   *string `json:"type,omitempty"`
}

type Tsp200ApplicationJSONTspBridgeEnum string

const (
	Tsp200ApplicationJSONTspBridgeEnumUsTspTb Tsp200ApplicationJSONTspBridgeEnum = "US_TSP_TB"
	Tsp200ApplicationJSONTspBridgeEnumEuTspTb Tsp200ApplicationJSONTspBridgeEnum = "EU_TSP_TB"
)

type Tsp200ApplicationJSON struct {
	DialInNumberUnrestricted     *bool                                `json:"dial_in_number_unrestricted,omitempty"`
	DialInNumbers                []Tsp200ApplicationJSONDialInNumbers `json:"dial_in_numbers,omitempty"`
	Enable                       *bool                                `json:"enable,omitempty"`
	MasterAccountSettingExtended *bool                                `json:"master_account_setting_extended,omitempty"`
	ModifyCredentialForbidden    *bool                                `json:"modify_credential_forbidden,omitempty"`
	TspBridge                    *Tsp200ApplicationJSONTspBridgeEnum  `json:"tsp_bridge,omitempty"`
	TspEnabled                   *bool                                `json:"tsp_enabled,omitempty"`
	TspProvider                  *string                              `json:"tsp_provider,omitempty"`
}

type TspResponse struct {
	Body                        []byte
	ContentType                 string
	StatusCode                  int64
	Tsp200ApplicationJSONObject *Tsp200ApplicationJSON
}
