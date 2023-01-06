package operations

type TspUpdateApplicationJSONTspBridgeEnum string

const (
	TspUpdateApplicationJSONTspBridgeEnumUsTspTb TspUpdateApplicationJSONTspBridgeEnum = "US_TSP_TB"
	TspUpdateApplicationJSONTspBridgeEnumEuTspTb TspUpdateApplicationJSONTspBridgeEnum = "EU_TSP_TB"
)

type TspUpdateApplicationJSON struct {
	DialInNumberUnrestricted     *bool                                  `json:"dial_in_number_unrestricted,omitempty"`
	Enable                       *bool                                  `json:"enable,omitempty"`
	MasterAccountSettingExtended *bool                                  `json:"master_account_setting_extended,omitempty"`
	ModifyCredentialForbidden    *bool                                  `json:"modify_credential_forbidden,omitempty"`
	TspBridge                    *TspUpdateApplicationJSONTspBridgeEnum `json:"tsp_bridge,omitempty"`
	TspEnabled                   *bool                                  `json:"tsp_enabled,omitempty"`
	TspProvider                  *string                                `json:"tsp_provider,omitempty"`
}

type TspUpdateMultipartFormDataTspBridgeEnum string

const (
	TspUpdateMultipartFormDataTspBridgeEnumUsTspTb TspUpdateMultipartFormDataTspBridgeEnum = "US_TSP_TB"
	TspUpdateMultipartFormDataTspBridgeEnumEuTspTb TspUpdateMultipartFormDataTspBridgeEnum = "EU_TSP_TB"
)

type TspUpdateMultipartFormData struct {
	DialInNumberUnrestricted     *bool                                    `multipartForm:"name=dial_in_number_unrestricted"`
	Enable                       *bool                                    `multipartForm:"name=enable"`
	MasterAccountSettingExtended *bool                                    `multipartForm:"name=master_account_setting_extended"`
	ModifyCredentialForbidden    *bool                                    `multipartForm:"name=modify_credential_forbidden"`
	TspBridge                    *TspUpdateMultipartFormDataTspBridgeEnum `multipartForm:"name=tsp_bridge"`
	TspEnabled                   *bool                                    `multipartForm:"name=tsp_enabled"`
	TspProvider                  *string                                  `multipartForm:"name=tsp_provider"`
}

type TspUpdateRequests struct {
	Object  *TspUpdateApplicationJSON   `request:"mediaType=application/json"`
	Object1 *TspUpdateMultipartFormData `request:"mediaType=multipart/form-data"`
}

type TspUpdateRequest struct {
	Request TspUpdateRequests
}

type TspUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
