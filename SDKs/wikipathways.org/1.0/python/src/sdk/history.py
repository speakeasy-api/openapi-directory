import requests
from sdk.models import operations
from . import utils

class History:
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

    
    def get_get_curation_tag_history(self, request: operations.GetGetCurationTagHistoryRequest) -> operations.GetGetCurationTagHistoryResponse:
        r"""getCurationTagHistory
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getCurationTagHistory"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetCurationTagHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_pathway_history(self, request: operations.GetGetPathwayHistoryRequest) -> operations.GetGetPathwayHistoryResponse:
        r"""getPathwayHistoryGet the revision history of a pathway.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getPathwayHistory"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetPathwayHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_recent_changes(self, request: operations.GetGetRecentChangesRequest) -> operations.GetGetRecentChangesResponse:
        r"""getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getRecentChanges"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetRecentChangesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    