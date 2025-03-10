"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations

class Search:
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
        
    def get_find_interactions(self, request: operations.GetFindInteractionsRequest) -> operations.GetFindInteractionsResponse:
        r"""findInteractionsFind interactions defined in WikiPathways pathways."""
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/findInteractions'
        
        query_params = utils.get_query_params(operations.GetFindInteractionsRequest, request)
        
        client = self._client
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetFindInteractionsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        

        return res

    def get_find_pathways_by_literature(self, request: operations.GetFindPathwaysByLiteratureRequest) -> operations.GetFindPathwaysByLiteratureResponse:
        r"""findPathwaysByLiterature"""
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/findPathwaysByLiterature'
        
        query_params = utils.get_query_params(operations.GetFindPathwaysByLiteratureRequest, request)
        
        client = self._client
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetFindPathwaysByLiteratureResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        

        return res

    def get_find_pathways_by_text(self, request: operations.GetFindPathwaysByTextRequest) -> operations.GetFindPathwaysByTextResponse:
        r"""findPathwaysByText"""
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/findPathwaysByText'
        
        query_params = utils.get_query_params(operations.GetFindPathwaysByTextRequest, request)
        
        client = self._client
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetFindPathwaysByTextResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        

        return res

    def get_find_pathways_by_xref(self, request: operations.GetFindPathwaysByXrefRequest) -> operations.GetFindPathwaysByXrefResponse:
        r"""findPathwaysByXref"""
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/findPathwaysByXref'
        
        query_params = utils.get_query_params(operations.GetFindPathwaysByXrefRequest, request)
        
        client = self._client
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetFindPathwaysByXrefResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        

        return res

    def get_remove_curation_tag(self, request: operations.GetRemoveCurationTagRequest) -> operations.GetRemoveCurationTagResponse:
        r"""removeCurationTagRemove a curation tag from a pathway."""
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/removeCurationTag'
        
        query_params = utils.get_query_params(operations.GetRemoveCurationTagRequest, request)
        
        client = self._client
        
        http_res = client.request('GET', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetRemoveCurationTagResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        

        return res

    