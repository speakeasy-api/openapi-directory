import dataclasses



@dataclasses.dataclass
class AccountDisassociatePathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AccountDisassociateRequest:
    path_params: AccountDisassociatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class AccountDisassociateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
