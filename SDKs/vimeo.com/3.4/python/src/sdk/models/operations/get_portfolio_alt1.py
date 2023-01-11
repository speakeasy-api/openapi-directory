import dataclasses
from typing import Optional
from ..shared import portfolio as shared_portfolio


@dataclasses.dataclass
class GetPortfolioAlt1PathParams:
    portfolio_id: float = dataclasses.field(metadata={'path_param': { 'field_name': 'portfolio_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPortfolioAlt1Request:
    path_params: GetPortfolioAlt1PathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPortfolioAlt1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    portfolio: Optional[shared_portfolio.Portfolio] = dataclasses.field(default=None)
    
