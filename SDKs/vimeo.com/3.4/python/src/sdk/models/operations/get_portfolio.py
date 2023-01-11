import dataclasses
from typing import Optional
from ..shared import portfolio as shared_portfolio


@dataclasses.dataclass
class GetPortfolioPathParams:
    portfolio_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'portfolio_id', 'style': 'simple', 'explode': False }})
    user_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPortfolioRequest:
    path_params: GetPortfolioPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPortfolioResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    portfolio: Optional[shared_portfolio.Portfolio] = dataclasses.field(default=None)
    
