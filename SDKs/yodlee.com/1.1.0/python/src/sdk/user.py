import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class User:
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

    
    def get_access_tokens(self, request: operations.GetAccessTokensRequest) -> operations.GetAccessTokensResponse:
        r"""Get Access Tokens
        The Get Access Tokens service is used to retrieve the access tokens for the application id(s) provided.<br>URL in the response can be used to launch the application for which token is requested.<br><br><b>Note:</b> <li>This endpoint is deprecated for customers using the API Key-based authentication and is applicable only to customers who use the SAML-based authentication.<br>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/accessTokens"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccessTokensResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserAccessTokensResponse])
                res.user_access_tokens_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_user(self) -> operations.GetUserResponse:
        r"""Get User Details
        The get user details service is used to get the user profile information and the application preferences set at the time of user registration.<br>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserDetailResponse])
                res.user_detail_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def register_user(self, request: operations.RegisterUserRequest) -> operations.RegisterUserResponse:
        r"""Register User
        The register user service is used to register a user in Yodlee.<br>The loginName cannot include spaces and must be between 3 and 150 characters.<br>locale passed must be one of the supported locales for the customer. <br>Currency provided in the input will be respected in the derived services and the amount fields in the response will be provided in the preferred currency.<br>userParam is accepted as a body parameter. <br><br><b>Note:</b> <li>The content type has to be passed as application/json for the body parameter.</li>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/register"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RegisterUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserResponse])
                res.user_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.YodleeError])
                res.yodlee_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def saml_login(self, request: operations.SamlLoginRequest) -> operations.SamlLoginResponse:
        r"""Saml Login
        The SAML login service is used to authenticate system users with a SAML response.<br>A new user will be created with the input provided if that user isn't already in the system.<br>For existing users, the system will make updates based on changes or new information.<br>When authentication is successful, a user session token is returned.<br><br><b>Note:</b> <li>The content type has to be passed as application/x-www-form-urlencoded. <li>issuer, source and samlResponse should be passed as body parameters.</li>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/samlLogin"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SamlLoginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserResponse])
                res.user_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.YodleeError])
                res.yodlee_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def unregister(self) -> operations.UnregisterResponse:
        r"""Delete User
        The delete user service is used to delete or unregister a user from Yodlee. <br>Once deleted, the information related to the users cannot be retrieved. <br>The HTTP response code is 204 (Success without content)<br>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/unregister"
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnregisterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_user(self, request: operations.UpdateUserRequest) -> operations.UpdateUserResponse:
        r"""Update User Details
        The update user details service is used to update user details like name, address, currency preference, etc.<br>Currency provided in the input will be respected in the <a href=\"https://developer.yodlee.com/api-reference#tag/Derived\">derived</a> services and the amount fields in the response will be provided in the preferred currency.<br>The HTTP response code is 204 (Success without content). <br>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def user_logout(self) -> operations.UserLogoutResponse:
        r"""User Logout
        <b>Deprecated</b>: This endpoint is deprecated for API Key-based authentication. The user logout service allows the user to log out of the application.<br>The service does not return a response body. The HTTP response code is 204 (Success with no content).<br>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/logout"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserLogoutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    