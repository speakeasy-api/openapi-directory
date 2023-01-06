package shared

type PostVoidAuthorizeResponse struct {
	GatewayOrderID *string `json:"gatewayOrderId,omitempty"`
	ResultCode     *string `json:"resultCode,omitempty"`
	ResultMessage  *string `json:"resultMessage,omitempty"`
	Success        *bool   `json:"success,omitempty"`
	TransactionID  *string `json:"transactionId,omitempty"`
}
