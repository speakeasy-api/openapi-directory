import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class EntryTypesAPI:
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

    
    def entry_types_api_get_mapped_tag(self, request: operations.EntryTypesAPIGetMappedTagRequest) -> operations.EntryTypesAPIGetMappedTagResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/entry-types/{entryType}/{subType}/tag", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.EntryTypesAPIGetMappedTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagForAPIContract])
                res.tag_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagForAPIContract])
                res.tag_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagForAPIContract])
                res.tag_for_api_contract = out

        return res

    