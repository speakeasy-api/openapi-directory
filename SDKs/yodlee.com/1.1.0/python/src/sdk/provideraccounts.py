import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class ProviderAccounts:
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

    
    def delete_provider_account(self, request: operations.DeleteProviderAccountRequest) -> operations.DeleteProviderAccountResponse:
        r"""Delete Provider Account
        The delete provider account service is used to delete a provider account from the Yodlee system. This service also deletes the accounts that are created in the Yodlee system for that provider account. <br>This service does not return a response. The HTTP response code is 204 (Success with no content).<br>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/providerAccounts/{providerAccountId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProviderAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.YodleeError])
                res.yodlee_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def edit_credentials_or_refresh_provider_account(self, request: operations.EditCredentialsOrRefreshProviderAccountRequest) -> operations.EditCredentialsOrRefreshProviderAccountResponse:
        r"""Update Account
        The update account API is used to:<br> <ul><li>Retrieve the latest information for accounts that belong to one providerAccount from the provider site. You must allow at least 15 min between requests.<li>Retrieve the latest information of all the eligible accounts that belong to the user.<li>Data to be retrieved from the provider site can be overridden using datasetName or dataset. If you do pass datasetName, all the datasets that are implicitly configured for the dataset will be retrieved. This action is allowed for single provider account refresh flows only.<li>Check the status of the providerAccount before invoking this API. Do not call this API to trigger any action on a providerAccount when an action is already in progress for the providerAccount.<li>If the customer has subscribed to the REFRESH event notification and invoked this API, relevant notifications will be sent to the customer.<li>A dataset may depend on another dataset for retrieval, so the response will include the requested and dependent datasets.<li>Check all the dataset additional statuses returned in the response because the provider account status is drawn from the dataset additional statuses.<li>Updating preferences using this API will trigger refreshes.<li> The content type has to be passed as application/json for the body parameter.</ul><br>-----------------------------------------------------------------------------------------------------------------------------------------<br><br><b>Update All Eligible Accounts - Notes:</b><br><ul><li>This API will trigger a refresh for all the eligible provider accounts(both OB and credential-based accounts).<li>This API will not refresh closed, inactive, or UAR accounts, or accounts with refreshes in-progress or recently refreshed non-OB accounts.<li>No parameters should be passed to this API to trigger this action.<li>Do not call this API often. Our recommendation is to call this only at the time the user logs in to your app because it can hamper other API calls performance.<li>The response only contains information for accounts that were refreshed. If no accounts are eligible for refresh, no response is returned.</ul>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/providerAccounts"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditCredentialsOrRefreshProviderAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.UpdatedProviderAccountResponse])
                res.updated_provider_account_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.YodleeError])
                res.yodlee_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_all_provider_accounts(self, request: operations.GetAllProviderAccountsRequest) -> operations.GetAllProviderAccountsResponse:
        r"""Get Provider Accounts
        The get provider accounts service is used to return all the provider accounts added by the user. <br>This includes the failed and successfully added provider accounts.<br>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/providerAccounts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllProviderAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProviderAccountResponse])
                res.provider_account_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_provider_account(self, request: operations.GetProviderAccountRequest) -> operations.GetProviderAccountResponse:
        r"""Get Provider Account Details
        The get provider account details service is used to learn the status of adding accounts and updating accounts.<br>This service has to be called continuously to know the progress level of the triggered process. This service also provides the MFA information requested by the provider site.<br>When <i>include = credentials</i>, questions is passed as input, the service returns the credentials (non-password values) and questions stored in the Yodlee system for that provider account. <br><br><b>Note:</b> <li>The password and answer fields are not returned in the response.</li>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/providerAccounts/{providerAccountId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProviderAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProviderAccountDetailResponse])
                res.provider_account_detail_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.YodleeError])
                res.yodlee_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_provider_account_profiles(self, request: operations.GetProviderAccountProfilesRequest) -> operations.GetProviderAccountProfilesResponse:
        r"""Get User Profile Details
        The get provider accounts profile service is used to return the user profile details that are associated to the provider account. <br>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/providerAccounts/profile"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProviderAccountProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProviderAccountUserProfileResponse])
                res.provider_account_user_profile_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_preferences(self, request: operations.UpdatePreferencesRequest) -> operations.UpdatePreferencesResponse:
        r"""Update Preferences
        This endpoint is used to update preferences like data extracts and auto refreshes without triggering refresh for the providerAccount.<br>Setting isDataExtractsEnabled to false will not trigger data extracts notification and dataExtracts/events will not reflect any data change that is happening for the providerAccount.<br>Modified data will not be provided in the dataExtracts/userData endpoint.<br>Setting isAutoRefreshEnabled to false will not trigger auto refreshes for the provider account.<br>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/providerAccounts/{providerAccountId}/preferences", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePreferencesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.YodleeError])
                res.yodlee_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    