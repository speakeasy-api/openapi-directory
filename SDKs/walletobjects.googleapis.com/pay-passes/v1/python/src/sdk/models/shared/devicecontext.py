"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class DeviceContext:
    r"""Device context associated with the object."""
    
    device_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('deviceToken'), 'exclude': lambda f: f is None }})
    r"""If set, redemption information will only be returned to the given device upon activation of the object. This should not be used as a stable identifier to trace a user's device. It can change across different passes for the same device or even across different activations for the same device. When setting this, callers must also set has_linked_device on the object being activated."""  
    