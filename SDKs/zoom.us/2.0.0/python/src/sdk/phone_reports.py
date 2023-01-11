import requests
from typing import Optional
from sdk.models import operations
from . import utils

class PhoneReports:
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

    
    def get_ps_operation_logs(self, request: operations.GetPsOperationLogsRequest) -> operations.GetPsOperationLogsResponse:
        r"""Get operation logs report
        The **Phone System operation logs report** allows account owners and admins to view monthly Zoom phone related admin operation details. 
        
        Use this API to retrieve the **Phone System Operation Logs Report**. Account owners and admins can also access this information by logging into their Zoom accounts and navigating to [Phone System Operation Logs](https://zoom.us/pbx/page/report/operations#/report/operation-logs).<br><br> **Scopes:** `phone:read:admin`, `phone:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
        <br> **Prerequisites:** <br>
        * Account must be enrollled in Pro or a higher plan
        * Account must be enrolled in a [Zoom Phone](https://zoom.us/pricing/zoom-phone) plan
        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/phone/reports/operationlogs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPsOperationLogsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPsOperationLogs200ApplicationJSON])
                res.get_ps_operation_logs_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    