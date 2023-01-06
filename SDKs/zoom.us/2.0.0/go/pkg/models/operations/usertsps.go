package operations

type UserTsPsPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UserTsPs200ApplicationJSONTspAccountsListDialInNumbersTypeEnum string

const (
	UserTSPs200ApplicationJSONTSPAccountsListDialInNumbersTypeEnumToll      UserTsPs200ApplicationJSONTspAccountsListDialInNumbersTypeEnum = "toll"
	UserTSPs200ApplicationJSONTSPAccountsListDialInNumbersTypeEnumTollfree  UserTsPs200ApplicationJSONTspAccountsListDialInNumbersTypeEnum = "tollfree"
	UserTSPs200ApplicationJSONTSPAccountsListDialInNumbersTypeEnumMediaLink UserTsPs200ApplicationJSONTspAccountsListDialInNumbersTypeEnum = "media_link"
)

type UserTsPs200ApplicationJSONTspAccountsListDialInNumbers struct {
	Code         *string                                                         `json:"code,omitempty"`
	CountryLabel *string                                                         `json:"country_label,omitempty"`
	Number       *string                                                         `json:"number,omitempty"`
	Type         *UserTsPs200ApplicationJSONTspAccountsListDialInNumbersTypeEnum `json:"type,omitempty"`
}

type UserTsPs200ApplicationJSONTspAccountsListTspBridgeEnum string

const (
	UserTSPs200ApplicationJSONTSPAccountsListTSPBridgeEnumUsTspTb UserTsPs200ApplicationJSONTspAccountsListTspBridgeEnum = "US_TSP_TB"
	UserTSPs200ApplicationJSONTSPAccountsListTSPBridgeEnumEuTspTb UserTsPs200ApplicationJSONTspAccountsListTspBridgeEnum = "EU_TSP_TB"
)

// UserTsPs200ApplicationJSONTspAccountsList
// List of TSP accounts.
type UserTsPs200ApplicationJSONTspAccountsList struct {
	ConferenceCode string                                                   `json:"conference_code"`
	DialInNumbers  []UserTsPs200ApplicationJSONTspAccountsListDialInNumbers `json:"dial_in_numbers,omitempty"`
	ID             *int64                                                   `json:"id,omitempty"`
	LeaderPin      string                                                   `json:"leader_pin"`
	TspBridge      *UserTsPs200ApplicationJSONTspAccountsListTspBridgeEnum  `json:"tsp_bridge,omitempty"`
}

type UserTsPs200ApplicationJSON struct {
	TspAccounts []UserTsPs200ApplicationJSONTspAccountsList `json:"tsp_accounts,omitempty"`
}

type UserTsPsRequest struct {
	PathParams UserTsPsPathParams
}

type UserTsPsResponse struct {
	Body                             []byte
	ContentType                      string
	StatusCode                       int64
	UserTSPs200ApplicationJSONObject *UserTsPs200ApplicationJSON
}
