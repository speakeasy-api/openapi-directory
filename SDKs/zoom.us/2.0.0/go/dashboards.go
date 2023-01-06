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

type Dashboards struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewDashboards(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Dashboards {
	return &Dashboards{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DashboardCrc - Get CRC port usage
// A Cloud Room Connector allows H.323/SIP endpoints to connect to a Zoom meeting.
//
// Use this API to get the hour by hour CRC Port usage for a specified period of time. <aside class='notice'>We will provide the report for a maximum of one month. For example, if "from" is set to "2017-08-05" and "to" is set to "2017-10-10", we will adjust "from" to "2017-09-10".</aside><br><br>
// **Prerequisites:**<br>
// * Business, Education or API Plan.
// * Room Connector must be enabled on the account.<br><br>
// **Scopes:** `dashboard_crc:read:admin`<br>
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
func (s *Dashboards) DashboardCrc(ctx context.Context, request operations.DashboardCrcRequest) (*operations.DashboardCrcResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/metrics/crc"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DashboardCrcResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DashboardCrc200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DashboardCRC200ApplicationJSONObject = out
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

// DashboardClientFeedback - List Zoom meetings client feedback
// Retrieve survey results from [Zoom meetings client feedback](https://support.zoom.us/hc/en-us/articles/115005855266-End-of-Meeting-Feedback-Survey#h_e30d552b-6d8e-4e0a-a588-9ca8180c4dbf). <br> You can specify a monthly date range for the dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.
//
// **Prerequisites:**
// * Business or higher account
// * [Feedback to Zoom](https://support.zoom.us/hc/en-us/articles/115005838023) enabled.
//
// **Scope:** `account:read:admin`<br>
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
func (s *Dashboards) DashboardClientFeedback(ctx context.Context, request operations.DashboardClientFeedbackRequest) (*operations.DashboardClientFeedbackResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/metrics/client/feedback"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DashboardClientFeedbackResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DashboardClientFeedback200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DashboardClientFeedback200ApplicationJSONObject = out
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

// DashboardClientFeedbackDetail - Get zoom meetings client feedback
// Retrieve detailed information on a [Zoom meetings client feedback](https://support.zoom.us/hc/en-us/articles/115005855266-End-of-Meeting-Feedback-Survey#h_e30d552b-6d8e-4e0a-a588-9ca8180c4dbf). <br> You can specify a monthly date range for the dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.
//
// **Prerequisites:**
// * Business or higher account
// * [Feedback to Zoom](https://support.zoom.us/hc/en-us/articles/115005838023) enabled.
//
// **Scope:** `dashboard_home:read:admin`<br>
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
//
// `
func (s *Dashboards) DashboardClientFeedbackDetail(ctx context.Context, request operations.DashboardClientFeedbackDetailRequest) (*operations.DashboardClientFeedbackDetailResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/metrics/client/feedback/{feedbackId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DashboardClientFeedbackDetailResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DashboardClientFeedbackDetail200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DashboardClientFeedbackDetail200ApplicationJSONObject = out
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

// DashboardIm - Get IM metrics
// Get [metrics](https://support.zoom.us/hc/en-us/articles/204654719-Dashboard#h_cc7e9749-1c70-4afb-a9a2-9680654821e4) on how users are utilizing the Zoom Chat Client.<br><br> <br> You can specify a monthly date range for the dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.
// **Scope:** `dashboard_im:read:admin`<br>
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Resource-intensive`<br>
//
// **Prerequisites:**<br>
// * Business or a higher plan.
func (s *Dashboards) DashboardIm(ctx context.Context, request operations.DashboardImRequest) (*operations.DashboardImResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/metrics/im"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DashboardImResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DashboardIm200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DashboardIM200ApplicationJSONObject = out
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

// DashboardIssueDetailZoomRoom - Get issues of Zoom Rooms
// Get information about the issues that occured on the Top 25 **Zoom Rooms with issues** in an acount. <br> You can specify a monthly date range for the dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.
//
// **Scope:** `dashboard_home:read:admin`<br>
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
//
// **Prerequisites:** <br>
// * Business or a higher plan.
// * Zoom Room must be enabled in the account.
func (s *Dashboards) DashboardIssueDetailZoomRoom(ctx context.Context, request operations.DashboardIssueDetailZoomRoomRequest) (*operations.DashboardIssueDetailZoomRoomResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/metrics/issues/zoomrooms/{zoomroomId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DashboardIssueDetailZoomRoomResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DashboardIssueDetailZoomRoom200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DashboardIssueDetailZoomRoom200ApplicationJSONObject = out
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

// DashboardIssueZoomRoom - Get top 25 Zoom Rooms with issues
// Get information on top 25 Zoom Rooms with issues in a month. The month specified with the "from" and "to" range should fall within the last six months.<br>
// **Scope:** `dashboard_home:read:admin`<br>
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
//
// **Prerequisites:**<br>
// * Business or a higher plan.
// * Zoom Room must be enabled in the account.
func (s *Dashboards) DashboardIssueZoomRoom(ctx context.Context, request operations.DashboardIssueZoomRoomRequest) (*operations.DashboardIssueZoomRoomResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/metrics/issues/zoomrooms"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DashboardIssueZoomRoomResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DashboardIssueZoomRoom200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DashboardIssueZoomRoom200ApplicationJSONObject = out
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

// DashboardMeetingDetail - Get meeting details
// Get details on live or past meetings. This overview will show if features such as audio, video, screen sharing, and recording were being used in the meeting. You can also see the license types of each user on your account.<br> You can specify a monthly date range for the dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.  <br>
// **Scopes:** `dashboard_meetings:read:admin`<br>
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
//
// **Prerequisites:** <br>
// * Business or a higher plan.
func (s *Dashboards) DashboardMeetingDetail(ctx context.Context, request operations.DashboardMeetingDetailRequest) (*operations.DashboardMeetingDetailResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/metrics/meetings/{meetingId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DashboardMeetingDetailResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DashboardMeetingDetailMeetingMetrics
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MeetingMetrics = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 300:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// DashboardMeetingParticipantQos - Get meeting participant QoS
// Retrieve the quality of service for participants from live or past meetings. This data indicates the connection quality for sending/receiving video, audio, and shared content. If nothing is being sent or received at that time, no information will be shown in the fields. <br><br>
// **Scopes:** `dashboard_meetings:read:admin`<br>
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
func (s *Dashboards) DashboardMeetingParticipantQos(ctx context.Context, request operations.DashboardMeetingParticipantQosRequest) (*operations.DashboardMeetingParticipantQosResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/metrics/meetings/{meetingId}/participants/{participantId}/qos", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DashboardMeetingParticipantQosResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DashboardMeetingParticipantQosParticipantQos
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ParticipantQOS = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 300:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// DashboardMeetingParticipantShare - Get sharing/recording details
// Retrieve the sharing and recording details of participants from live or past meetings.<br>
// **Scopes:** `dashboard_meetings:read:admin`<br>
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
//
// **Prerequisites:** <br>
// * Business or a higher plan.
func (s *Dashboards) DashboardMeetingParticipantShare(ctx context.Context, request operations.DashboardMeetingParticipantShareRequest) (*operations.DashboardMeetingParticipantShareResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/metrics/meetings/{meetingId}/participants/sharing", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DashboardMeetingParticipantShareResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DashboardMeetingParticipantShare200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DashboardMeetingParticipantShare200ApplicationJSONObject = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 300:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// DashboardMeetingParticipants - List meeting participants
// Get a list of participants from live or past meetings.<br><br>
// If you do not provide the `type` query parameter, the default value will be set to `live` and thus, you will only see metrics for participants in a live meeting, if any meeting is currently being conducted. To view metrics on past meeting participants, provide the appropriate value for `type`. <br> You can specify a monthly date range for the dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.
//
// **Scopes:** `dashboard_meetings:read:admin`<br>
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
//
// **Prerequisites:** Business or a higher plan.
func (s *Dashboards) DashboardMeetingParticipants(ctx context.Context, request operations.DashboardMeetingParticipantsRequest) (*operations.DashboardMeetingParticipantsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/metrics/meetings/{meetingId}/participants", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DashboardMeetingParticipantsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DashboardMeetingParticipants200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DashboardMeetingParticipants200ApplicationJSONObject = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 300:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// DashboardMeetingParticipantsQos - List meeting participants QoS
// Get a list of meeting participants from live or past meetings along with the quality of service they recieve during the meeting such as connection quality for sending/receiving video, audio, and shared content.<br>If you do not provide the `type` query parameter, the default value will be set to `live` and thus, you will only see metrics for participants in a live meeting, if any meeting is currently being conducted. To view metrics on past meeting participants, provide the appropriate value for `type`.<br> <br> You can specify a monthly date range for the dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.<br><br>
// **Scopes:** `dashboard_meetings:read:admin`<br>
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
//
// **Prerequisites:** <br>
// * Business or a higher plan.
func (s *Dashboards) DashboardMeetingParticipantsQos(ctx context.Context, request operations.DashboardMeetingParticipantsQosRequest) (*operations.DashboardMeetingParticipantsQosResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/metrics/meetings/{meetingId}/participants/qos", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DashboardMeetingParticipantsQosResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DashboardMeetingParticipantsQosParticipantQosList
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ParticipantQOSList = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 300:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// DashboardMeetings - List meetings
// List total live or past meetings that occurred during a specified period of time. This overview will show if features such as audio, video, screen sharing, and recording were being used in the meeting. You can also see the license types of each user on your account.<br> You can specify a monthly date range for the dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.<br>
// **Scopes:** `dashboard_meetings:read:admin`<br>
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Resource-intensive`<br><br>
//
// **Prerequisites:** <br>
// * Business or a higher plan.<br><br>
func (s *Dashboards) DashboardMeetings(ctx context.Context, request operations.DashboardMeetingsRequest) (*operations.DashboardMeetingsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/metrics/meetings"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DashboardMeetingsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DashboardMeetings200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DashboardMeetings200ApplicationJSONObject = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 300:
	}

	return res, nil
}

// DashboardWebinarDetail - Get webinar details
// Retrieve details from live or past webinars.<br><br>
// **Scopes:** `dashboard_webinars:read:admin`<br>
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
//
// **Prerequisites:**<br>
// * Business, Education or API Plan with Webinar add-on.
func (s *Dashboards) DashboardWebinarDetail(ctx context.Context, request operations.DashboardWebinarDetailRequest) (*operations.DashboardWebinarDetailResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/metrics/webinars/{webinarId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DashboardWebinarDetailResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DashboardWebinarDetailWebinarMetrics
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.WebinarMetrics = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 300:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// DashboardWebinarParticipantQos - Get webinar participant QoS
// Retrieve details on the quality of service that participants from live or past webinars recieved.<br>This data indicates the connection quality for sending/receiving video, audio, and shared content. If nothing is being sent or received at that time, no information will be shown in the fields.<br>
// **Scopes:** `dashboard_webinars:read:admin`<br>
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy` <br>
//
// **Prerequisites:** <br>
// * Business, Education or API Plan with Zoom Rooms set up.
func (s *Dashboards) DashboardWebinarParticipantQos(ctx context.Context, request operations.DashboardWebinarParticipantQosRequest) (*operations.DashboardWebinarParticipantQosResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/metrics/webinars/{webinarId}/participants/{participantId}/qos", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DashboardWebinarParticipantQosResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DashboardWebinarParticipantQosParticipantQos
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ParticipantQOS = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 300:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// DashboardWebinarParticipantShare - Get sharing/recording details
// Retrieve the sharing and recording details of participants from live or past webinars. <br><br>
// **Scopes:** `dashboard_webinars:read:admin`<br>
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy` <br>
//
// **Prerequisites:**<br>
// * Business, Education or API Plan with Webinar add-on.
func (s *Dashboards) DashboardWebinarParticipantShare(ctx context.Context, request operations.DashboardWebinarParticipantShareRequest) (*operations.DashboardWebinarParticipantShareResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/metrics/webinars/{webinarId}/participants/sharing", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DashboardWebinarParticipantShareResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DashboardWebinarParticipantShare200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DashboardWebinarParticipantShare200ApplicationJSONObject = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 300:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// DashboardWebinarParticipants - Get webinar participants
// Retrieve details on participants from live or past webinars.<br><br>
// **Scopes:** `dashboard_webinars:read:admin`<br>
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
//
// **Prerequisites:**<br>
// * Business, Education or API Plan with Webinar add-on.
func (s *Dashboards) DashboardWebinarParticipants(ctx context.Context, request operations.DashboardWebinarParticipantsRequest) (*operations.DashboardWebinarParticipantsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/metrics/webinars/{webinarId}/participants", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DashboardWebinarParticipantsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DashboardWebinarParticipants200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DashboardWebinarParticipants200ApplicationJSONObject = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 300:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// DashboardWebinarParticipantsQos - List webinar participant QoS
// Retrieve a list of participants from live or past webinars and the quality of service they received.<br>This data indicates the connection quality for sending/receiving video, audio, and shared content. If nothing is being sent or received at that time, no information will be shown in the fields.<br>
// **Scopes:** `dashboard_webinars:read:admin`<br>
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
//
// **Prerequisites:**
// * Business, Education or API Plan with Webinar add-on.
func (s *Dashboards) DashboardWebinarParticipantsQos(ctx context.Context, request operations.DashboardWebinarParticipantsQosRequest) (*operations.DashboardWebinarParticipantsQosResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/metrics/webinars/{webinarId}/participants/qos", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DashboardWebinarParticipantsQosResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DashboardWebinarParticipantsQosParticipantQosList
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ParticipantQOSList = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 300:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// DashboardWebinars - List webinars
// List all the live or past webinars from a specified period of time. <br><br>
// **Scopes:** `dashboard_webinars:read:admin`<br>
// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Resource-intensive`<br>
// **Prerequisites:**<br>
// * Business, Education or API Plan with Webinar add-on.
func (s *Dashboards) DashboardWebinars(ctx context.Context, request operations.DashboardWebinarsRequest) (*operations.DashboardWebinarsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/metrics/webinars"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DashboardWebinarsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DashboardWebinars200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DashboardWebinars200ApplicationJSONObject = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 300:
	}

	return res, nil
}

// DashboardZoomRoom - Get Zoom Rooms details
// The Zoom Rooms dashboard metrics lets you know the type of configuration a Zoom room has and details on the meetings held in that room.
//
// Use this API to retrieve information on a specific room.<br><br>
// **Scopes:** `dashboard_zr:read:admin`<br> <br>
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`**Prerequisites:**<br>
//
// * Business, Education or API Plan with Zoom Rooms set up.
func (s *Dashboards) DashboardZoomRoom(ctx context.Context, request operations.DashboardZoomRoomRequest) (*operations.DashboardZoomRoomResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/metrics/zoomrooms/{zoomroomId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DashboardZoomRoomResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DashboardZoomRoomZoomRoom
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ZoomRoom = out
		case utils.MatchContentType(contentType, `application/xml`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 300:
	}

	return res, nil
}

// DashboardZoomRoomIssue - Get top 25 issues of Zoom Rooms
// Get top 25 issues of Zoom Rooms.<br>
// **Scopes:** `dashboard_zr:read:admin`<br>
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
//	**Prerequisites:**<br>
//
// * Business, Education or API Plan with Zoom Rooms set up.
func (s *Dashboards) DashboardZoomRoomIssue(ctx context.Context, request operations.DashboardZoomRoomIssueRequest) (*operations.DashboardZoomRoomIssueResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/metrics/zoomrooms/issues"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DashboardZoomRoomIssueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DashboardZoomRoomIssue200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DashboardZoomRoomIssue200ApplicationJSONObject = out
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

// DashboardZoomRooms - List Zoom Rooms
// List information on all Zoom Rooms in an account.<br><br>
// **Scopes:** `dashboard_zr:read:admin`
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Resource-intensive`<br>
//	**Prerequisites:**<br>
//
// * Business, Education or API Plan with Zoom Rooms set up.
func (s *Dashboards) DashboardZoomRooms(ctx context.Context, request operations.DashboardZoomRoomsRequest) (*operations.DashboardZoomRoomsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/metrics/zoomrooms"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DashboardZoomRoomsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DashboardZoomRoomsZoomRoomList
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ZoomRoomList = out
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

// GetCallLogMetricsDetails - Get call details from call log
// Call logs provide a record of all incoming and outgoing calls over Zoom Phone in an account.
//
// Use this API to list call log details of a specific call.
//
// **Prerequisites:**
// * Business, or Education account
// * Zoom Phone license <br><br>
//
// **Scopes:** `phone:read:admin`, `phone:write:admin`<br>
// **Rate Limit Label:** `Light`
func (s *Dashboards) GetCallLogMetricsDetails(ctx context.Context, request operations.GetCallLogMetricsDetailsRequest) (*operations.GetCallLogMetricsDetailsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/phone/metrics/call_logs/{call_id}", request.PathParams)

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

	res := &operations.GetCallLogMetricsDetailsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetCallLogMetricsDetails200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetCallLogMetricsDetails200ApplicationJSONObject = out
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

// GetCallQoS - Get call QoS
// Get call quality of service(QoS) data for a call made or received by a Zoom phone user in the account.
//
// **Prerequisites:**
// * Business, or Education account
// * Zoom Phone license <br><br>
// **Scopes:** `phone:read:admin`, `phone:write:admin`<br>
// **Rate Limit Label:** `Light`
func (s *Dashboards) GetCallQoS(ctx context.Context, request operations.GetCallQoSRequest) (*operations.GetCallQoSResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/phone/metrics/call_logs/{callId}/qos", request.PathParams)

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

	res := &operations.GetCallQoSResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetCallQoS200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetCallQoS200ApplicationJSONObject = out
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

// ListCallLogsMetrics - List call logs
// Call logs provide a record of all incoming and outgoing calls over Zoom Phone in an account.
//
// Use this API to list monthly call logs metrics. You can use query parameters to filter the response by date, site and MOS(Mean Opinion Score) of the call.
//
// **Prerequisites:**
// * Business, or Education account
// * Zoom Phone license <br><br>
//
// **Scopes:** `phone:read:admin`, `phone:write:admin`<br>
// **Rate Limit Label:** `Heavy`
func (s *Dashboards) ListCallLogsMetrics(ctx context.Context, request operations.ListCallLogsMetricsRequest) (*operations.ListCallLogsMetricsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/phone/metrics/call_logs"

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

	res := &operations.ListCallLogsMetricsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListCallLogsMetrics200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListCallLogsMetrics200ApplicationJSONObject = out
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

// ListMeetingSatisfaction - List client meeting satisfaction
// If the [End of Meeting Feedback Survey](https://support.zoom.us/hc/en-us/articles/115005855266) option is enabled, attendees will be prompted with a survey window where they can tap either the **Thumbs Up** or **Thumbs Down** button that indicates their Zoom meeting experience. With this API, you can get information on the attendees' meeting satisfaction. Specify a monthly date range for the query using the from and to query parameters. The month should fall within the last six months.
//
// To get information on the survey results with negative experiences (indicated by **Thumbs Down**), use the [Get Zoom Meetings Client Feedback API](https://marketplace.zoom.us/docs/api-reference/zoom-api/dashboards/dashboardclientfeedbackdetail).<br>
// **Scopes:** `dashboard:read:admin`<br>
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
func (s *Dashboards) ListMeetingSatisfaction(ctx context.Context, request operations.ListMeetingSatisfactionRequest) (*operations.ListMeetingSatisfactionResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/metrics/client/satisfaction"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ListMeetingSatisfactionResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ListMeetingSatisfaction200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListMeetingSatisfaction200ApplicationJSONObject = out
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

// ParticipantFeedback - Get post meeting feedback
// When a meeting ends, each attendee will be prompted to share their meeting experience by clicking either thumbs up or thumbs down. Use this API to retrieve the feedback submitted for a specific meeting. Note that this API only works for meetings scheduled after December 20, 2020.
//
// **Prerequisites:**
// * [Feedback to Zoom](https://support.zoom.us/hc/en-us/articles/115005838023) setting must be enabled by the participant prior to the meeting.
// * The user making the API request must be enrolled in a Business or a higher plan.
//
// <br> **Scope:** `dashboard_meetings:read:admiin`
//
// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
func (s *Dashboards) ParticipantFeedback(ctx context.Context, request operations.ParticipantFeedbackRequest) (*operations.ParticipantFeedbackResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/metrics/meetings/{meetingId}/participants/satisfaction", request.PathParams)

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

	res := &operations.ParticipantFeedbackResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ParticipantFeedback200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ParticipantFeedback200ApplicationJSONObject = out
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

// ParticipantWebinarFeedback - Get post webinar feedback
// When a Webinar ends, each attendee will be prompted to share their Webinar experience by clicking either thumbs up or thumbs down. Use this API to retrieve the feedback submitted for a specific webinar. Note that this API only works for meetings scheduled after December 20, 2020.
//
// **Prerequisites:**
// * [Feedback to Zoom](https://support.zoom.us/hc/en-us/articles/115005838023) setting must be enabled by the participant prior to the meeting.
// * The user making the API request must be enrolled in a Business or a higher plan.
//
// <br> **Scope:** `dashboard_webinars:read:admin`
//
// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
func (s *Dashboards) ParticipantWebinarFeedback(ctx context.Context, request operations.ParticipantWebinarFeedbackRequest) (*operations.ParticipantWebinarFeedbackResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/metrics/webinars/{webinarId}/participants/satisfaction", request.PathParams)

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

	res := &operations.ParticipantWebinarFeedbackResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ParticipantWebinarFeedback200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ParticipantWebinarFeedback200ApplicationJSONObject = out
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
