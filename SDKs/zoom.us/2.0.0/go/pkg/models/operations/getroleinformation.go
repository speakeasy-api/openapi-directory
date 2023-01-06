package operations

import (
	"openapi/pkg/models/shared"
)

type GetRoleInformationPathParams struct {
	RoleID string `pathParam:"style=simple,explode=false,name=roleId"`
}

type GetRoleInformationSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// GetRoleInformation200ApplicationJSONSubAccountPrivileges
// This field will only be displayed to accounts that are enrolled in a partner plan and follow the master accounts and sub accounts structure.
type GetRoleInformation200ApplicationJSONSubAccountPrivileges struct {
	SecondLevel *int64 `json:"second_level,omitempty"`
}

type GetRoleInformation200ApplicationJSON struct {
	Description          *string                                                   `json:"description,omitempty"`
	ID                   *string                                                   `json:"id,omitempty"`
	Name                 *string                                                   `json:"name,omitempty"`
	Privileges           []string                                                  `json:"privileges,omitempty"`
	SubAccountPrivileges *GetRoleInformation200ApplicationJSONSubAccountPrivileges `json:"sub_account_privileges,omitempty"`
	TotalMembers         *int64                                                    `json:"total_members,omitempty"`
}

type GetRoleInformationRequest struct {
	PathParams GetRoleInformationPathParams
	Security   GetRoleInformationSecurity
}

type GetRoleInformationResponse struct {
	Body                                       []byte
	ContentType                                string
	StatusCode                                 int64
	GetRoleInformation200ApplicationJSONObject *GetRoleInformation200ApplicationJSON
}
