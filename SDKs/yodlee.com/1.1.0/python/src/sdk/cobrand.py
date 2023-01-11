import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Cobrand:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def cobrand_login(self, request: operations.CobrandLoginRequest) -> operations.CobrandLoginResponse:
        r"""Cobrand Login
        The cobrand login service authenticates a cobrand.<br>Cobrand session in the response includes the cobrand session token (cobSession) <br>which is used in subsequent API calls like registering or signing in the user. <br>The idle timeout for a cobrand session is 2 hours and the absolute timeout is 24 hours. This service can be <br>invoked to create a new cobrand session token. <br><b>Note:</b> This endpoint is deprecated for customers using the API Key-based authentication and is applicable only to customers who use the SAML-based authentication.<br>The content type has to be passed as application/json for the body parameter. <br>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cobrand/login"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CobrandLoginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CobrandLoginResponse])
                res.cobrand_login_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.YodleeError])
                res.yodlee_error = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.YodleeError])
                res.yodlee_error = out
        elif r.status_code == 404:
            pass

        return res

    
    def cobrand_logout(self) -> operations.CobrandLogoutResponse:
        r"""Cobrand Logout
        The cobrand logout service is used to log out the cobrand.<br>This service does not return a response. The HTTP response code is 204 (Success with no content).<br><b>Note:</b> This endpoint is deprecated for customers using the API Key-based authentication and is applicable only to customers who use the SAML-based authentication.<br>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cobrand/logout"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CobrandLogoutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def create_subscription_event(self, request: operations.CreateSubscriptionEventRequest) -> operations.CreateSubscriptionEventResponse:
        r"""Subscribe Event
        <b>Refer POST /configs/notifications/events/{eventName}.</b><br>The subscribe events service is used to subscribe to an event for receiving notifications.<br>The callback URL, where the notification will be posted should be provided to this service.<br>If the callback URL is invalid or inaccessible, the subscription will be unsuccessful, and an error will be thrown.<br>Customers can subscribe to REFRESH,DATA_UPDATES and AUTO_REFRESH_UPDATES event.<br><br><b>Notes</b>:<br>This service is not available in developer sandbox/test environment and will be made available for testing in your dedicated environment, once the contract is signed.<br>The content type has to be passed as application/json for the body parameter.<br>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/cobrand/config/notifications/events/{eventName}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSubscriptionEventResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.YodleeError])
                res.yodlee_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_subscribed_event(self, request: operations.DeleteSubscribedEventRequest) -> operations.DeleteSubscribedEventResponse:
        r"""Delete Subscription
        <b>Refer DELETE /configs/notifications/events/{eventName}.</b><br>The delete events service is used to unsubscribe from an events service.<br>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/cobrand/config/notifications/events/{eventName}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSubscribedEventResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.YodleeError])
                res.yodlee_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_public_key(self) -> operations.GetPublicKeyResponse:
        r"""Get Public Key
        <b>Refer GET /configs/publicKey.</b><br>The get public key service provides the customer the public key that should be used to encrypt the user credentials before sending it to Yodlee.<br>This endpoint is useful only for PKI enabled.<br>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cobrand/publicKey"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPublicKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CobrandPublicKeyResponse])
                res.cobrand_public_key_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_subscribed_events(self, request: operations.GetSubscribedEventsRequest) -> operations.GetSubscribedEventsResponse:
        r"""Get Subscribed Events
        <b>Refer GET /configs/notifications/events.</b><br>The get events service provides the list of events for which consumers subscribed <br>to receive notifications. <br>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cobrand/config/notifications/events"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubscribedEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CobrandNotificationResponse])
                res.cobrand_notification_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_subscribed_event(self, request: operations.UpdateSubscribedEventRequest) -> operations.UpdateSubscribedEventResponse:
        r"""Update Subscription
        <b>Refer PUT /configs/notifications/events/{eventName}.</b><br>The update events service is used to update the callback URL.<br>If the callback URL is invalid or inaccessible, the subscription will be unsuccessful, and an error will be thrown.<br><b>Note:</b> The content type has to be passed as application/json for the body parameter. <br>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/cobrand/config/notifications/events/{eventName}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSubscribedEventResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.YodleeError])
                res.yodlee_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    