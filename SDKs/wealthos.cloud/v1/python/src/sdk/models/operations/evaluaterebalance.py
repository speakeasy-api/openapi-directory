import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class EvaluateRebalanceHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    
class EvaluateRebalanceSwitchInstructionRequestTypeEnum(str, Enum):
    POT = "pot"
    INVESTOR = "investor"
    PORTFOLIO = "portfolio"


@dataclass_json
@dataclasses.dataclass
class EvaluateRebalanceSwitchInstructionRequest:
    r"""EvaluateRebalanceSwitchInstructionRequest
    Definition of Switch instruction
    """
    
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    type: EvaluateRebalanceSwitchInstructionRequestTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    values: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    

@dataclasses.dataclass
class EvaluateRebalanceSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
class EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum(str, Enum):
    ELIGIBLE = "eligible"
    INELIGIBLE = "ineligible"
    NO_PORTFOLIO_ATTACHED = "no_portfolio_attached"
    NEGATIVE_HOLDINGS = "negative_holdings"
    NO_HOLDINGS = "no_holdings"


@dataclass_json
@dataclasses.dataclass
class EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest:
    r"""EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest
    Each individual pot details on the rebalance request
    """
    
    investor_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('investor_id') }})
    pot_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pot_id') }})
    rebalance_eligibility_status: EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rebalance_eligibility_status') }})
    portfolio_deviation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolio_deviation') }})
    portfolio_template_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolio_template_id') }})
    

@dataclass_json
@dataclasses.dataclass
class EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPot:
    r"""EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPot
    contains array for pot details
    """
    
    evaluation_response: list[EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluation_response') }})
    

@dataclasses.dataclass
class EvaluateRebalanceRequest:
    headers: EvaluateRebalanceHeaders = dataclasses.field()
    security: EvaluateRebalanceSecurity = dataclasses.field()
    request: Optional[EvaluateRebalanceSwitchInstructionRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EvaluateRebalanceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    evaluate_rebalance_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    evaluate_rebalance_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    evaluate_rebalance_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    evaluate_rebalance_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    evaluate_rebalance_409_application_json_any: Optional[Any] = dataclasses.field(default=None)
    evaluate_rebalance_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    evaluate_rebalance_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    this_is_the_return_object_with_evaluation_per_pot: Optional[EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPot] = dataclasses.field(default=None)
    
