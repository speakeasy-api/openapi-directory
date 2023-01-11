import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class PastWebinarsPathParams:
    webinar_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'webinarId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PastWebinarsSecurity:
    o_auth: shared_security.SchemeOAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class PastWebinarsWebinarInstancesWebinars:
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    

@dataclass_json
@dataclasses.dataclass
class PastWebinarsWebinarInstances:
    r"""PastWebinarsWebinarInstances
    List of webinars.
    """
    
    webinars: Optional[list[PastWebinarsWebinarInstancesWebinars]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webinars') }})
    

@dataclasses.dataclass
class PastWebinarsRequest:
    path_params: PastWebinarsPathParams = dataclasses.field()
    security: PastWebinarsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PastWebinarsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    webinar_instances: Optional[PastWebinarsWebinarInstances] = dataclasses.field(default=None)
    
