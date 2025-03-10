"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations
from typing import Optional

class Pages:
    _client: requests_http.Session
    _security_client: requests_http.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests_http.Session, security_client: requests_http.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version
        
    def get_all_content_types(self, request: operations.GetAllContentTypesRequest) -> operations.GetAllContentTypesResponse:
        r"""Get all Content Types
        Gets data from all Content Types.
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetAllContentTypesRequest, base_url, '/_v/cms/api/{builderId}/', request)
        
        
        client = self._client
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetAllContentTypesResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.GetAllContentTypes200ApplicationJSON])
                res.get_all_content_types_200_application_json_object = out
        elif http_res.status_code in [404, 500]:
            pass

        return res

    def get_cm_spage(self, request: operations.GetCMSpageRequest) -> operations.GetCMSpageResponse:
        r"""Get CMS page
        Gets all data from a given page.
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetCMSpageRequest, base_url, '/_v/cms/api/{builderId}/{content-type}/{document-id}/', request)
        
        query_params = utils.get_query_params(operations.GetCMSpageRequest, request)
        
        client = self._client
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetCMSpageResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.GetCMSpage200ApplicationJSON])
                res.get_cm_spage_200_application_json_object = out
        elif http_res.status_code in [404, 500]:
            pass

        return res

    def get_pagesby_content_type(self, request: operations.GetPagesbyContentTypeRequest) -> operations.GetPagesbyContentTypeResponse:
        r"""Get all CMS pages by Content Type
        Gets data from all pages of a given Content Type.
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetPagesbyContentTypeRequest, base_url, '/_v/cms/api/{builderId}/{content-type}', request)
        
        query_params = utils.get_query_params(operations.GetPagesbyContentTypeRequest, request)
        
        client = self._client
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetPagesbyContentTypeResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.GetPagesbyContentType200ApplicationJSON])
                res.get_pagesby_content_type_200_application_json_object = out
        elif http_res.status_code in [404, 500]:
            pass

        return res

    