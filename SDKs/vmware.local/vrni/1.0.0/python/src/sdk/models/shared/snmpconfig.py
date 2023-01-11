import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import snmp2cconfig as shared_snmp2cconfig
from ..shared import snmp3config as shared_snmp3config

class SnmpConfigSnmpVersionEnum(str, Enum):
    V2C = "v2c"
    V3 = "v3"


@dataclass_json
@dataclasses.dataclass
class SnmpConfig:
    config_snmp_2c: Optional[shared_snmp2cconfig.Snmp2cConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config_snmp_2c') }})
    config_snmp_3: Optional[shared_snmp3config.Snmp3Config] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config_snmp_3') }})
    snmp_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snmp_enabled') }})
    snmp_version: Optional[SnmpConfigSnmpVersionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snmp_version') }})
    
