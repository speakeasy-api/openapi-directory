package shared

type UserRoleTypeEnum string

const (
	UserRoleTypeEnumIndividual UserRoleTypeEnum = "INDIVIDUAL"
)

type User struct {
	ID          *int64                   `json:"id,omitempty"`
	LoginName   *string                  `json:"loginName,omitempty"`
	Name        *Name                    `json:"name,omitempty"`
	Preferences *UserResponsePreferences `json:"preferences,omitempty"`
	RoleType    *UserRoleTypeEnum        `json:"roleType,omitempty"`
	Session     *UserSession             `json:"session,omitempty"`
}
