package operations

type AssignSipTrunksPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type AssignSipTrunksApplicationJSONSipTrunks struct {
	Dnis             *string `json:"dnis,omitempty"`
	ID               *string `json:"id,omitempty"`
	OutboundCallerID *string `json:"outbound_caller_id,omitempty"`
}

type AssignSipTrunksApplicationJSON struct {
	SipTrunks []AssignSipTrunksApplicationJSONSipTrunks `json:"sip_trunks,omitempty"`
}

type AssignSipTrunksMultipartFormDataSipTrunks struct {
	Dnis             *string `json:"dnis,omitempty"`
	ID               *string `json:"id,omitempty"`
	OutboundCallerID *string `json:"outbound_caller_id,omitempty"`
}

type AssignSipTrunksMultipartFormData1 struct {
	SipTrunks []AssignSipTrunksMultipartFormDataSipTrunks `multipartForm:"name=sip_trunks,json"`
}

type AssignSipTrunksRequests struct {
	Object  *AssignSipTrunksApplicationJSON    `request:"mediaType=application/json"`
	Object1 *AssignSipTrunksMultipartFormData1 `request:"mediaType=multipart/form-data"`
}

type AssignSipTrunks201ApplicationJSONSipTrunks struct {
	Dnis             *string `json:"dnis,omitempty"`
	ID               *string `json:"id,omitempty"`
	Name             *string `json:"name,omitempty"`
	NumberPrefix     *string `json:"number_prefix,omitempty"`
	SipServerAddress *string `json:"sip_server_address,omitempty"`
}

type AssignSipTrunks201ApplicationJSON struct {
	SipTrunks []AssignSipTrunks201ApplicationJSONSipTrunks `json:"sip_trunks,omitempty"`
}

type AssignSipTrunksRequest struct {
	PathParams AssignSipTrunksPathParams
	Request    *AssignSipTrunksRequests
}

type AssignSipTrunksResponse struct {
	Body                                    []byte
	ContentType                             string
	StatusCode                              int64
	AssignSIPTrunks201ApplicationJSONObject *AssignSipTrunks201ApplicationJSON
}
