import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class CreateRebalanceHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    
class CreateRebalanceSwitchInstructionRequestTypeEnum(str, Enum):
    POT = "pot"
    INVESTOR = "investor"
    PORTFOLIO = "portfolio"


@dataclass_json
@dataclasses.dataclass
class CreateRebalanceSwitchInstructionRequest:
    r"""CreateRebalanceSwitchInstructionRequest
    Definition of Switch instruction
    """
    
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    type: CreateRebalanceSwitchInstructionRequestTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    values: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    

@dataclasses.dataclass
class CreateRebalanceSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CreateRebalanceRequest:
    headers: CreateRebalanceHeaders = dataclasses.field()
    security: CreateRebalanceSecurity = dataclasses.field()
    request: Optional[CreateRebalanceSwitchInstructionRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateRebalanceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_rebalance_201_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_rebalance_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_rebalance_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_rebalance_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_rebalance_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_rebalance_409_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_rebalance_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_rebalance_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
