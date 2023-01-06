package shared

type PostReconcileRefundRequestActionEnum string

const (
	POSTReconcileRefundRequestActionEnumSettle PostReconcileRefundRequestActionEnum = "settle"
	POSTReconcileRefundRequestActionEnumReject PostReconcileRefundRequestActionEnum = "reject"
)

type PostReconcileRefundRequest struct {
	Action                      *PostReconcileRefundRequestActionEnum `json:"action,omitempty"`
	ActionDate                  *string                               `json:"actionDate,omitempty"`
	GatewayReconciliationReason *string                               `json:"gatewayReconciliationReason,omitempty"`
	GatewayReconciliationStatus *string                               `json:"gatewayReconciliationStatus,omitempty"`
	PayoutID                    *string                               `json:"payoutId,omitempty"`
}
