import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class ServicePrincipalsByAppID:
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

    
    def applications_get_service_principals_id_by_app_id(self, request: operations.ApplicationsGetServicePrincipalsIDByAppIDRequest) -> operations.ApplicationsGetServicePrincipalsIDByAppIDResponse:
        r"""Gets an object id for a given application id from the current tenant.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/servicePrincipalsByAppId/{applicationID}/objectId", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ApplicationsGetServicePrincipalsIDByAppIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServicePrincipalObjectResult])
                res.service_principal_object_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServicePrincipalObjectResult])
                res.service_principal_object_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    