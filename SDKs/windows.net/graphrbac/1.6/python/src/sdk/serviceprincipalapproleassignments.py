import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class ServicePrincipalAppRoleAssignments:
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

    
    def service_principals_list_app_role_assignments(self, request: operations.ServicePrincipalsListAppRoleAssignmentsRequest) -> operations.ServicePrincipalsListAppRoleAssignmentsResponse:
        r"""Applications that the service principal is assigned to.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/servicePrincipals/{objectId}/appRoleAssignments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicePrincipalsListAppRoleAssignmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppRoleAssignmentListResult])
                res.app_role_assignment_list_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppRoleAssignmentListResult])
                res.app_role_assignment_list_result = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GraphError])
                res.graph_error = out

        return res

    