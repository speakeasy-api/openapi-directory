import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import updateuserrequest as shared_updateuserrequest


@dataclasses.dataclass
class UpdateUserRequest:
    request: shared_updateuserrequest.UpdateUserRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
