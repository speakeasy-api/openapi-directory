package operations

type ListSipTrunksPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type ListSipTrunks200ApplicationJSONSipTrunks struct {
	Dnis             *string `json:"dnis,omitempty"`
	ID               *string `json:"id,omitempty"`
	Name             *string `json:"name,omitempty"`
	NumberPrefix     *string `json:"number_prefix,omitempty"`
	OutboundCallerID *string `json:"outbound_caller_id,omitempty"`
	SipServerAddress *string `json:"sip_server_address,omitempty"`
}

type ListSipTrunks200ApplicationJSON struct {
	SipTrunks    []ListSipTrunks200ApplicationJSONSipTrunks `json:"sip_trunks,omitempty"`
	TotalRecords *int64                                     `json:"total_records,omitempty"`
}

type ListSipTrunksRequest struct {
	PathParams ListSipTrunksPathParams
}

type ListSipTrunksResponse struct {
	Body                                  []byte
	ContentType                           string
	StatusCode                            int64
	ListSIPTrunks200ApplicationJSONObject *ListSipTrunks200ApplicationJSON
}
