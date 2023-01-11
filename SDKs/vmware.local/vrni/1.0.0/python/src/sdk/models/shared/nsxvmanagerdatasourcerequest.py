import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import passwordcredentials as shared_passwordcredentials


@dataclass_json
@dataclasses.dataclass
class NsxvManagerDataSourceRequest:
    credentials: shared_passwordcredentials.PasswordCredentials = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentials') }})
    nickname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    proxy_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('proxy_id') }})
    vcenter_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcenter_id') }})
    central_cli_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('central_cli_enabled') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    fqdn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fqdn') }})
    ip: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    ipfix_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipfix_enabled') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    
