"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import settingvalueresponse as shared_settingvalueresponse
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class SettingValueResponseWrapperMethodEnum(str, Enum):
    r"""The HTTP method. It is the same as that of the corresponding request."""
    GET = 'GET'
    HEAD = 'HEAD'
    POST = 'POST'
    PUT = 'PUT'
    PATCH = 'PATCH'
    DELETE = 'DELETE'
    OPTIONS = 'OPTIONS'
    TRACE = 'TRACE'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SettingValueResponseWrapper:
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id'), 'exclude': lambda f: f is None }})
    r"""The Id of the corresponding request."""  
    method: Optional[SettingValueResponseWrapperMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('method'), 'exclude': lambda f: f is None }})
    r"""The HTTP method. It is the same as that of the corresponding request."""  
    response: Optional[shared_settingvalueresponse.SettingValueResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('response'), 'exclude': lambda f: f is None }})  
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('url'), 'exclude': lambda f: f is None }})
    r"""The url as specified in the corresponding request."""  
    