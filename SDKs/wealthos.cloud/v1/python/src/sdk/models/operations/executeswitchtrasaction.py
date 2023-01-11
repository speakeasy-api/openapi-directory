import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class ExecuteSwitchTrasactionHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    
class ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum(str, Enum):
    PERCENTAGE = "percentage"
    UNIT = "unit"
    VALUE = "value"


@dataclass_json
@dataclasses.dataclass
class ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest:
    r"""ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest
    Each individual buy side and sell side instruction of the Switch request
    """
    
    investment_product_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('investment_product_id') }})
    mode: ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequestModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class ExecuteSwitchTrasactionSwitchInstructionRequest:
    r"""ExecuteSwitchTrasactionSwitchInstructionRequest
    Definition of Switch instruction
    """
    
    buy_instructions: list[ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('buy_instructions') }})
    pot_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pot_id') }})
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    sell_instructions: list[ExecuteSwitchTrasactionSwitchInstructionRequestEachBuyOrSellInstructionOfTheSwitchRequest] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sell_instructions') }})
    

@dataclasses.dataclass
class ExecuteSwitchTrasactionSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ExecuteSwitchTrasactionRequest:
    headers: ExecuteSwitchTrasactionHeaders = dataclasses.field()
    security: ExecuteSwitchTrasactionSecurity = dataclasses.field()
    request: Optional[ExecuteSwitchTrasactionSwitchInstructionRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ExecuteSwitchTrasactionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    execute_switch_trasaction_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    execute_switch_trasaction_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    execute_switch_trasaction_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    execute_switch_trasaction_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    execute_switch_trasaction_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    execute_switch_trasaction_409_application_json_any: Optional[Any] = dataclasses.field(default=None)
    execute_switch_trasaction_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    execute_switch_trasaction_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
