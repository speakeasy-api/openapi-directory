package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type ChatMessages struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewChatMessages(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ChatMessages {
	return &ChatMessages{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeleteChatMessage - Delete a message
// Delete a chat message that you previously sent to a contact or a channel. In the query parameter, you must provide either of the following:<br>
// * `to_contact`: The email address of the contact to whom you sent the message. Use this parameter to delete a message sent to an individual contact in Zoom.
// * `to_channel`: The channel ID of the channel where you sent the message. Use this parameter to delete a message sent to a channel in Zoom.
//
// <p style="background-color:#e1f5fe; color:#01579b; padding:8px"> <b>Note: </b> For an<b> account-level</b> <a href="https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app">OAuth app</a>, this API can only be used on behalf of a user who is assigned with a <b><a href="https://support.zoom.us/hc/en-us/articles/115001078646-Using-role-management#:~:text=Each%20user%20in%20a%20Zoom,owner%2C%20administrator%2C%20or%20member.&text=Role%2Dbased%20access%20control%20enables,needs%20to%20view%20or%20edit."> role</a> that has Edit permission for Chat Messages</b>.</p>
//
// **Scope:** `chat_message:write`, `chat_message:write:admin`<br>
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
func (s *ChatMessages) DeleteChatMessage(ctx context.Context, request operations.DeleteChatMessageRequest) (*operations.DeleteChatMessageResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/chat/users/{userId}/messages/{messageId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.DeleteChatMessageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// EditMessage - Update a message
// Each chat message has a unique identifier. Use this API to edit a chat message that you previously sent to either a contact or a channel in Zoom by providing the ID of the message as the value of the `messageId` parameter. The ID can be retrieved from List User's Chat Messages API. Additionally, as a query parameter, you must provide either the **email address** of the contact or the **Channel ID** of the channel where the message was sent.
//
// **Scope:** `chat_message:write`,`chat_message:write:admin`	<br>
// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
//
// </b> For an<b> account-level</b> <a href="https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app">OAuth app</a>, this API can only be used on behalf of a user who is assigned with a <b><a href="https://support.zoom.us/hc/en-us/articles/115001078646-Using-role-management#:~:text=Each%20user%20in%20a%20Zoom,owner%2C%20administrator%2C%20or%20member.&text=Role%2Dbased%20access%20control%20enables,needs%20to%20view%20or%20edit."> role</a> that has Edit permission for Chat Messages</b>.</p>
// **Scope:** `chat_message:write`, `chat_message:write:admin`<br>
func (s *ChatMessages) EditMessage(ctx context.Context, request operations.EditMessageRequest) (*operations.EditMessageResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/chat/users/{userId}/messages/{messageId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
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

	res := &operations.EditMessageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 404:
	}

	return res, nil
}

// GetChatMessages - List user's chat messages
// A Zoom user can have conversations with other Zoom users via chat. Use this API to list the current user's chat messages between the user and an individual contact or a chat channel.<br> In the query parameter, you must provide either of the following:<br>
// * `to_contact`: The email address of the contact with whom the user conversed by sending/receiving messages.
// * `to_channel`: The channel ID of the channel to/from which the user has sent and/or received messages.
//
// <br> **Specify a date** in the `date` query parameter to view messages from that date. If a date is not provided, the default value for the query will be the **current date**.<br>
// <p style="background-color:#e1f5fe; color:#01579b; padding:8px"> <b>Note: </b> For an<b> account-level</b> <a href="https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app">OAuth app</a>, this API can only be used on behalf of a user who is assigned with a <a href="https://support.zoom.us/hc/en-us/articles/115001078646-Using-role-management#:~:text=Each%20user%20in%20a%20Zoom,owner%2C%20administrator%2C%20or%20member.&text=Role%2Dbased%20access%20control%20enables,needs%20to%20view%20or%20edit.">role</a> that has <b>View or Edit</b> permission for Chat Messages.</p><br>
//
// <br>**Scopes:** `chat_message:read`, `chat_message:read:admin`<br>
//
//	**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
func (s *ChatMessages) GetChatMessages(ctx context.Context, request operations.GetChatMessagesRequest) (*operations.GetChatMessagesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/chat/users/{userId}/messages", request.PathParams)

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

	res := &operations.GetChatMessagesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetChatMessages200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetChatMessages200ApplicationJSONObject = out
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

// SendaChatMessage - Send a chat message
// Send chat messages on Zoom to either an individual user who is in your contact list or to a [channel](https://support.zoom.us/hc/en-us/articles/200912909-Getting-Started-With-Channels-Group-Messaging-) of which you are a member. To send a message to a contact, provide the contact's email address in the `to_contact` field. Similary, to send a message to a channel, provide the Channel Id of the Channel in `to_channel` field.<br>
// <br>**Scopes:** `chat_message:write`, `chat_message:write:admin`<br>
// **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br> <p style="background-color:#e1f5fe; color:#01579b; padding:8px"> <b>Note: </b> For an<b> account-level</b> <a href="https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app">OAuth app</a>, this API can only be used on behalf of a user who is assigned with a <b><a href="https://support.zoom.us/hc/en-us/articles/115001078646-Using-role-management#:~:text=Each%20user%20in%20a%20Zoom,owner%2C%20administrator%2C%20or%20member.&text=Role%2Dbased%20access%20control%20enables,needs%20to%20view%20or%20edit."> role</a> that has Edit permission for Chat Messages</b>.</p>
func (s *ChatMessages) SendaChatMessage(ctx context.Context, request operations.SendaChatMessageRequest) (*operations.SendaChatMessageResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/chat/users/{userId}/messages", request.PathParams)

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

	res := &operations.SendaChatMessageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.SendaChatMessage201ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SendaChatMessage201ApplicationJSONObject = out
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
