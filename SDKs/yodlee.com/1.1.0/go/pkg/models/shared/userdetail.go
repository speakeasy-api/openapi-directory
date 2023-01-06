package shared

type UserDetailRoleTypeEnum string

const (
	UserDetailRoleTypeEnumIndividual UserDetailRoleTypeEnum = "INDIVIDUAL"
)

type UserDetail struct {
	Address     *UserAddress             `json:"address,omitempty"`
	Email       *string                  `json:"email,omitempty"`
	ID          *int64                   `json:"id,omitempty"`
	LoginName   *string                  `json:"loginName,omitempty"`
	Name        *Name                    `json:"name,omitempty"`
	Preferences *UserResponsePreferences `json:"preferences,omitempty"`
	RoleType    *UserDetailRoleTypeEnum  `json:"roleType,omitempty"`
	SegmentName *string                  `json:"segmentName,omitempty"`
}
