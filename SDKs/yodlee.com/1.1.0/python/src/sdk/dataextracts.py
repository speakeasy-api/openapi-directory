import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class DataExtracts:
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

    
    def get_data_extracts_events(self, request: operations.GetDataExtractsEventsRequest) -> operations.GetDataExtractsEventsResponse:
        r"""Get Events
        The get extracts events service is used to learn about occurrences of data extract related events. This service currently supports only the DATA_UPDATES event.<br>Passing the event name as DATA_UPDATES provides information about users for whom data has been modified in the system for the specified time range. To learn more, please refer to the <a href=\"https://developer.yodlee.com/docs/api/1.1/DataExtracts\">dataExtracts</a> page.<br>You can retrieve data in increments of no more than 60 minutes over the period of the last 7 days from today's date.<br>This service is only invoked with either admin access token or a cobrand session.<br>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dataExtracts/events"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDataExtractsEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataExtractsEventResponse])
                res.data_extracts_event_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.YodleeError])
                res.yodlee_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_data_extracts_user_data(self, request: operations.GetDataExtractsUserDataRequest) -> operations.GetDataExtractsUserDataResponse:
        r"""Get userData
        The get user data service is used to get a user's modified data for a particular period of time for accounts, transactions, holdings, and provider account information.<br>The time difference between fromDate and toDate fields cannot be more than 60 minutes.<br>By default, pagination is available for the transaction entity in this API. In the first response, the API will retrieve 500 transactions along with other data. The response header will provide a link to retrieve the next set of transactions.<br>In the response body of the first API response, totalTransactionsCount indicates the total number of transactions the API will retrieve for the user.<br>This service is only invoked with either admin access token or a cobrand session.<br/>Refer to <a href=\"https://developer.yodlee.com/docs/api/1.1/DataExtracts\">dataExtracts</a> page for more information.<br><br><b>Note:</b><li>This service supports the localization feature and accepts locale as a header parameter.</li>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dataExtracts/userData"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDataExtractsUserDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.DataExtractsUserDataResponse])
                res.data_extracts_user_data_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.YodleeError])
                res.yodlee_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    