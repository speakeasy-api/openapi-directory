// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type UpdateLeaveApplicationSecurity struct {
	OAuth2 string `security:"scheme,type=oauth2,name=Authorization"`
}

type UpdateLeaveApplicationRequest struct {
	// Leave Application id for single object
	LeaveApplicationID string                         `pathParam:"style=simple,explode=false,name=LeaveApplicationID"`
	RequestBody        []shared.LeaveApplicationInput `request:"mediaType=application/json"`
	// Xero identifier for Tenant
	XeroTenantID string `header:"style=simple,explode=false,name=Xero-Tenant-Id"`
}

type UpdateLeaveApplicationResponse struct {
	ContentType string
	// A successful request
	LeaveApplications *shared.LeaveApplications
	StatusCode        int
	RawResponse       *http.Response
}
