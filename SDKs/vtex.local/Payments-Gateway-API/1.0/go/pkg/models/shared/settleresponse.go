// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type SettleResponse struct {
	CancelledValue         int    `json:"cancelledValue"`
	ConnectorRefundedValue int    `json:"connectorRefundedValue"`
	Message                string `json:"message"`
	ProcessingDate         string `json:"processingDate"`
	RefundedToken          string `json:"refundedToken"`
	RefundedValue          int    `json:"refundedValue"`
	Status                 int    `json:"status"`
	StatusDetail           string `json:"statusDetail"`
	Token                  string `json:"token"`
}
