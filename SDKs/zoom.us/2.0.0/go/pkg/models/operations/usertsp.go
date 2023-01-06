package operations

type UserTspTspIDEnum string

const (
	UserTSPTSPIDEnumOne UserTspTspIDEnum = "1"
	UserTSPTSPIDEnumTwo UserTspTspIDEnum = "2"
)

type UserTspPathParams struct {
	TspID  UserTspTspIDEnum `pathParam:"style=simple,explode=false,name=tspId"`
	UserID string           `pathParam:"style=simple,explode=false,name=userId"`
}

type UserTspTspAccountDialInNumbersTypeEnum string

const (
	UserTSPTSPAccountDialInNumbersTypeEnumToll      UserTspTspAccountDialInNumbersTypeEnum = "toll"
	UserTSPTSPAccountDialInNumbersTypeEnumTollfree  UserTspTspAccountDialInNumbersTypeEnum = "tollfree"
	UserTSPTSPAccountDialInNumbersTypeEnumMediaLink UserTspTspAccountDialInNumbersTypeEnum = "media_link"
)

type UserTspTspAccountDialInNumbers struct {
	Code         *string                                 `json:"code,omitempty"`
	CountryLabel *string                                 `json:"country_label,omitempty"`
	Number       *string                                 `json:"number,omitempty"`
	Type         *UserTspTspAccountDialInNumbersTypeEnum `json:"type,omitempty"`
}

type UserTspTspAccountTspBridgeEnum string

const (
	UserTSPTSPAccountTSPBridgeEnumUsTspTb UserTspTspAccountTspBridgeEnum = "US_TSP_TB"
	UserTSPTSPAccountTSPBridgeEnumEuTspTb UserTspTspAccountTspBridgeEnum = "EU_TSP_TB"
)

// UserTspTspAccount
// TSP account of the user.
type UserTspTspAccount struct {
	ConferenceCode string                           `json:"conference_code"`
	DialInNumbers  []UserTspTspAccountDialInNumbers `json:"dial_in_numbers,omitempty"`
	ID             *int64                           `json:"id,omitempty"`
	LeaderPin      string                           `json:"leader_pin"`
	TspBridge      *UserTspTspAccountTspBridgeEnum  `json:"tsp_bridge,omitempty"`
}

type UserTspRequest struct {
	PathParams UserTspPathParams
}

type UserTspResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
	TSPAccount  *UserTspTspAccount
}
