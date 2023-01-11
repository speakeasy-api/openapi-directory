import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import localizedstring as shared_localizedstring

class BarcodeRenderEncodingEnum(str, Enum):
    RENDER_ENCODING_UNSPECIFIED = "RENDER_ENCODING_UNSPECIFIED"
    UTF_8 = "UTF_8"

class BarcodeTypeEnum(str, Enum):
    BARCODE_TYPE_UNSPECIFIED = "BARCODE_TYPE_UNSPECIFIED"
    AZTEC_UPPER = "AZTEC"
    AZTEC_LOWER = "aztec"
    CODE_39 = "CODE_39"
    CODE39 = "code39"
    CODE_128 = "CODE_128"
    CODE128 = "code128"
    CODABAR_UPPER = "CODABAR"
    CODABAR_LOWER = "codabar"
    DATA_MATRIX_UPPER = "DATA_MATRIX"
    DATA_MATRIX_MIXED = "dataMatrix"
    EAN_8 = "EAN_8"
    EAN8 = "ean8"
    EAN_13 = "EAN_13"
    EAN13_LOWER = "ean13"
    EAN13_UPPER = "EAN13"
    ITF_14 = "ITF_14"
    ITF14 = "itf14"
    PDF_417 = "PDF_417"
    PDF417_LOWER = "pdf417"
    PDF417_UPPER = "PDF417"
    QR_CODE_UPPER = "QR_CODE"
    QR_CODE_MIXED = "qrCode"
    QRCODE = "qrcode"
    UPC_A_UPPER = "UPC_A"
    UPC_A_MIXED = "upcA"
    TEXT_ONLY_UPPER = "TEXT_ONLY"
    TEXT_ONLY_MIXED = "textOnly"


@dataclass_json
@dataclasses.dataclass
class Barcode:
    alternate_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternateText') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    render_encoding: Optional[BarcodeRenderEncodingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renderEncoding') }})
    show_code_text: Optional[shared_localizedstring.LocalizedString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showCodeText') }})
    type: Optional[BarcodeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
