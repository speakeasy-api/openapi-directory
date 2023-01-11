import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class SignedInUser:
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

    
    def signed_in_user_get(self, request: operations.SignedInUserGetRequest) -> operations.SignedInUserGetResponse:
        r"""Gets the details for the currently logged-in user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/me", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SignedInUserGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.user = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, dict[str, Any]]])
                res.user = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    
    def signed_in_user_list_owned_objects(self, request: operations.SignedInUserListOwnedObjectsRequest) -> operations.SignedInUserListOwnedObjectsResponse:
        r"""Get the list of directory objects that are owned by the user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/me/ownedObjects", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SignedInUserListOwnedObjectsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DirectoryObjectListResult])
                res.directory_object_list_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DirectoryObjectListResult])
                res.directory_object_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    