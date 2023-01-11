import requests
from typing import Optional
from sdk.models import operations
from . import utils

class ResourcesAPI:
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

    
    def resources_api_get_list(self, request: operations.ResourcesAPIGetListRequest) -> operations.ResourcesAPIGetListResponse:
        r"""Gets a number of resource sets for a specific culture.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/resources/{cultureCode}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ResourcesAPIGetListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, str]]])
                res.resources_api_get_list_200_application_json_object = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, str]]])
                res.resources_api_get_list_200_text_json_object = out

        return res

    