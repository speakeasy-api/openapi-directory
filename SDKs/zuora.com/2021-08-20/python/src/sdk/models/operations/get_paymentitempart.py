"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import getpaymentitemparttype as shared_getpaymentitemparttype
from typing import Optional


@dataclasses.dataclass
class GETPaymentItemPartRequest:
    
    itempartid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'itempartid', 'style': 'simple', 'explode': False }})
    r"""The unique ID of a specific payment part item. You can get the payment part item ID from the response of [List all payment part items](https://www.zuora.com/developer/api-reference/#operation/GET_PaymentItemParts)."""  
    partid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'partid', 'style': 'simple', 'explode': False }})
    r"""The unique ID of a specific payment part. You can get the payment part ID from the response of [List all parts of a payment](https://www.zuora.com/developer/api-reference/#operation/GET_PaymentParts)."""  
    payment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'paymentId', 'style': 'simple', 'explode': False }})
    r"""The unique ID of a payment. For example, 8a8082e65b27f6c3015b89e4344c16b1."""  
    zuora_entity_ids: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Entity-Ids', 'style': 'simple', 'explode': False }})
    r"""An entity ID. If you have [Zuora Multi-entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity) enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you do not need to set this header."""  
    zuora_track_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Zuora-Track-Id', 'style': 'simple', 'explode': False }})
    r"""A custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.
    
    The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (`:`), semicolon (`;`), double quote (`\"`), and quote (`'`).
    """  
    

@dataclasses.dataclass
class GETPaymentItemPartResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    get_payment_item_part_type: Optional[shared_getpaymentitemparttype.GETPaymentItemPartType] = dataclasses.field(default=None)  
    headers: Optional[dict[str, list[str]]] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    