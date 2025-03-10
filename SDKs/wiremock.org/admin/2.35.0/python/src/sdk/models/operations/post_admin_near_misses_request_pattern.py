"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Any, Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials:
    r"""Pre-emptive basic auth credentials to match against"""
    
    password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('password') }})  
    username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('username') }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PostAdminNearMissesRequestPatternRequestBody:
    
    basic_auth_credentials: Optional[PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('basicAuthCredentials'), 'exclude': lambda f: f is None }})
    r"""Pre-emptive basic auth credentials to match against"""  
    body_patterns: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('bodyPatterns'), 'exclude': lambda f: f is None }})
    r"""Request body patterns to match against in the <key>: { \\"<predicate>\\": \\"<value>\\" } form"""  
    cookies: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('cookies'), 'exclude': lambda f: f is None }})
    r"""Cookie patterns to match against in the <key>: { \\"<predicate>\\": \\"<value>\\" } form"""  
    headers: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('headers'), 'exclude': lambda f: f is None }})
    r"""Header patterns to match against in the <key>: { \\"<predicate>\\": \\"<value>\\" } form"""  
    method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('method'), 'exclude': lambda f: f is None }})
    r"""The HTTP request method e.g. GET"""  
    query_parameters: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('queryParameters'), 'exclude': lambda f: f is None }})
    r"""Query parameter patterns to match against in the <key>: { \\"<predicate>\\": \\"<value>\\" } form"""  
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('url'), 'exclude': lambda f: f is None }})
    r"""The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified."""  
    url_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('urlPath'), 'exclude': lambda f: f is None }})
    r"""The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified."""  
    url_path_pattern: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('urlPathPattern'), 'exclude': lambda f: f is None }})
    r"""The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified."""  
    url_pattern: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('urlPattern'), 'exclude': lambda f: f is None }})
    r"""The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PostAdminNearMissesRequestPattern200ApplicationJSONNearMisses:
    
    absolute_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('absoluteUrl'), 'exclude': lambda f: f is None }})
    r"""The full URL to match against"""  
    body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('body'), 'exclude': lambda f: f is None }})
    r"""Body string to match against"""  
    cookies: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('cookies'), 'exclude': lambda f: f is None }})
    r"""Cookie patterns to match against in the <key>: { \\"<predicate>\\": \\"<value>\\" } form"""  
    headers: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('headers'), 'exclude': lambda f: f is None }})
    r"""Header patterns to match against in the <key>: { \\"<predicate>\\": \\"<value>\\" } form"""  
    method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('method'), 'exclude': lambda f: f is None }})
    r"""The HTTP request method"""  
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('url'), 'exclude': lambda f: f is None }})
    r"""The path and query to match exactly against"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class PostAdminNearMissesRequestPattern200ApplicationJSON:
    r"""Near misses matching criteria"""
    
    near_misses: Optional[list[PostAdminNearMissesRequestPattern200ApplicationJSONNearMisses]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('nearMisses'), 'exclude': lambda f: f is None }})  
    

@dataclasses.dataclass
class PostAdminNearMissesRequestPatternResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    post_admin_near_misses_request_pattern_200_application_json_object: Optional[PostAdminNearMissesRequestPattern200ApplicationJSON] = dataclasses.field(default=None)
    r"""Near misses matching criteria"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    