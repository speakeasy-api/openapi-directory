import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FilterRuleParameterDefinitionValueTypeEnum {
    String = "STRING",
    Byte = "BYTE",
    Short = "SHORT",
    Character = "CHARACTER",
    Integer = "INTEGER",
    Long = "LONG",
    Float = "FLOAT",
    Double = "DOUBLE",
    Boolean = "BOOLEAN",
    BigInteger = "BIG_INTEGER",
    BigDecimal = "BIG_DECIMAL",
    LocalDate = "LOCAL_DATE",
    LocalDateTime = "LOCAL_DATE_TIME",
    Timestamp = "TIMESTAMP",
    ByteArray = "BYTE_ARRAY",
    ShortArray = "SHORT_ARRAY",
    CharacterArray = "CHARACTER_ARRAY",
    IntegerArray = "INTEGER_ARRAY",
    FloatArray = "FLOAT_ARRAY",
    DoubleArray = "DOUBLE_ARRAY",
    BooleanArray = "BOOLEAN_ARRAY",
    StringArray = "STRING_ARRAY",
    BigIntegerArray = "BIG_INTEGER_ARRAY",
    BigDecimalArray = "BIG_DECIMAL_ARRAY",
    LocalDateArray = "LOCAL_DATE_ARRAY",
    LocalDateTimeArray = "LOCAL_DATE_TIME_ARRAY",
    TimestampArray = "TIMESTAMP_ARRAY"
}


export class FilterRuleParameterDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: string[];

  @SpeakeasyMetadata({ data: "json, name=valueType" })
  valueType?: FilterRuleParameterDefinitionValueTypeEnum;
}
