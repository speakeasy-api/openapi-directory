import requests
from sdk.models import operations
from . import utils

class WriteCreateUpdateDelete:
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

    
    def get_remove_ontology_tag(self, request: operations.GetRemoveOntologyTagRequest) -> operations.GetRemoveOntologyTagResponse:
        r"""removeOntologyTag
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/removeOntologyTag"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRemoveOntologyTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_save_curation_tag(self, request: operations.GetSaveCurationTagRequest) -> operations.GetSaveCurationTagResponse:
        r"""saveCurationTag
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/saveCurationTag"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSaveCurationTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_save_ontology_tag(self, request: operations.GetSaveOntologyTagRequest) -> operations.GetSaveOntologyTagResponse:
        r"""saveOntologyTag
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/saveOntologyTag"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSaveOntologyTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_update_pathway(self, request: operations.GetUpdatePathwayRequest) -> operations.GetUpdatePathwayResponse:
        r"""updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/updatePathway"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUpdatePathwayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_create_pathway(self, request: operations.PostCreatePathwayRequest) -> operations.PostCreatePathwayResponse:
        r"""createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/createPathway"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreatePathwayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    