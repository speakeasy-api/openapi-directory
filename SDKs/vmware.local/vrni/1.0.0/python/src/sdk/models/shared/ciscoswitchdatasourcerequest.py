import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import passwordcredentials as shared_passwordcredentials
from ..shared import ciscoswitchtype_enum as shared_ciscoswitchtype_enum


@dataclass_json
@dataclasses.dataclass
class CiscoSwitchDataSourceRequest:
    nickname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    proxy_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxy_id') }})
    credentials: Optional[shared_passwordcredentials.PasswordCredentials] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentials') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    fqdn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fqdn') }})
    ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    switch_type: Optional[shared_ciscoswitchtype_enum.CiscoSwitchTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('switch_type') }})
    
