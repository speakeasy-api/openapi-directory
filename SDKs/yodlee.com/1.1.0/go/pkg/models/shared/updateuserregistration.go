package shared

type UpdateUserRegistration struct {
	Address     *UserAddress            `json:"address,omitempty"`
	Email       *string                 `json:"email,omitempty"`
	Name        *Name                   `json:"name,omitempty"`
	Preferences *UserRequestPreferences `json:"preferences,omitempty"`
	SegmentName *string                 `json:"segmentName,omitempty"`
}
