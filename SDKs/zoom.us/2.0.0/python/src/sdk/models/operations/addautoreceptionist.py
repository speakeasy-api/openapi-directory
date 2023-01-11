import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AddAutoReceptionistApplicationJSON:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    site_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_id') }})
    

@dataclasses.dataclass
class AddAutoReceptionistMultipartFormData:
    name: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'name' }})
    site_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'site_id' }})
    

@dataclasses.dataclass
class AddAutoReceptionistRequests:
    object: Optional[AddAutoReceptionistApplicationJSON] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object1: Optional[AddAutoReceptionistMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass_json
@dataclasses.dataclass
class AddAutoReceptionist201ApplicationJSON:
    extension_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension_number') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class AddAutoReceptionistRequest:
    request: Optional[AddAutoReceptionistRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AddAutoReceptionistResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    add_auto_receptionist_201_application_json_object: Optional[AddAutoReceptionist201ApplicationJSON] = dataclasses.field(default=None)
    
