import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class CommonAreaPhones:
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

    
    def add_common_area_phone(self, request: operations.AddCommonAreaPhoneRequest) -> operations.AddCommonAreaPhoneResponse:
        r"""Add a common area phone
        A common area phone can be provisioned by a Zoom account owner or a Zoom admin so that anyone in an organization can use it. For example, if your office has shared desks that don't belong to a specific employees, you could add a common area phone so that any person can use it.<br> Use this API to [add a common area phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones#h_2d0da347-c35a-4993-9771-e21aaa568deb).<br><br>
        **Prerequisites:**<br>
        * Pro or a higher account with Zoom Phone license.
        * Account owner or admin permissions.
        * [Supported device](https://support.zoom.us/hc/en-us/articles/360001299063-Zoom-Voice-Supported-Devices)<br>
        **Scope:** `phone:write:admin`<br> 
        
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/phone/common_area_phones"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddCommonAreaPhoneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AddCommonAreaPhone201ApplicationJSON])
                res.add_common_area_phone_201_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 409:
            pass

        return res

    
    def delete_common_area_phone(self, request: operations.DeleteCommonAreaPhoneRequest) -> operations.DeleteCommonAreaPhoneResponse:
        r"""Delete a common area phone
        A common area phone can be provisioned by a Zoom account owner or a Zoom admin so that anyone in an organization can use it. For example, if your office has shared desks that don't belong to a specific employees, you could add a common area phone so that any person can use it.<br> Use this API to remove the [common area phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones) from Zoom Phone System in an account.<br><br>**Prerequisites:**<br>
        * Pro or a higher account with Zoom Phone license.
        * Account owner or admin permissions.
        * [Supported device](https://support.zoom.us/hc/en-us/articles/360001299063-Zoom-Voice-Supported-Devices)<br>
        **Scopes:** `phone:write:admin`<br> 
        
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/common_area_phones/{commonAreaPhoneId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCommonAreaPhoneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.delete_common_area_phone_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_a_common_area_phone(self, request: operations.GetACommonAreaPhoneRequest) -> operations.GetACommonAreaPhoneResponse:
        r"""Get common area phone details
        A common area phone can be provisioned by a Zoom account owner or a Zoom admin so that anyone in an organization can use it. For example, if your office has shared desks that don't belong to a specific employees, you could add a common area phone so that any person can use it.<br> Use this API to get details on a specific [common area phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones) in an account.<br>For the `commonAreaPhoneId`, use the unique identifier or the Mac address of the common area phone. The Mac address can be hyphenated (00-04-f2-5e-ec-3c) or not hyphenated (0004f25eec3c).<br><br>**Prerequisites:**<br>
        * Pro or a higher account with Zoom Phone license.
        * Account owner or admin permissions.
        * [Supported device](https://support.zoom.us/hc/en-us/articles/360001299063-Zoom-Voice-Supported-Devices)<br>
        **Scopes:** `phone:read:admin`<br> 
        
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/common_area_phones/{commonAreaPhoneId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetACommonAreaPhoneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetACommonAreaPhone200ApplicationJSON])
                res.get_a_common_area_phone_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def list_common_area_phones(self, request: operations.ListCommonAreaPhonesRequest) -> operations.ListCommonAreaPhonesResponse:
        r"""List common area phones
        A common area phone can be provisioned by a Zoom account owner or a Zoom admin so that anyone in an organization can use it. For example, if your office has shared desks that don't belong to a specific employees, you could add a common area phone so that any person can use it.<br> Use this API to [list all common area phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones) in an account.<br><br>**Prerequisites:**<br>
        * Pro or a higher account with Zoom Phone license.
        * Account owner or admin permissions.
        * [Supported device](https://support.zoom.us/hc/en-us/articles/360001299063-Zoom-Voice-Supported-Devices)<br><br>
        **Scope:** `phone:read:admin`<br> 
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/phone/common_area_phones"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCommonAreaPhonesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCommonAreaPhones200ApplicationJSON])
                res.list_common_area_phones_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def update_common_area_phone(self, request: operations.UpdateCommonAreaPhoneRequest) -> operations.UpdateCommonAreaPhoneResponse:
        r"""Update common area phone
        A common area phone can be provisioned by a Zoom account owner or a Zoom admin so that anyone in an organization can use it. For example, if your office has shared desks that don't belong to a specific employees, you could add a common area phone so that any person can use it.<br> Use this API to update details on a specific [common area phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones) in an account.<br><br>**Prerequisites:**<br>
        * Pro or a higher account with Zoom Phone license.
        * Account owner or admin permissions.
        * [Supported device](https://support.zoom.us/hc/en-us/articles/360001299063-Zoom-Voice-Supported-Devices)<br>
        **Scopes:** `phone:write:admin`<br> 
        
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/common_area_phones/{commonAreaPhoneId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateCommonAreaPhoneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.update_common_area_phone_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    