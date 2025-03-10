"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import getsubscriptionterminforesponsetype as shared_getsubscriptionterminforesponsetype
from typing import Optional


@dataclasses.dataclass
class GETSubscriptionTermInfoRequest:
    
    subscription_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subscriptionNumber', 'style': 'simple', 'explode': False }})
    r"""The number of the subscription to retrieve terms for. For example, A-S00000001."""  
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    r"""The page number of the terms retrieved."""  
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    r"""Number of rows returned per page."""  
    version: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    r"""The version of the subscription to retrieve terms for. If you do not specify this parameter, Zuora returns the terms for the latest version of the subscription."""  
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    r"""An entity ID. If you have [Zuora Multi-entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity) enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you do not need to set this header."""  
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    r"""A custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.
    
    The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (`:`), semicolon (`;`), double quote (`\"`), and quote (`'`).
    """  
    

@dataclasses.dataclass
class GETSubscriptionTermInfoResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    get_subscription_term_info_response_type: Optional[shared_getsubscriptionterminforesponsetype.GetSubscriptionTermInfoResponseType] = dataclasses.field(default=None)  
    headers: Optional[dict[str, list[str]]] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    