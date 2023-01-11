import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Phone:
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

    
    def unassign_phone_number(self, request: operations.UnassignPhoneNumberRequest) -> operations.UnassignPhoneNumberResponse:
        r"""Unassign phone number
        Unassign [phone number](https://support.zoom.us/hc/en-us/articles/360020808292-Managing-Phone-Numbers#h_38ba8b01-26e3-4b1b-a9b5-0717c00a7ca6) of a Zoom phone user. <br>
        
        After assigning a phone number, you can remove it if you don't want it to be assigned to anyone.
        
        **Scopes**: `phone:write` `phone:write:admin`<br> 
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        **Prerequisite:** 
        1. Business or Enterprise account
        2. A Zoom Phone license
        3. User must have been previously assigned a Zoom Phone number.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/users/{userId}/phone_numbers/{phoneNumberId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnassignPhoneNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.unassign_phone_number_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def account_call_logs(self, request: operations.AccountCallLogsRequest) -> operations.AccountCallLogsResponse:
        r"""Get account's call logs
        Retrieve [call logs](https://support.zoom.us/hc/en-us/articles/360021114452-Viewing-Call-Logs) for an account. 
        
        **Scopes**: `phone:read:admin`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
        **Prerequisite:**<br>
        1. Business or Enterprise account<br>
        2. A Zoom Phone license<br>
        3. Account Owner and a [role](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) with Zoom Phone Management<br>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/phone/call_logs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountCallLogsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AccountCallLogs200ApplicationJSON])
                res.account_call_logs_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def add_byoc_number(self, request: operations.AddByocNumberRequest) -> operations.AddByocNumberResponse:
        r"""Add BYOC phone numbers
        Use this API to add BYOC phone numbers(provided to you by your carrier) to Zoom.
        
        **Scope:** `phone:write:admin` or `phone:write` or `phone:master`
        
        **Prerequisites:**<br>
        * The account must hold a business or enterprise plan and Zoom Phone license.
        
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/phone/byoc_numbers"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddByocNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AddByocNumber201ApplicationJSON])
                res.add_byoc_number_201_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def add_setting_template(self, request: operations.AddSettingTemplateRequest) -> operations.AddSettingTemplateResponse:
        r"""Add a setting template
        This API lets you create a Zoom Phone setting template for an account. Template type includes **User**, **Auto Receptionist**, or **Call Queue**. Settings include profile, policy and user settings. After creating a phone template, the settings defined via this request will become the default settings for an account.
        <br><br>
        **Scope**: 
        * `phone:write:admin` `phone:write`
        
        
        **Prerequisites**:
        1. Business or enterprise Zoom account
        2. A Zoom Phone license
        
        <br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        
        <br>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/phone/setting_templates"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddSettingTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AddSettingTemplate201ApplicationJSON])
                res.add_setting_template_201_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def add_user_setting(self, request: operations.AddUserSettingRequest) -> operations.AddUserSettingResponse:
        r"""Set up shared access
        Phone users can access [shared voicemail inboxes](https://support.zoom.us/hc/en-us/articles/360033863991-Sharing-and-controlling-access-to-a-voicemail-inbox) in the Zoom desktop client, web portal, or provisioned desk phone. Use this API to define the voicemail access permissions of a user.
        
        To view these settings in the Zoom web portal, navigate to **Admin >Phone System Management> Users & Rooms**. Click the **Users** tab and select **User Settings**. Scroll down to **Voicemail & Call Recordings**.<br>
        
        **Scope**:`phone:write:admin`<br>
        <br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        
        
        **Prerequisites**: <br>
        Business or Enterprise Account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/users/{userId}/settings/{settingType}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddUserSettingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AddUserSetting201ApplicationJSON])
                res.add_user_setting_201_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.add_user_setting_400_application_json_any = out
        elif r.status_code == 404:
            pass

        return res

    
    def assign_calling_plan(self, request: operations.AssignCallingPlanRequest) -> operations.AssignCallingPlanResponse:
        r"""Assign calling plan to a user
        Assign [calling plan](https://marketplace.zoom.us/docs/api-reference/other-references/plans#zoom-phone-calling-plans) to a [Zoom Phone](https://support.zoom.us/hc/en-us/categories/360001370051-Zoom-Phone) user.
        
        **Scopes**: `phone:write` `phone:write:admin`<br> 
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        **Prerequisite:** 
        1. Business or Enterprise account
        2. A Zoom Phone license
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/users/{userId}/calling_plans", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssignCallingPlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.assign_calling_plan_200_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def assign_phone_number(self, request: operations.AssignPhoneNumberRequest) -> operations.AssignPhoneNumberResponse:
        r"""Assign phone number to user
        Assign a [phone number](https://support.zoom.us/hc/en-us/articles/360020808292-Managing-Phone-Numbers) to a user who has already enabled Zoom Phone. 
        
        **Scopes**: `phone:write` `phone:write:admin`<br> 
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        **Prerequisite:** 
        1. Business or Enterprise account
        2. A Zoom Phone license
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/users/{userId}/phone_numbers", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssignPhoneNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AssignPhoneNumber200ApplicationJSON])
                res.assign_phone_number_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def change_main_company_number(self, request: operations.ChangeMainCompanyNumberRequest) -> operations.ChangeMainCompanyNumberResponse:
        r"""Change main company number
        The [main company number](https://support.zoom.us/hc/en-us/articles/360028553691) can be used by external callers to reach your phone users (by dialing the main company number and the user's extension). It can also be used by phone users in your account as their caller ID while making calls.<br><br> Use this API to [change the main company number](https://support.zoom.us/hc/en-us/articles/360028553691#h_82414c34-9df2-428a-85a4-efcf7f9e0d72) of an account.<br><br>
        **Prerequisites:**<br>
        * Pro or higher account plan.
        * Account owner or admin permissions<br>
        **Scopes:** `phone:write:admin`<br> 
        
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/phone/company_number"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChangeMainCompanyNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.change_main_company_number_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_call_log(self, request: operations.DeleteCallLogRequest) -> operations.DeleteCallLogResponse:
        r"""Delete a user's call log
        Delete a user's [call log](https://support.zoom.us/hc/en-us/articles/360021114452-Viewing-and-identifying-logs).
        
        **Scopes:** `phone:write`, `phone:write:admin`<br> 
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        **Prerequisites:** 
        1. User must belong to a Business or an Enterprise account.
        2. User must hold a Zoom Phone license.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/users/{userId}/call_logs/{callLogId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCallLogResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.delete_call_log_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_user_setting(self, request: operations.DeleteUserSettingRequest) -> operations.DeleteUserSettingResponse:
        r"""Remove shared access
        Remove the shared voicemail access settings that were previously assigned to a user. 
        
        To view these settings in your Zoom web portal, navigate to **Admin >Phone System Management> Users & Rooms**. Click the **Users** tab and select **User Settings**. Scroll down to **Voicemail & Call Recordings**.<br>
        
        **Scope**: `phone:write:admin`<br><br>
        **Prerequisites**:<br>
        * Business or enterprise Account<br>
        <br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/users/{userId}/settings/{settingType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserSettingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.delete_user_setting_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_voicemail(self, request: operations.DeleteVoicemailRequest) -> operations.DeleteVoicemailResponse:
        r"""Delete a voicemail
        Delete a [voicemail message](https://support.zoom.us/hc/en-us/articles/360021400211-Managing-voicemail-messages) from a Zoom account.
        
        **Scope:** `phone:write:admin` or `phone:write`
        
        
        **Prerequisite**:
        * The account must have activted Zoom Phone license.
        
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/voice_mails/{voicemailId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVoicemailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.delete_voicemail_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_phone_number_details(self, request: operations.GetPhoneNumberDetailsRequest) -> operations.GetPhoneNumberDetailsResponse:
        r"""Get phone number details
        A Zoom account owner or admin can purchase phone numbers and assign them to Zoom phone users. Use this API to get details on a specific Phone number in a Zoom account.<br><br>
        **Prerequisites:**<br>
        * Pro or higher plan with Zoom phone license<br>
        **Scope:** `phone:read:admin`<br> 
        
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/numbers/{numberId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPhoneNumberDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPhoneNumberDetails200ApplicationJSON])
                res.get_phone_number_details_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_phone_recordings(self, request: operations.GetPhoneRecordingsRequest) -> operations.GetPhoneRecordingsResponse:
        r"""Get call recordings
        List [call recordings](https://support.zoom.us/hc/en-us/articles/360038521091-Accessing-and-sharing-call-recordings) of an account.<br>
        
        **Scopes:**<br>
        * `phone:read:admin` `phone:write:admin`
        
        **Prerequisties:** <br>
        * Pro or higher account with Zoom Phone license.
        * Account owner or admin privileges.
        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/phone/recordings"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPhoneRecordingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPhoneRecordings200ApplicationJSON])
                res.get_phone_recordings_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_phone_recordings_400_application_json_any = out
        elif r.status_code == 401:
            pass

        return res

    
    def get_setting_template(self, request: operations.GetSettingTemplateRequest) -> operations.GetSettingTemplateResponse:
        r"""Get setting template details
        This API lets you retrieve a specific account phone template previously created. <br>
        
        **Scope**: <br>
        * `phone:write:admin` or `phone:write`
        
        **Prerequisites**: <br>
        1. Business or Enterprise Account
        2. A Zoom Phone license
        <br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/setting_templates/{templateId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSettingTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSettingTemplate200ApplicationJSON])
                res.get_setting_template_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_setting_template_404_application_json_any = out

        return res

    
    def list_account_phone_numbers(self, request: operations.ListAccountPhoneNumbersRequest) -> operations.ListAccountPhoneNumbersResponse:
        r"""List phone numbers
        A Zoom account owner or admin can purchase phone numbers and assign them to Zoom phone users. Use this API to list all Zoom Phone numbers in a Zoom account. You can filter the response based on your needs by using query parameters.
        
        **Prerequisites:**<br>
        * Pro or higher plan with Zoom phone license<br>
        **Scope:** `phone:read:admin`<br> 
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/phone/numbers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAccountPhoneNumbersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListAccountPhoneNumbers200ApplicationJSON])
                res.list_account_phone_numbers_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def list_byocsip_trunk(self, request: operations.ListByocsipTrunkRequest) -> operations.ListByocsipTrunkResponse:
        r"""List BYOC SIP trunks
        List [BYOC SIP trunks](https://zoom.us/docs/doc/Zoom-Bring%20Your%20Own%20Carrier.pdf) that are assigned to an account. 
        
        **Scopes**:<br>
        * `phone:write:admin` or `phone:master`<br>
        
        **Prerequisites**:<br>
        * Business or Enterprise Account
        <br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/phone/sip_trunk/trunks"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListByocsipTrunkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListByocsipTrunk200ApplicationJSON])
                res.list_byocsip_trunk_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def list_calling_plans(self, request: operations.ListCallingPlansRequest) -> operations.ListCallingPlansResponse:
        r"""List calling plans
        List all Zoom Phone [calling plans](https://marketplace.zoom.us/docs/api-reference/other-references/plans#zoom-phone-calling-plans) that are enabled for a Zoom account.<br><br>
        **Prerequisites:**<br>
        * Pro or a higher account with Zoom phone license. <br>
        **Scope:** `phone:read:admin`<br> 
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/phone/calling_plans"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCallingPlansResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCallingPlans200ApplicationJSON])
                res.list_calling_plans_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def list_phone_users(self, request: operations.ListPhoneUsersRequest) -> operations.ListPhoneUsersResponse:
        r"""List phone users
        List all the users on an account who have been assigned Zoom Phone licenses.<br><br>
        **Prerequisites:**<br>
        * Pro or higher plan with Zoom phone license<br>
        **Scope:** `phone:read:admin`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/phone/users"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPhoneUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPhoneUsers200ApplicationJSON])
                res.list_phone_users_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def list_setting_templates(self, request: operations.ListSettingTemplatesRequest) -> operations.ListSettingTemplatesResponse:
        r"""List setting templates
        This API lets you retrieve a list of all the phone template settings previously created. 
        <br>
        **Scope**:<br>
        * `phone:read:admin` or `phone:read`
        <br>**Prerequisites**: <br>
        1. Business or enterprise Account
        2. A Zoom Phone license
        
        <br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/phone/setting_templates"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListSettingTemplatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListSettingTemplates200ApplicationJSON])
                res.list_setting_templates_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def phone_user(self, request: operations.PhoneUserRequest) -> operations.PhoneUserResponse:
        r"""Get user's profile
        Retrieve a user's [zoom phone](https://support.zoom.us/hc/en-us/articles/360001297663-Quickstart-Guide-for-Zoom-Phone-Administrators) profile.
        
        **Scopes:** `phone:read`, `phone:read:admin`<br> 
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        
        
        **Prerequisites** :
        1. Business or Enterprise account 
        2. A Zoom Phone license
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/users/{userId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PhoneUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PhoneUser200ApplicationJSON])
                res.phone_user_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def phone_user_call_logs(self, request: operations.PhoneUserCallLogsRequest) -> operations.PhoneUserCallLogsResponse:
        r"""Get user's call logs
        Retrieve a [zoom phone](https://support.zoom.us/hc/en-us/articles/360001297663-Quickstart-Guide-for-Zoom-Phone-Administrators) user's call logs.
        
        **Scopes:** `phone:read`, `phone:read:admin`<br> 
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
        **Prerequisite:** 
        1. Business or Enterprise account
        2. A Zoom Phone license
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/users/{userId}/call_logs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PhoneUserCallLogsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PhoneUserCallLogs200ApplicationJSON])
                res.phone_user_call_logs_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def phone_user_recordings(self, request: operations.PhoneUserRecordingsRequest) -> operations.PhoneUserRecordingsResponse:
        r"""Get user's recordings
        Retrieve a user's zoom [phone recordings](https://support.zoom.us/hc/en-us/articles/360021336671-Viewing-Call-History-and-Recordings).
        **Scopes:** `phone:read`, `phone:read:admin`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
        **Prerequisite:**
        1. Business or Enterprise account
        2. A Zoom Phone license
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/users/{userId}/recordings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PhoneUserRecordingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PhoneUserRecordings200ApplicationJSON])
                res.phone_user_recordings_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def phone_user_settings(self, request: operations.PhoneUserSettingsRequest) -> operations.PhoneUserSettingsResponse:
        r"""Get user's settings
        Retrieve a user's zoom phone profile [settings](https://support.zoom.us/hc/en-us/articles/360021325712-Configuring-Settings).
        
        **Scopes:** `phone:read`, `phone:read:admin`<br> 
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        **Prerequisite:**
        1. Business or Enterprise account
        2. A Zoom Phone license
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/users/{userId}/settings", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PhoneUserSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PhoneUserSettings200ApplicationJSON])
                res.phone_user_settings_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def phone_user_voice_mails(self, request: operations.PhoneUserVoiceMailsRequest) -> operations.PhoneUserVoiceMailsResponse:
        r"""Get user's voicemails
        Retrieve a user's Zoom Phone voicemails. 
        
        **Scopes:** `phone:read`, `phone:read:admin`<br> 
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
        **Prerequisite:**
        1. Business or Enterprise account
        2. A Zoom Phone license
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/users/{userId}/voice_mails", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PhoneUserVoiceMailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PhoneUserVoiceMails200ApplicationJSON])
                res.phone_user_voice_mails_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def post_phone_sip_trunk(self, request: operations.PostPhoneSipTrunkRequest) -> operations.PostPhoneSipTrunkResponse:
        r"""Assign SIP trunks
        Using this API, a [master account](https://marketplace.zoom.us/docs/api-reference/master-account-apis) owner can assign SIP trunk(s) to a sub account.<br>
        
        **Scope**:<br>
        * `phone:master` <br>
        
        **Prerequisites**:<br>
        * Business or enterprise Account.<br>
        <br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/phone/sip_trunk/trunks", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPhoneSipTrunkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPhoneSipTrunk201ApplicationJSON])
                res.post_phone_sip_trunk_201_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def set_up_account(self, request: operations.SetUpAccountRequest) -> operations.SetUpAccountResponse:
        r"""Set up a Zoom Phone account
        After assigning a Zoom phone license to an account, an admin or account owner can proceed with the [initial Zoom phone set up](https://support.zoom.us/hc/en-us/articles/360001297663-Getting-started-with-Zoom-Phone-admin-#h_5ae26a3a-290c-4a8d-b3b0-6384ed267b13) using this API.
        
        **Scope**:<br>
        * `phone:write:admin` `phone:write`
        
        **Prerequisites**: <br>
        * Pro or a higher paid account with master account option enabled.
        
        <br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/phone/setup", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetUpAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def unassign_calling_plan(self, request: operations.UnassignCallingPlanRequest) -> operations.UnassignCallingPlanResponse:
        r"""Unassign user's calling plan
        Unassign a [calling plan](https://marketplace.zoom.us/docs/api-reference/other-references/plans#zoom-phone-calling-plans) that was previously assigned to a [Zoom Phone](https://support.zoom.us/hc/en-us/categories/360001370051) user.
        
        **Scopes**: `phone:write` `phone:write:admin`<br> 
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        **Prerequisite:** 
        1. Business or Enterprise account
        2. A Zoom Phone license
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/users/{userId}/calling_plans/{type}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnassignCallingPlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.unassign_calling_plan_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_phone_number_details(self, request: operations.UpdatePhoneNumberDetailsRequest) -> operations.UpdatePhoneNumberDetailsResponse:
        r"""Update phone number details
        Update phone number details.
        
        **Scopes:**
        * `phone:write` `phone:write:admin`
        * `phone:master`
        
        **Prerequisite:**
        * Paid account
        
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/numbers/{numberId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePhoneNumberDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.update_phone_number_details_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_phone_sip_trunk(self, request: operations.UpdatePhoneSipTrunkRequest) -> operations.UpdatePhoneSipTrunkResponse:
        r"""Update SIP trunk details
        Update details of a SIP trunk that is assigned to a sub account.<br>
        
        **Scope**:<br>
        * `phone:master` <br>
        
        **Prerequisites**:<br>
        Business or Enterprise Account.<br>
        <br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/phone/sip_trunk/trunks/{sipTrunkId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePhoneSipTrunkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.update_phone_sip_trunk_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def update_phone_settings(self, request: operations.UpdatePhoneSettingsRequest) -> operations.UpdatePhoneSettingsResponse:
        r"""Update BYOC settings
        Only [master account owners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) can use this API to enable BYOC(Bring your own carrier) option for a sub account.<br>
        
        **Scope**:<br>
        * `phone:master` <br>
        
        **Prerequisites**: <br>
        * Business or enterprise Account.<br>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/phone/settings", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePhoneSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.update_phone_settings_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass

        return res

    
    def update_setting_template(self, request: operations.UpdateSettingTemplateRequest) -> operations.UpdateSettingTemplateResponse:
        r"""Update a setting template
        Use this API to update or modify profile settings for the phone template. Template type includes **User**, **Auto Receptionist**, or **Call Queue**. After you've modified a template, click **User Settings** to set up settings for Call Handling, Desk Phone, and Others. <br>
        
        **Scope**:<br>
        * `phone:write:admin` or `phone:write`
        
        **Prerequisites**: <br>
        1. Business or Enterprise Account
        2. A Zoom Phone license
        <br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/setting_templates/{templateId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSettingTemplateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.update_setting_template_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_user_profile(self, request: operations.UpdateUserProfileRequest) -> operations.UpdateUserProfileResponse:
        r"""Update user's profile
        Update a [Zoom Phone](https://support.zoom.us/hc/en-us/categories/360001370051-Zoom-Phone) user's profile.
        
        **Scopes:** `phone:write` `phone:write:admin`  <br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        **Prerequisite:** 
        1. Business or Enterprise account
        2. A Zoom Phone license
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/users/{userId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUserProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.update_user_profile_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def update_user_setting(self, request: operations.UpdateUserSettingRequest) -> operations.UpdateUserSettingResponse:
        r"""Update shared access
        Phone users can access [shared voicemail inboxes](https://support.zoom.us/hc/en-us/articles/360033863991-Sharing-and-controlling-access-to-a-voicemail-inbox) in the Zoom desktop client, web portal, or provisioned desk phone. Use this API to update the voicemail access permissions of a user.
        
        To view these settings in the Zoom web portal, navigate to **Admin >Phone System Management> Users & Rooms**. Click the **Users** tab and select **User Settings**. Scroll down to **Voicemail & Call Recordings**.<br>
        
        **Scope**: <br>`phone:write:admin`<br>
        <br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        
        
        **Prerequisites**:<br>
        Business or Enterprise Account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/users/{userId}/settings/{settingType}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUserSettingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.update_user_setting_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_user_setting_400_application_json_object = out
        elif r.status_code == 404:
            pass

        return res

    