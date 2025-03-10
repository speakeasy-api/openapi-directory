"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class AssignPhoneNumbersSLGApplicationJSONPhoneNumbers:
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id'), 'exclude': lambda f: f is None }})
    r"""Unique Identifier of the phone number."""  
    number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('number'), 'exclude': lambda f: f is None }})
    r"""Phone number."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class AssignPhoneNumbersSLGApplicationJSON:
    
    phone_numbers: Optional[list[AssignPhoneNumbersSLGApplicationJSONPhoneNumbers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('phone_numbers'), 'exclude': lambda f: f is None }})
    r"""Phone number(s) to be assigned to the Shared Line Group."""  
    

@dataclasses.dataclass
class AssignPhoneNumbersSLGRequest:
    
    shared_line_group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sharedLineGroupId', 'style': 'simple', 'explode': False }})
    r"""Unique Identifier of the Shared Line Group."""  
    request_body: Optional[AssignPhoneNumbersSLGApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})  
    

@dataclasses.dataclass
class AssignPhoneNumbersSLGResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    