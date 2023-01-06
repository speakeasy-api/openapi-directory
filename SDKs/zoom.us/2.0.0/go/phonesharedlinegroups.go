package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
	"strings"
)

type PhoneSharedLineGroups struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewPhoneSharedLineGroups(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *PhoneSharedLineGroups {
	return &PhoneSharedLineGroups{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// AddMembersToSharedLineGroup - Add members to a shared line group
// A [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792) allows Zoom Phone admins to share a phone number and extension with a group of phone users or common area phones. This gives members of the shared line group access to the group's direct phone number and voicemail. Use this API to [add members](https://support.zoom.us/hc/en-us/articles/360038850792-Setting-up-shared-line-groups#h_7cb42370-48f6-4a8f-84f4-c6eee4d9f0ca) to a Shared Line Group. Note that a member can only be added to one shared line group.
//
// **Prerequisties:** <br>
// * Pro or higher account with Zoom Phone license.
// * A valid Shared Line Group
// * Account owner or admin privileges
//
// **Scopes:** `phone:write:admin`
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
func (s *PhoneSharedLineGroups) AddMembersToSharedLineGroup(ctx context.Context, request operations.AddMembersToSharedLineGroupRequest) (*operations.AddMembersToSharedLineGroupResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/phone/shared_line_groups/{sharedLineGroupId}/members", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AddMembersToSharedLineGroupResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AddMembersToSharedLineGroup201ApplicationJSONAny = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// AssignPhoneNumbersSlg - Assign phone numbers
// Use this API to assign phone numbers to a shared line groups. These direct phone numbers will be shared among members of the [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792-Setting-up-shared-line-groups).
// **Prerequisties:** <br>
// * Pro or higher account with Zoom Phone license.
// * A valid Shared Line Group
// * Account owner or admin privileges
//
// **Scopes:** `phone:write:admin`
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
func (s *PhoneSharedLineGroups) AssignPhoneNumbersSlg(ctx context.Context, request operations.AssignPhoneNumbersSlgRequest) (*operations.AssignPhoneNumbersSlgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/phone/shared_line_groups/{sharedLineGroupId}/phone_numbers", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AssignPhoneNumbersSlgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// CreateASharedLineGroup - Create a shared line group
// A [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792) allows Zoom Phone admins to share a phone number and extension with a group of phone users or common area phones. This gives members of the shared line group access to the group's direct phone number and voicemail. Use this API to create a shared line group.
//
// **Prerequisties:** <br>
// * Pro or higher account with Zoom Phone license.
// * Account owner or admin privileges
//
// **Scopes:** `phone:write:admin`
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
func (s *PhoneSharedLineGroups) CreateASharedLineGroup(ctx context.Context, request operations.CreateASharedLineGroupRequest) (*operations.CreateASharedLineGroupResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/phone/shared_line_groups"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateASharedLineGroupResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateASharedLineGroup200ApplicationJSONAny = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// DeleteAMemberSlg - Unassign a member from a shared line group
// Members of the [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792) have access to the group's phone number and voicemail. Use this API to unassign **a specific member** from a Shared Line Group.
// **Prerequisties:** <br>
// * Pro or higher account with Zoom Phone license.
// * A valid Shared Line Group
// * Account owner or admin privileges
//
// **Scopes:** `phone:write:admin`
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
func (s *PhoneSharedLineGroups) DeleteAMemberSlg(ctx context.Context, request operations.DeleteAMemberSlgRequest) (*operations.DeleteAMemberSlgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/phone/shared_line_groups/{sharedLineGroupId}/members/{memberId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteAMemberSlgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// DeleteAPhoneNumberSlg - Unassign a phone number
// Use this API to unassign a specific phone number that was assigned to the [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792-Setting-up-shared-line-groups).
// **Prerequisties:** <br>
// * Pro or higher account with Zoom Phone license.
// * A valid Shared Line Group
// * Account owner or admin privileges
//
// **Scopes:** `phone:write:admin`
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
func (s *PhoneSharedLineGroups) DeleteAPhoneNumberSlg(ctx context.Context, request operations.DeleteAPhoneNumberSlgRequest) (*operations.DeleteAPhoneNumberSlgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/phone/shared_line_groups/{sharedLineGroupId}/phone_numbers/{phoneNumberId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteAPhoneNumberSlgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// DeleteASharedLineGroup - Delete a shared line group
// A [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792) allows Zoom Phone admins to share a phone number and extension with a group of phone users or common area phones. Use this API to delete a Shared Line Group.
// **Prerequisties:** <br>
// * Pro or higher account with Zoom Phone license.
// * Account owner or admin privileges
//
// **Scopes:** `phone:write:admin`
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
func (s *PhoneSharedLineGroups) DeleteASharedLineGroup(ctx context.Context, request operations.DeleteASharedLineGroupRequest) (*operations.DeleteASharedLineGroupResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/phone/shared_line_groups/{sharedLineGroupId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteASharedLineGroupResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DeleteASharedLineGroup204ApplicationJSONAny = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// DeleteMembersOfSlg - Unassign members of a shared line group
// Members of the [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792) have access to the group's phone number and voicemail. Use this API to unassign **all** the existing members from a Shared Line Group.
// **Prerequisties:** <br>
// * Pro or higher account with Zoom Phone license.
// * A valid Shared Line Group
// * Account owner or admin privileges
//
// **Scopes:** `phone:write:admin`
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
func (s *PhoneSharedLineGroups) DeleteMembersOfSlg(ctx context.Context, request operations.DeleteMembersOfSlgRequest) (*operations.DeleteMembersOfSlgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/phone/shared_line_groups/{sharedLineGroupId}/members", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteMembersOfSlgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DeleteMembersOfSLG204ApplicationJSONAny = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	}

	return res, nil
}

// GetASharedLineGroup - Get a shared line group
// A [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792) allows Zoom Phone admins to share a phone number and extension with a group of phone users or common area phones. This gives members of the shared line group access to the group's direct phone number and voicemail. Use this API to list all the Shared Line Groups.
//
// **Prerequisties:** <br>
// * Pro or higher account with Zoom Phone license.
// * Account owner or admin privileges
//
// **Scopes:** `phone:read:admin` or `phone:write:admin`
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
func (s *PhoneSharedLineGroups) GetASharedLineGroup(ctx context.Context, request operations.GetASharedLineGroupRequest) (*operations.GetASharedLineGroupResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/phone/shared_line_groups/{sharedLineGroupId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetASharedLineGroupResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetASharedLineGroup200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetASharedLineGroup200ApplicationJSONObject = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// ListSharedLineGroups - List shared line groups
// A [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792) allows Zoom Phone admins to share a phone number and extension with a group of phone users or common area phones. This gives members of the shared line group access to the group's direct phone number and voicemail. Use this API to list all the Shared Line Groups.
//
// **Prerequisties:** <br>
// * Pro or higher account with Zoom Phone license.
// * Account owner or admin privileges  <br>
//
// **Scopes:** `phone:read:admin`, `phone:write:admin`
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
func (s *PhoneSharedLineGroups) ListSharedLineGroups(ctx context.Context, request operations.ListSharedLineGroupsRequest) (*operations.ListSharedLineGroupsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/phone/shared_line_groups"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ListSharedLineGroupsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListSharedLineGroups200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListSharedLineGroups200ApplicationJSONObject = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// UpdateASharedLineGroup - Update a shared line group
// A [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792) allows Zoom Phone admins to share a phone number and extension with a group of phone users or common area phones. This gives members of the shared line group access to the group's direct phone number and voicemail. Use this API to update information of a Shared Line Group.
// **Prerequisties:** <br>
// * Pro or higher account with Zoom Phone license.
// * Account owner or admin privileges
//
// **Scopes:** `phone:write:admin`
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
func (s *PhoneSharedLineGroups) UpdateASharedLineGroup(ctx context.Context, request operations.UpdateASharedLineGroupRequest) (*operations.UpdateASharedLineGroupResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/phone/shared_line_groups/{sharedLineGroupId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateASharedLineGroupResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UpdateASharedLineGroup204ApplicationJSONAny = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}
