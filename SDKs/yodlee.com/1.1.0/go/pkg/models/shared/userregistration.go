package shared

type UserRegistration struct {
	Address     *UserAddress            `json:"address,omitempty"`
	Email       *string                 `json:"email,omitempty"`
	LoginName   string                  `json:"loginName"`
	Name        *Name                   `json:"name,omitempty"`
	Preferences *UserRequestPreferences `json:"preferences,omitempty"`
	SegmentName *string                 `json:"segmentName,omitempty"`
}
