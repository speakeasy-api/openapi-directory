import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import error as shared_error
from ..shared import video_versions as shared_video_versions


@dataclasses.dataclass
class CreateVideoVersionPathParams:
    video_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    
class CreateVideoVersionRequestBodyUploadApproachEnum(str, Enum):
    POST = "post"
    PULL = "pull"
    STREAMING = "streaming"
    TUS = "tus"


@dataclass_json
@dataclasses.dataclass
class CreateVideoVersionRequestBodyUpload:
    approach: CreateVideoVersionRequestBodyUploadApproachEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('approach') }})
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    redirect_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_url') }})
    size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateVideoVersionRequestBody:
    file_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_name') }})
    upload: CreateVideoVersionRequestBodyUpload = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload') }})
    

@dataclasses.dataclass
class CreateVideoVersionRequest:
    path_params: CreateVideoVersionPathParams = dataclasses.field()
    request: CreateVideoVersionRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/vnd.vimeo.video.version+json' }})
    

@dataclasses.dataclass
class CreateVideoVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    video_versions: Optional[shared_video_versions.VideoVersions] = dataclasses.field(default=None)
    
