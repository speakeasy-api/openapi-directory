import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import applinkdataapplinkinfo as shared_applinkdataapplinkinfo


@dataclass_json
@dataclasses.dataclass
class AppLinkData:
    android_app_link_info: Optional[shared_applinkdataapplinkinfo.AppLinkDataAppLinkInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidAppLinkInfo') }})
    ios_app_link_info: Optional[shared_applinkdataapplinkinfo.AppLinkDataAppLinkInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosAppLinkInfo') }})
    web_app_link_info: Optional[shared_applinkdataapplinkinfo.AppLinkDataAppLinkInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webAppLinkInfo') }})
    
