"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import errorresponse as shared_errorresponse
from ..shared import getpublicnotificationdefinitionresponse as shared_getpublicnotificationdefinitionresponse
from ..shared import putpublicnotificationdefinitionrequest as shared_putpublicnotificationdefinitionrequest
from typing import Optional


@dataclasses.dataclass
class PUTUpdateNotificationDefinitionRequest:
    
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    r"""`Bearer {token}` for a valid OAuth token.
    
    Note that you must regenerate the OAuth token after the Custom Events feature is enabled in your Zuora tenant. The OAuth tokens generated before this feature is turned on will not work.
    """  
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    r"""The ID of the notification definition to be updated."""  
    put_public_notification_definition_request: shared_putpublicnotificationdefinitionrequest.PUTPublicNotificationDefinitionRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    r"""The request body of the notification definition to be updated."""  
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    r"""An entity ID. If you have [Zuora Multi-entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity) enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you do not need to set this header."""  
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    r"""A custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.
    
    The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (`:`), semicolon (`;`), double quote (`\"`), and quote (`'`).
    """  
    

@dataclasses.dataclass
class PUTUpdateNotificationDefinitionResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    r"""Bad Request"""  
    get_public_notification_definition_response: Optional[shared_getpublicnotificationdefinitionresponse.GETPublicNotificationDefinitionResponse] = dataclasses.field(default=None)
    r"""OK"""  
    headers: Optional[dict[str, list[str]]] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    