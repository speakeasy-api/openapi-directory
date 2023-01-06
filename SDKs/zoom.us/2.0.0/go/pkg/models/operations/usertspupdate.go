package operations

type UserTspUpdateTspIDEnum string

const (
	UserTSPUpdateTSPIDEnumOne UserTspUpdateTspIDEnum = "1"
	UserTSPUpdateTSPIDEnumTwo UserTspUpdateTspIDEnum = "2"
)

type UserTspUpdatePathParams struct {
	TspID  UserTspUpdateTspIDEnum `pathParam:"style=simple,explode=false,name=tspId"`
	UserID string                 `pathParam:"style=simple,explode=false,name=userId"`
}

type UserTspUpdateTspAccountDialInNumbersTypeEnum string

const (
	UserTSPUpdateTSPAccountDialInNumbersTypeEnumToll      UserTspUpdateTspAccountDialInNumbersTypeEnum = "toll"
	UserTSPUpdateTSPAccountDialInNumbersTypeEnumTollfree  UserTspUpdateTspAccountDialInNumbersTypeEnum = "tollfree"
	UserTSPUpdateTSPAccountDialInNumbersTypeEnumMediaLink UserTspUpdateTspAccountDialInNumbersTypeEnum = "media_link"
)

type UserTspUpdateTspAccountDialInNumbers struct {
	Code         *string                                       `json:"code,omitempty"`
	CountryLabel *string                                       `json:"country_label,omitempty"`
	Number       *string                                       `json:"number,omitempty"`
	Type         *UserTspUpdateTspAccountDialInNumbersTypeEnum `json:"type,omitempty"`
}

type UserTspUpdateTspAccountTspBridgeEnum string

const (
	UserTSPUpdateTSPAccountTSPBridgeEnumUsTspTb UserTspUpdateTspAccountTspBridgeEnum = "US_TSP_TB"
	UserTSPUpdateTSPAccountTSPBridgeEnumEuTspTb UserTspUpdateTspAccountTspBridgeEnum = "EU_TSP_TB"
)

// UserTspUpdateTspAccount
// TSP account.
type UserTspUpdateTspAccount struct {
	ConferenceCode string                                 `json:"conference_code" multipartForm:"name=conference_code"`
	DialInNumbers  []UserTspUpdateTspAccountDialInNumbers `json:"dial_in_numbers,omitempty" multipartForm:"name=dial_in_numbers,json"`
	LeaderPin      string                                 `json:"leader_pin" multipartForm:"name=leader_pin"`
	TspBridge      *UserTspUpdateTspAccountTspBridgeEnum  `json:"tsp_bridge,omitempty" multipartForm:"name=tsp_bridge"`
}

type UserTspUpdateRequests struct {
	TSPAccount  *UserTspUpdateTspAccount `request:"mediaType=application/json"`
	TSPAccount1 *UserTspUpdateTspAccount `request:"mediaType=multipart/form-data"`
}

type UserTspUpdateRequest struct {
	PathParams UserTspUpdatePathParams
	Request    UserTspUpdateRequests
}

type UserTspUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
