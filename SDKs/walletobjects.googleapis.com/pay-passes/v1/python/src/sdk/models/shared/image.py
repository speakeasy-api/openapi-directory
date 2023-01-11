import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imageuri as shared_imageuri


@dataclass_json
@dataclasses.dataclass
class Image:
    r"""Image
    Wrapping type for Google hosted images.
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    source_uri: Optional[shared_imageuri.ImageURI] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceUri') }})
    
