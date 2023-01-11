import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class PhoneCallQueues:
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

    
    def add_members_to_call_queue(self, request: operations.AddMembersToCallQueueRequest) -> operations.AddMembersToCallQueueResponse:
        r"""Add members to a call queue
        Add phone users and/or [common area phones](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones) as members to a specific Call Queue.<br><br>
        **Prerequisites:**<br>
        * Pro or higher account plan.
        * Zoom Phone license<br>
        **Scopes:** `phone:write:admin`<br> 
        
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/call_queues/{callQueueId}/members", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddMembersToCallQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.add_members_to_call_queue_201_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def assign_phone_to_call_queue(self, request: operations.AssignPhoneToCallQueueRequest) -> operations.AssignPhoneToCallQueueResponse:
        r"""Assign numbers to a call queue
        After [buying phone number(s)](https://support.zoom.us/hc/en-us/articles/360020808292#h_007ec8c2-0914-4265-8351-96ab23efa3ad), you can assign it, allowing callers to directly dial a number to reach a [call queue](https://support.zoom.us/hc/en-us/articles/360021524831-Managing-Call-Queues).<br><br>
        **Prerequisites:**<br>
        * Pro or higher account plan.
        * Account owner or admin permissions
        * Zoom Phone license<br>
        **Scopes:** `phone:write:admin`<br> 
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/call_queues/{callQueueId}/phone_numbers", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssignPhoneToCallQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.assign_phone_to_call_queue_204_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def change_call_queue_manager(self, request: operations.ChangeCallQueueManagerRequest) -> operations.ChangeCallQueueManagerResponse:
        r"""Change call queue manager
        A call queue manager has the privileges to maanage the call queue's voicemail inbox and recordings, change all call queue settings and call queue policy settings.<br><br> Use this API to to set another phone user as the [call queue manager](https://support.zoom.us/hc/en-us/articles/360021524831-Managing-Call-Queues#h_db06854b-e6a3-4afe-ba15-baf58f31f90c).
        **Prerequisites:**<br>
        * Pro or higher account plan.
        * Account owner or admin permissions
        * Zoom Phone license<br>
        **Scopes:** `phone:write:admin`<br> 
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/call_queues/{callQueueId}/manager", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChangeCallQueueManagerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.change_call_queue_manager_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def create_call_queue(self, request: operations.CreateCallQueueRequest) -> operations.CreateCallQueueResponse:
        r"""Create a call queue
        Call queues allow you to route incoming calls to a group of users. For instance, you can use call queues to route calls to various departments in your organization such as sales, engineering, billing, customer service etc.<br> Use this API to [create a call queue](https://support.zoom.us/hc/en-us/articles/360021524831-Managing-Call-Queues#h_e81faeeb-9184-429a-aaea-df49ff5ff413).<br> You can add phone users or common area phones to call queues.
        
        **Prerequisites:**<br>
        * Pro, Business, or Education account
        * Account owner or admin permissions
        * Zoom Phone license<br>
        **Scopes:** `phone:write:admin`<br> 
        
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/phone/call_queues"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCallQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateCallQueue201ApplicationJSON])
                res.create_call_queue_201_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_a_call_queue(self, request: operations.DeleteACallQueueRequest) -> operations.DeleteACallQueueResponse:
        r"""Delete a call queue
        Call queues allow you to route incoming calls to a group of users. For instance, you can use call queues to route calls to various departments in your organization such as sales, engineering, billing, customer service etc.<br> Use this API to delete a Call Queue.<br> 
        **Prerequisites:**<br>
        * Pro, Business, or Education account
        * Account owner or admin permissions
        * Zoom Phone license<br>
        **Scopes:** `phone:write:admin`<br> 
        
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/call_queues/{callQueueId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteACallQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.delete_a_call_queue_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_a_call_queue(self, request: operations.GetACallQueueRequest) -> operations.GetACallQueueResponse:
        r"""Get call queue details
        Call queues allow you to route incoming calls to a group of users. For instance, you can use call queues to route calls to various departments in your organization such as sales, engineering, billing, customer service etc.<br> Use this API to get information on a specific Call Queue.<br><br> 
        **Prerequisites:**<br>
        * Pro, Business, or Education account
        * Account owner or admin permissions
        * Zoom Phone license<br>
        **Scopes:** `phone:read:admin`<br> 
        
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/call_queues/{callQueueId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetACallQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetACallQueue200ApplicationJSON])
                res.get_a_call_queue_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_call_queue_recordings(self, request: operations.GetCallQueueRecordingsRequest) -> operations.GetCallQueueRecordingsResponse:
        r"""Get call queue recordings
        Use this API to view [call recordings](https://support.zoom.us/hc/en-us/articles/360038521091#h_cbc9f2a3-e06c-4daa-83d4-ddbceef9c77b) from the call queue.<br><br>
        **Prerequisites:**<br>
        * Pro or higher account with Zoom Phone license.
        * [Automatic call recordings](https://support.zoom.us/hc/en-us/articles/360033511872#h_fcb297bb-14e8-4094-91ca-dc61e1a18734) must be enabled in the Policy Settings for call queues. <br> **Scope:** `phone:read:admin`<br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        
        
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/call_queues/{callQueueId}/recordings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCallQueueRecordingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCallQueueRecordings200ApplicationJSON])
                res.get_call_queue_recordings_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def list_call_queues(self, request: operations.ListCallQueuesRequest) -> operations.ListCallQueuesResponse:
        r"""List call queues
        Call queues allow you to route incoming calls to a group of users. For instance, you can use call queues to route calls to various departments in your organization such as sales, engineering, billing, customer service etc.<br> Use this API to list Call queues.<br><br>
        **Prerequisites:**<br>
        * Pro, Business, or Education account
        * Account owner or admin permissions
        * Zoom Phone license<br>
        **Scopes:** `phone:read:admin`<br> 
        
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/phone/call_queues"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCallQueuesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCallQueues200ApplicationJSON])
                res.list_call_queues_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def un_assign_phone_num_call_queue(self, request: operations.UnAssignPhoneNumCallQueueRequest) -> operations.UnAssignPhoneNumCallQueueResponse:
        r"""Unassign a phone number
        After assigning a phone number, you can unbind it if you don't want it to be assigned to a [Call Queue](https://support.zoom.us/hc/en-us/articles/360021524831-Managing-Call-Queues). Use this API to unbind a phone number from a Call Queue. After successful unbinding, the number will appear in the [Unassigned tab](https://zoom.us/signin#/numbers/unassigned).<br><br>
        **Prerequisites:**
        * Pro or higher account palan
        * Account owner or admin permissions
        * Zoom Phone license <br> **Scopes:** `phone:write:admin`<br> 
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/call_queues/{callQueueId}/phone_numbers/{phoneNumberId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnAssignPhoneNumCallQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.un_assign_phone_num_call_queue_204_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def unassign_a_phone_num_call_queue(self, request: operations.UnassignAPhoneNumCallQueueRequest) -> operations.UnassignAPhoneNumCallQueueResponse:
        r"""Unassign all phone numbers
        Use this API to unbind all phone numbers that are assigned to a [Call Queue](https://support.zoom.us/hc/en-us/articles/360021524831-Managing-Call-Queues) After successful unbinding, the numbers will appear in the [Unassigned tab](https://zoom.us/signin#/numbers/unassigned).<br> If you only need to unassign a specific phone number, use the Unassign a Phone Number API instead. <br>
        **Prerequisites:**
        * Pro or higher account palan
        * Account owner or admin permissions
        * Zoom Phone license <br> **Scopes:** `phone:write:admin`<br> 
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/call_queues/{callQueueId}/phone_numbers", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnassignAPhoneNumCallQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.unassign_a_phone_num_call_queue_204_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def unassign_all_members(self, request: operations.UnassignAllMembersRequest) -> operations.UnassignAllMembersResponse:
        r"""Unassign all members
        Use this API to remove all members from a Call Queue who were previously assigned to that Call Queue. The members could be phone users or [common area phones](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones).
        **Prerequisites:**<br>
        * Pro or higher account plan.
        * Zoom Phone license<br>
        **Scopes:** `phone:write:admin`<br> 
        
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/call_queues/{callQueueId}/members", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnassignAllMembersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.unassign_all_members_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def unassign_member_from_call_queue(self, request: operations.UnassignMemberFromCallQueueRequest) -> operations.UnassignMemberFromCallQueueResponse:
        r"""Unassign a member
        Use this API to remove a member from a Call Queue who was previously added to that Call Queue. The member could be a phone user or a [common area phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones). A member who is a Call Queue Manager cannot be unassigned from the Call Queue using this API. 
        **Prerequisites:**<br>
        * Pro or higher account plan.
        * Zoom Phone license<br>
        **Scopes:** `phone:write:admin`<br> 
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/call_queues/{callQueueId}/members/{memberId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnassignMemberFromCallQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.unassign_member_from_call_queue_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_call_queue(self, request: operations.UpdateCallQueueRequest) -> operations.UpdateCallQueueResponse:
        r"""Update call queue details
        Call queues allow you to route incoming calls to a group of users. For instance, you can use call queues to route calls to various departments in your organization such as sales, engineering, billing, customer service etc.<br> Use this API to update information of a specific Call Queue.<br> 
        **Prerequisites:**<br>
        * Pro, Business, or Education account
        * Account owner or admin permissions
        * Zoom Phone license<br>
        **Scopes:** `phone:write:admin`<br> 
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/call_queues/{callQueueId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateCallQueueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.update_call_queue_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    