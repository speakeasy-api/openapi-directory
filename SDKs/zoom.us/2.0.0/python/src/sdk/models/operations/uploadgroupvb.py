import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UploadGroupVbPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UploadGroupVbQueryParams:
    file_ids: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'file_ids', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UploadGroupVbRequestBody:
    file: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass_json
@dataclasses.dataclass
class UploadGroupVb201ApplicationJSON:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_default: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_default') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class UploadGroupVbRequest:
    path_params: UploadGroupVbPathParams = dataclasses.field()
    query_params: UploadGroupVbQueryParams = dataclasses.field()
    request: Optional[UploadGroupVbRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UploadGroupVbResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    upload_group_vb_201_application_json_object: Optional[UploadGroupVb201ApplicationJSON] = dataclasses.field(default=None)
    
