"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import savemultiplereviewsrequest as shared_savemultiplereviewsrequest
from typing import Optional


@dataclasses.dataclass
class SaveMultipleReviewsRequest:
    
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    r"""HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand."""  
    content_type: str = dataclasses.field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    r"""Describes the type of the content being sent."""  
    request_body: list[shared_savemultiplereviewsrequest.SaveMultipleReviewsRequest] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    

@dataclasses.dataclass
class SaveMultipleReviewsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    save_multiple_reviews_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    r"""OK"""  
    