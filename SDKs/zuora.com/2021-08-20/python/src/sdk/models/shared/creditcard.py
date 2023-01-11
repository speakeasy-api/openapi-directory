import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountcreditcardholder as shared_accountcreditcardholder

class CreditCardCardTypeEnum(str, Enum):
    VISA = "Visa"
    MASTER_CARD = "MasterCard"
    AMERICAN_EXPRESS = "AmericanExpress"
    DISCOVER = "Discover"
    JCB = "JCB"
    DINERS = "Diners"
    CUP = "CUP"
    MAESTRO = "Maestro"
    ELECTRON = "Electron"
    APPLE_VISA = "AppleVisa"
    APPLE_MASTER_CARD = "AppleMasterCard"
    APPLE_AMERICAN_EXPRESS = "AppleAmericanExpress"
    APPLE_DISCOVER = "AppleDiscover"
    APPLE_JCB = "AppleJCB"
    ELO = "Elo"
    HIPERCARD = "Hipercard"
    NARANJA = "Naranja"
    NATIVA = "Nativa"
    TARJETA_SHOPPING = "TarjetaShopping"
    CENCOSUD = "Cencosud"
    ARGENCARD = "Argencard"
    CABAL = "Cabal"


@dataclass_json
@dataclasses.dataclass
class CreditCard:
    r"""CreditCard
    Default payment method associated with an account. Only credit card payment methods are supported.
    
    """
    
    card_holder_info: Optional[shared_accountcreditcardholder.AccountCreditCardHolder] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardHolderInfo') }})
    card_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardNumber') }})
    card_type: Optional[CreditCardCardTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardType') }})
    expiration_month: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationMonth') }})
    expiration_year: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationYear') }})
    security_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityCode') }})
    
