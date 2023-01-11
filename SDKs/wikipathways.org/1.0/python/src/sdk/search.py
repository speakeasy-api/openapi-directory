import requests
from sdk.models import operations
from . import utils

class Search:
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

    
    def get_find_interactions(self, request: operations.GetFindInteractionsRequest) -> operations.GetFindInteractionsResponse:
        r"""findInteractionsFind interactions defined in WikiPathways pathways.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/findInteractions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFindInteractionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_find_pathways_by_literature(self, request: operations.GetFindPathwaysByLiteratureRequest) -> operations.GetFindPathwaysByLiteratureResponse:
        r"""findPathwaysByLiterature
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/findPathwaysByLiterature"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFindPathwaysByLiteratureResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_find_pathways_by_text(self, request: operations.GetFindPathwaysByTextRequest) -> operations.GetFindPathwaysByTextResponse:
        r"""findPathwaysByText
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/findPathwaysByText"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFindPathwaysByTextResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_find_pathways_by_xref(self, request: operations.GetFindPathwaysByXrefRequest) -> operations.GetFindPathwaysByXrefResponse:
        r"""findPathwaysByXref
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/findPathwaysByXref"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFindPathwaysByXrefResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_remove_curation_tag(self, request: operations.GetRemoveCurationTagRequest) -> operations.GetRemoveCurationTagResponse:
        r"""removeCurationTagRemove a curation tag from a pathway.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/removeCurationTag"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRemoveCurationTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    