import requests
from sdk.models import operations
from . import utils

class CurationTags:
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

    
    def get_get_curation_tags(self, request: operations.GetGetCurationTagsRequest) -> operations.GetGetCurationTagsResponse:
        r"""getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getCurationTags"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetCurationTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_curation_tags_by_name(self, request: operations.GetGetCurationTagsByNameRequest) -> operations.GetGetCurationTagsByNameResponse:
        r"""getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getCurationTagsByName"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetCurationTagsByNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_ontology_terms_by_pathway(self, request: operations.GetGetOntologyTermsByPathwayRequest) -> operations.GetGetOntologyTermsByPathwayResponse:
        r"""getOntologyTermsByPathway
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getOntologyTermsByPathway"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetOntologyTermsByPathwayResponse(status_code=r.status_code, content_type=content_type)
        
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

    