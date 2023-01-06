package operations

type UserTspCreatePathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UserTspCreateTspAccountsListDialInNumbersTypeEnum string

const (
	UserTSPCreateTSPAccountsListDialInNumbersTypeEnumToll      UserTspCreateTspAccountsListDialInNumbersTypeEnum = "toll"
	UserTSPCreateTSPAccountsListDialInNumbersTypeEnumTollfree  UserTspCreateTspAccountsListDialInNumbersTypeEnum = "tollfree"
	UserTSPCreateTSPAccountsListDialInNumbersTypeEnumMediaLink UserTspCreateTspAccountsListDialInNumbersTypeEnum = "media_link"
)

type UserTspCreateTspAccountsListDialInNumbers struct {
	Code         *string                                            `json:"code,omitempty"`
	CountryLabel *string                                            `json:"country_label,omitempty"`
	Number       *string                                            `json:"number,omitempty"`
	Type         *UserTspCreateTspAccountsListDialInNumbersTypeEnum `json:"type,omitempty"`
}

type UserTspCreateTspAccountsListTspBridgeEnum string

const (
	UserTSPCreateTSPAccountsListTSPBridgeEnumUsTspTb UserTspCreateTspAccountsListTspBridgeEnum = "US_TSP_TB"
	UserTSPCreateTSPAccountsListTSPBridgeEnumEuTspTb UserTspCreateTspAccountsListTspBridgeEnum = "EU_TSP_TB"
)

// UserTspCreateTspAccountsList
// List of TSP accounts.
type UserTspCreateTspAccountsList struct {
	ConferenceCode string                                      `json:"conference_code" multipartForm:"name=conference_code"`
	DialInNumbers  []UserTspCreateTspAccountsListDialInNumbers `json:"dial_in_numbers,omitempty" multipartForm:"name=dial_in_numbers,json"`
	LeaderPin      string                                      `json:"leader_pin" multipartForm:"name=leader_pin"`
	TspBridge      *UserTspCreateTspAccountsListTspBridgeEnum  `json:"tsp_bridge,omitempty" multipartForm:"name=tsp_bridge"`
}

type UserTspCreateRequests struct {
	TSPAccountsList  *UserTspCreateTspAccountsList `request:"mediaType=application/json"`
	TSPAccountsList1 *UserTspCreateTspAccountsList `request:"mediaType=multipart/form-data"`
}

type UserTspCreateRequest struct {
	PathParams UserTspCreatePathParams
	Request    UserTspCreateRequests
}

type UserTspCreateResponse struct {
	Body            []byte
	ContentType     string
	StatusCode      int64
	TSPAccountsList *UserTspCreateTspAccountsList
}
