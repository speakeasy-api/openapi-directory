package shared

type GetPaymentRunDataArrayResponse struct {
	Data    []GetPaymentRunDataElementResponse `json:"data,omitempty"`
	Success *bool                              `json:"success,omitempty"`
}
