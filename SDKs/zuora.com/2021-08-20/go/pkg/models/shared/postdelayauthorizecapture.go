package shared

type PostDelayAuthorizeCaptureMitTransactionSourceEnum string

const (
	POSTDelayAuthorizeCaptureMitTransactionSourceEnumCUnscheduled PostDelayAuthorizeCaptureMitTransactionSourceEnum = "C_Unscheduled"
	POSTDelayAuthorizeCaptureMitTransactionSourceEnumMRecurring   PostDelayAuthorizeCaptureMitTransactionSourceEnum = "M_Recurring"
	POSTDelayAuthorizeCaptureMitTransactionSourceEnumMUnscheduled PostDelayAuthorizeCaptureMitTransactionSourceEnum = "M_Unscheduled"
)

type PostDelayAuthorizeCapture struct {
	AccountID            string                                             `json:"accountId"`
	AccountNumber        string                                             `json:"accountNumber"`
	Amount               float64                                            `json:"amount"`
	GatewayOrderID       string                                             `json:"gatewayOrderId"`
	MitTransactionSource *PostDelayAuthorizeCaptureMitTransactionSourceEnum `json:"mitTransactionSource,omitempty"`
	SoftDescriptor       *string                                            `json:"softDescriptor,omitempty"`
	SoftDescriptorPhone  *string                                            `json:"softDescriptorPhone,omitempty"`
}
