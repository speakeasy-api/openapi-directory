import requests
from sdk.models import operations
from . import utils

class HistoricalWeather:
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

    
    def get_visual_crossing_web_services_rest_services_weatherdata_history(self, request: operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest) -> operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse:
        r"""Retrieves hourly or daily historical weather records.
        The weather history data is suitable for retrieving hourly or daily historical weather records.
        """
        
        base_url = operations.GET_VISUAL_CROSSING_WEB_SERVICES_REST_SERVICES_WEATHERDATA_HISTORY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/VisualCrossingWebServices/rest/services/weatherdata/history"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    