package shared

// RampRequest
// Container of the ramp definitions. It is used to create, update, or remove the ramp definition for the new subscription.
type RampRequest struct {
	Charges     []RampChargeRequest   `json:"charges,omitempty"`
	Delete      *bool                 `json:"delete,omitempty"`
	Description *string               `json:"description,omitempty"`
	Intervals   []RampIntervalRequest `json:"intervals,omitempty"`
	Name        *string               `json:"name,omitempty"`
}
