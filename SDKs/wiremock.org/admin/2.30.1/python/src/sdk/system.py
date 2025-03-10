import requests
from sdk.models import operations
from . import utils

class System:
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

    
    def post_admin_reset(self) -> operations.PostAdminResetResponse:
        r"""Reset mappings and request journal
        Reset mappings to the default state and reset the request journal
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/__admin/reset"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAdminResetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_admin_settings(self, request: operations.PostAdminSettingsRequest) -> operations.PostAdminSettingsResponse:
        r"""Update global settings
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/__admin/settings"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAdminSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_admin_shutdown(self) -> operations.PostAdminShutdownResponse:
        r"""Shutdown the WireMock server
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/__admin/shutdown"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAdminShutdownResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    