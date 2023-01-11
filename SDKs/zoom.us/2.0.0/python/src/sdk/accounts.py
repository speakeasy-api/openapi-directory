import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Accounts:
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

    
    def account(self, request: operations.AccountRequest) -> operations.AccountResponse:
        r"""Get sub account details
        Get details of a sub account that is listed under a master account. Your account must be a master account in order to retrieve sub accounts' details. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and create sub accounts. Email the partner programs team at **partner-success@zoom.us** for more details.
        
        **Prerequisites:**
        * Pro or a higher paid account with master account option enabled. <br>
        
        **Scope**: `account:write:admin`<br>
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        
         
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Account200ApplicationJSON])
                res.account_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def account_create(self, request: operations.AccountCreateRequest) -> operations.AccountCreateResponse:
        r"""Create a sub account
        Create a sub account under a master account. Your account must be a master account in order to create sub accounts. 
        <br><br>Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts. Email the partner programs team at partner-success@zoom.us. for more details. Please note that the created account user will receive a confirmation email.<br><br>
        <br>
        **Prerequisites:**<br>
        * Pro or a higher paid account with master account option enabled. <br>
        
        **Scope**: `account:write:admin`<br>
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        
         
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/accounts"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AccountCreate201ApplicationJSON])
                res.account_create_201_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 409:
            pass

        return res

    
    def account_disassociate(self, request: operations.AccountDisassociateRequest) -> operations.AccountDisassociateResponse:
        r"""Disassociate a sub account
        Disassociate a sub account from its master account. This will leave the sub account intact but it will no longer be associated with the master account.<br>  
        
        **Prerequisites:**
        * Pro or a higher paid account with master account option enabled. <br>
        * The account making this API request must be a [master account](https://marketplace.zoom.us/docs/api-reference/master-account-apis).<br><br>
        
        
        **Scope**: `account:write:admin`<br>
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        
         
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountDisassociateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def account_managed_domain(self, request: operations.AccountManagedDomainRequest) -> operations.AccountManagedDomainResponse:
        r"""Get managed domains
        Get a sub account's [managed domains](https://support.zoom.us/hc/en-us/articles/203395207-What-is-Managed-Domain-).<br><br>
        
        **Note:** This API can be used by Zoom Accounts that are on a Pro or a higher plan as well accounts that have master and sub accounts options enabled. <br><br>
        To get managed domains of the master account, provide `me` as the value for accountId in the path parameter. Provide the sub account's Account ID as the value of accountId path parameter to get managed domains of the sub account.<br><br>
        **Prerequisites:**<br>
        * Pro or a higher paid account with master account option enabled. <br>
        
        **Scope:** `account:read:admin`<br>
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/managed_domains", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountManagedDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AccountManagedDomain200ApplicationJSON])
                res.account_managed_domain_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def account_options_update(self, request: operations.AccountOptionsUpdateRequest) -> operations.AccountOptionsUpdateResponse:
        r"""Update options
        Update a sub account's options under the master account.<br> <aside>Your account must be a master account in order to update the options for sub accounts. Zoom only assigns this privilege to trusted partners. </aside>
        
        **Prerequisites:**
        * Pro or a higher paid account with master account option enabled.
        * The account making this API request must be a [master account](https://marketplace.zoom.us/docs/api-reference/master-account-apis).<br><br>
        
        **Scope**: `account:write:admin`<br>
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        
         
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/options", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountOptionsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def account_settings(self, request: operations.AccountSettingsRequest) -> operations.AccountSettingsResponse:
        r"""Get settings
        Get the settings of an account.<br>
        To get the settings of a master account, use `me` as the value for the `accountId` path parameter.<br><br>
         **Prerequisites**:
         * The account must be a paid account.<br>
        **Scopes**: `account:read:admin`
        <br> 
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/settings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.account_settings_200_application_json_one_of = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def account_settings_update(self, request: operations.AccountSettingsUpdateRequest) -> operations.AccountSettingsUpdateResponse:
        r"""Update settings
        Update the settings of a sub account that is under a master account.<br> To update the settings of the master account, use `me` as the value of the `accountId` path parameter.<br><br>
        **Prerequisites**:
         * The sub account must be a paid account.<br>
        **Scopes**: `account:write:admin`
        <br>
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/settings", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PATCH", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountSettingsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 300:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def account_trusted_domain(self, request: operations.AccountTrustedDomainRequest) -> operations.AccountTrustedDomainResponse:
        r"""Get trusted domains
        Get trusted domains of a sub account. To get the trusted domains of a master account, use `me` as the value for the `accountId` path parameter.
        
        **Prerequisites:**<br>
        * The sub account must be a paid account.<br>
        **Scope:** `account:read:admin`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/trusted_domains", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountTrustedDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.account_trusted_domain_200_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def accounts(self, request: operations.AccountsRequest) -> operations.AccountsResponse:
        r"""List sub accounts
        List all the sub accounts that have been created by a master account.<br><br>Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts. Email the partner programs team at **partner-success@zoom.us** for more details.
        
        <br>**Prerequisites:**<br>
        * Pro or a higher paid account with master account option enabled. <br>
        
        **Scope**: `account:read:admin`
        <br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/accounts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AccountsAccountList])
                res.account_list = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def del_vb(self, request: operations.DelVbRequest) -> operations.DelVbResponse:
        r"""Delete virtual background files
        Delete existing virtual background file(s) from an account. 
        
        **Prerequisites:**<br>
        * Virtual background feature must be [enabled](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_2ef28080-fce9-4ac2-b567-dc958afab1b7) on the account.
        <br> **Scope:** `account:write:admin`<br> <br> 
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/settings/virtual_backgrounds", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DelVbResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_account_lock_settings(self, request: operations.GetAccountLockSettingsRequest) -> operations.GetAccountLockSettingsResponse:
        r"""Get locked settings
        [Account Locked Settings](https://support.zoom.us/hc/en-us/articles/115005269866) allow you turn settings on or off for all users in your account. No user except the account admin or account owner can change these settings. With lock settings, you force the settings on for all users.
        Use this API to retrieve an account's locked settings. 
        
        **Note:** This API can be used by Zoom Accounts that are on a Pro or a higher plan as well accounts that have master and sub accounts options enabled. <br><br>
        **Prerequisites:**
        * Pro or a higher paid account. <br>
        
        **Scope**: `account:read:admin`.
        <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
        
        
        
        
        
        **Scope:** account:read:admin
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/lock_settings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountLockSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_account_lock_settings_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def update_account_lock_settings(self, request: operations.UpdateAccountLockSettingsRequest) -> operations.UpdateAccountLockSettingsResponse:
        r"""Update locked settings
        [Account Locked Settings](https://support.zoom.us/hc/en-us/articles/115005269866) allow you turn settings on or off for all users in your account. No user except the account admin or account owner can change these settings. With lock settings, you force the settings on for all users. Use this API to update an account's locked settings.
        
        **Note:** This API can be used by Zoom Accounts that are on a Pro or a higher plan as well accounts that have master and sub accounts options enabled.<br><br>
        **Prerequisites:**<br>
        * Pro or a higher paid account. <br>
        
        **Scope:** `account:write:admin`<br>
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
        
        
         
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/lock_settings", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAccountLockSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.update_account_lock_settings_200_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 204:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_account_lock_settings_204_application_json_object = out
        elif r.status_code == 404:
            pass

        return res

    
    def update_account_owner(self, request: operations.UpdateAccountOwnerRequest) -> operations.UpdateAccountOwnerResponse:
        r"""Update the account owner
        The current account owner can [change the owner of an account](https://support.zoom.us/hc/en-us/articles/115005686983-Change-Account-Owner) to another user on the same account.<br> Use this API to change the owner of a sub account.
         
        **Prerequisites**: <br>
        * Account owner or admin permissions of an account.
        * The account making this API request must be on a pro or a hiigher plan with [master account](https://marketplace.zoom.us/docs/api-reference/master-account-apis) privilege.<br><br>
        
        **Scopes:**  `account:write:admin` or `account:master`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
        
        
        <br> 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/owner", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAccountOwnerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.update_account_owner_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def upload_vb(self, request: operations.UploadVbRequest) -> operations.UploadVbResponse:
        r"""Upload virtual background files
        Use this API to [upload virtual background files](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_01EJF3YFEWGT8YA0ZJ079JEDQE) for all users on the account to use. 
        
        
        **Prerequisites:**<br>
        * Virtual background feature must be [enabled](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_2ef28080-fce9-4ac2-b567-dc958afab1b7) on the account.
        <br> **Scope:** `account:write:admin`<br><br>
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/settings/virtual_backgrounds", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UploadVbResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UploadVb201ApplicationJSON])
                res.upload_vb_201_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    