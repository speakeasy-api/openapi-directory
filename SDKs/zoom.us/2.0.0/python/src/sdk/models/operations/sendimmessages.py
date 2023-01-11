import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class SendimmessagesQueryParams:
    chat_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'chat_user', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class SendimmessagesApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class SendimmessagesMultipartFormData:
    message: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'message' }})
    

@dataclasses.dataclass
class SendimmessagesRequests:
    object: Optional[SendimmessagesApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[SendimmessagesMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class SendimmessagesSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class Sendimmessages201ApplicationJSON:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclasses.dataclass
class SendimmessagesRequest:
    query_params: SendimmessagesQueryParams = dataclasses.field()
    security: SendimmessagesSecurity = dataclasses.field()
    request: Optional[SendimmessagesRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class SendimmessagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    sendimmessages_201_application_json_object: Optional[Sendimmessages201ApplicationJSON] = dataclasses.field(default=None)
    
