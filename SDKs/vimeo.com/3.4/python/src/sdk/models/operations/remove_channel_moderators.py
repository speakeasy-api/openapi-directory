"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import legacy_error as shared_legacy_error
from ..shared import user as shared_user
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclasses.dataclass
class RemoveChannelModeratorsSecurity:
    
    oauth2: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class RemoveChannelModeratorsRequestBody:
    
    user_uri: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('user_uri') }})
    r"""The URI of a user to remove as a moderator."""  
    

@dataclasses.dataclass
class RemoveChannelModeratorsRequest:
    
    channel_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    r"""The ID of the channel."""  
    request_body: RemoveChannelModeratorsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/vnd.vimeo.user+json' }})  
    

@dataclasses.dataclass
class RemoveChannelModeratorsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    legacy_error: Optional[shared_legacy_error.LegacyError] = dataclasses.field(default=None)
    r"""The authenticated user doesn't own the channel, the user isn't a moderator of the channel, or you tried to remove the owner of the channel."""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    user: Optional[shared_user.User] = dataclasses.field(default=None)
    r"""The moderators were removed."""  
    