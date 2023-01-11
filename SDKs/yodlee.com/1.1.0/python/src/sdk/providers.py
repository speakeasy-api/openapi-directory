import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Providers:
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

    
    def get_all_providers(self, request: operations.GetAllProvidersRequest) -> operations.GetAllProvidersResponse:
        r"""Get Providers
        The get provider service is used to get all the providers that are enabled, search a provider service by name or routing number and get popular sites of a region. <br>Searching for a provider using a routing number is applicable only to the USA and Canada regions.<br>The valid values for priority are: <br>   1. cobrand: Returns providers enabled for the cobrand (Default priority)<br>   2. popular: Returns providers popular among users of the customer<br><br>Only the datasets, attributes, and containers that are enabled for the customer will be returned in the response.<br>Input for the dataset$filter should adhere to the following expression:<br><dataset.name>[<attribute.name>.container[<container> OR <container>] OR <attribute.name>.container[<container>]] <br>OR <dataset.name>[<attribute.name> OR <attribute.name>]<br><b>dataset$filter value examples:</b><br>ACCT_PROFILE[FULL_ACCT_NUMBER.container[bank OR investment OR creditCard]]<br>ACCT_PROFILE[FULL_ACCT_NUMBER.container[bank]]<br>BASIC_AGG_DATA[ACCOUNT_DETAILS.container[bank OR investment] OR HOLDINGS.container[bank]] OR ACCT_PROFILE[FULL_ACCT_NUMBER.container[bank]]<br>BASIC_AGG_DATA<br>BASIC_AGG_DATA OR ACCT_PROFILE<br>BASIC_AGG_DATA [ ACCOUNT_DETAILS OR HOLDINGS ]<br>BASIC_AGG_DATA [ ACCOUNT_DETAILS] OR DOCUMENT <br>BASIC_AGG_DATA [ BASIC_ACCOUNT_INFO OR ACCOUNT_DETAILS ] <br><br>The fullAcountNumberFields is specified to filter the providers that have paymentAccountNumber or unmaskedAccountNumber support in the FULL_ACCT_NUMBER dataset attribute.<br><b>Examples for usage of fullAccountNumberFields </b><br>dataset$filter=ACCT_PROFILE[ FULL_ACCT_NUMBER.container [ bank ]] &amp; fullAccountNumberFields=paymentAccountNumber<br>dataset$filter=ACCT_PROFILE[ FULL_ACCT_NUMBER.container [ bank ]] &amp; fullAccountNumberFields=unmaskedAccountNumber<br>dataset$filter=ACCT_PROFILE[ FULL_ACCT_NUMBER.container [ bank ]] &amp; fullAccountNumberFields=unmaskedAccountNumber,paymentAccountNumber<br><br>The skip and top parameters are used for pagination. In the skip and top parameters, pass the number of records to be skipped and retrieved, respectively.<br>The response header provides the links to retrieve the next and previous set of transactions.<br><br><b>Note:</b> <ol><li>In a product flow involving user interaction, Yodlee recommends invoking this service with filters.<li>Without filters, the service may perform slowly as it takes a few minutes to return data in the response.<li>The AuthParameter appears in the response only in case of token-based aggregation sites.<li>The pagination feature only applies when the priority parameter is set as cobrand. If no values are provided in the skip and top parameters, the API will only return the first 500 records.<li>This service supports the localization feature and accepts locale as a header parameter.<li>The capability has been deprecated in query parameter and response.</li></ol>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/providers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllProvidersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProviderResponse])
                res.provider_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.YodleeError])
                res.yodlee_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_provider(self, request: operations.GetProviderRequest) -> operations.GetProviderResponse:
        r"""Get Provider Details
        The get provider detail service is used to get detailed information including the login form for a provider.<br>The response is a provider object that includes information such as name of the provider, <br>provider's base URL, a list of containers supported by the provider, the login form details of the provider, etc.<br>Only enabled datasets, attributes and containers gets returned in the response.<br><br><b>Note:</b><li>This service supports the localization feature and accepts locale as a header parameter.<li>The capability has been deprecated in the response.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/providers/{providerId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProviderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProviderDetailResponse])
                res.provider_detail_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.YodleeError])
                res.yodlee_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_providers_count(self, request: operations.GetProvidersCountRequest) -> operations.GetProvidersCountResponse:
        r"""Get Providers Count
        The count service provides the total number of providers that get returned in the GET /providers depending on the input parameters passed.<br>If you are implementing pagination for providers, call this endpoint before calling GET /providers to know the number of providers that are returned for the input parameters passed.<br>The functionality of the input parameters remains the same as that of the GET /providers endpoint<br><br><b>Note:</b> <li>The capability has been deprecated in the query parameter.</li>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/providers/count"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProvidersCountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProvidersCountResponse])
                res.providers_count_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.YodleeError])
                res.yodlee_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    