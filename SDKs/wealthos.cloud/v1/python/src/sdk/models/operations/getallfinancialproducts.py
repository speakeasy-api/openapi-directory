import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetAllFinancialProductsQueryParams:
    product_types: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'product_types', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAllFinancialProductsHeaders:
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAllFinancialProductsSecurity:
    api_secret_key: shared_security.SchemeAPISecretKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
class GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProductsFlexibleEnum(str, Enum):
    YES = "YES"
    NO = "NO"


@dataclass_json
@dataclasses.dataclass
class GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProductsInterestPreferences:
    interest_accrual_basis: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interest_accrual_basis') }})
    interest_payment_frequency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interest_payment_frequency') }})
    pay_interest: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pay_interest') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProductsInvestmentPreferences:
    minimum_one_off_investment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimum_one_off_investment') }})
    minimum_regular_monthly_investment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimum_regular_monthly_investment') }})
    regular_investment_dates: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regular_investment_dates') }})
    regular_investment_frequencies: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regular_investment_frequencies') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProductsWithdrawalPreferences:
    minimum_one_off_withdrawal: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimum_one_off_withdrawal') }})
    minimum_regular_monthly_withdrawal: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimum_regular_monthly_withdrawal') }})
    regular_withdrawal_frequencies: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regular_withdrawal_frequencies') }})
    regular_withdrawal_payment_dates: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regular_withdrawal_payment_dates') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProducts:
    financial_product_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('financial_product_id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    product_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('product_type') }})
    additional_cash_currencies: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additional_cash_currencies') }})
    availability: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availability') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dividend_options: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dividend_options') }})
    flexible: Optional[GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProductsFlexibleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flexible') }})
    interest_preferences: Optional[GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProductsInterestPreferences] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interest_preferences') }})
    investment_preferences: Optional[GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProductsInvestmentPreferences] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('investment_preferences') }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    withdrawal_preferences: Optional[GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProductsWithdrawalPreferences] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('withdrawal_preferences') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAllFinancialProducts200ApplicationJSON:
    financial_products: list[GetAllFinancialProducts200ApplicationJSONRootTypeForFinancialProducts] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('financial_products') }})
    

@dataclasses.dataclass
class GetAllFinancialProductsRequest:
    headers: GetAllFinancialProductsHeaders = dataclasses.field()
    query_params: GetAllFinancialProductsQueryParams = dataclasses.field()
    security: GetAllFinancialProductsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAllFinancialProductsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_all_financial_products_200_application_json_object: Optional[GetAllFinancialProducts200ApplicationJSON] = dataclasses.field(default=None)
    get_all_financial_products_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_all_financial_products_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_all_financial_products_403_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_all_financial_products_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_all_financial_products_429_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_all_financial_products_500_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
