import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import image as shared_image
from ..shared import applinkdataapplinkinfoapptarget as shared_applinkdataapplinkinfoapptarget
from ..shared import localizedstring as shared_localizedstring


@dataclass_json
@dataclasses.dataclass
class AppLinkDataAppLinkInfo:
    app_logo_image: Optional[shared_image.Image] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appLogoImage') }})
    app_target: Optional[shared_applinkdataapplinkinfoapptarget.AppLinkDataAppLinkInfoAppTarget] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appTarget') }})
    description: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    title: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
