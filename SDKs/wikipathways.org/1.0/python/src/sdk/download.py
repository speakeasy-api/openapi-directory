import requests
from sdk.models import operations
from . import utils

class Download:
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

    
    def get_get_colored_pathway(self, request: operations.GetGetColoredPathwayRequest) -> operations.GetGetColoredPathwayResponse:
        r"""getColoredPathwayGet a colored image version of the pathway.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getColoredPathway"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetColoredPathwayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_pathway_as(self, request: operations.GetGetPathwayAsRequest) -> operations.GetGetPathwayAsResponse:
        r"""getPathwayAsDownload a pathway in the specified file format.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getPathwayAs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetPathwayAsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_xref_list(self, request: operations.GetGetXrefListRequest) -> operations.GetGetXrefListResponse:
        r"""getXrefList
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getXrefList"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetXrefListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    