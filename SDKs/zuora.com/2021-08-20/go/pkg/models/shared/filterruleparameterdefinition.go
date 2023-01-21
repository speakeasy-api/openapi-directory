package shared

type FilterRuleParameterDefinitionValueTypeEnum string

const (
	FilterRuleParameterDefinitionValueTypeEnumString             FilterRuleParameterDefinitionValueTypeEnum = "STRING"
	FilterRuleParameterDefinitionValueTypeEnumByte               FilterRuleParameterDefinitionValueTypeEnum = "BYTE"
	FilterRuleParameterDefinitionValueTypeEnumShort              FilterRuleParameterDefinitionValueTypeEnum = "SHORT"
	FilterRuleParameterDefinitionValueTypeEnumCharacter          FilterRuleParameterDefinitionValueTypeEnum = "CHARACTER"
	FilterRuleParameterDefinitionValueTypeEnumInteger            FilterRuleParameterDefinitionValueTypeEnum = "INTEGER"
	FilterRuleParameterDefinitionValueTypeEnumLong               FilterRuleParameterDefinitionValueTypeEnum = "LONG"
	FilterRuleParameterDefinitionValueTypeEnumFloat              FilterRuleParameterDefinitionValueTypeEnum = "FLOAT"
	FilterRuleParameterDefinitionValueTypeEnumDouble             FilterRuleParameterDefinitionValueTypeEnum = "DOUBLE"
	FilterRuleParameterDefinitionValueTypeEnumBoolean            FilterRuleParameterDefinitionValueTypeEnum = "BOOLEAN"
	FilterRuleParameterDefinitionValueTypeEnumBigInteger         FilterRuleParameterDefinitionValueTypeEnum = "BIG_INTEGER"
	FilterRuleParameterDefinitionValueTypeEnumBigDecimal         FilterRuleParameterDefinitionValueTypeEnum = "BIG_DECIMAL"
	FilterRuleParameterDefinitionValueTypeEnumLocalDate          FilterRuleParameterDefinitionValueTypeEnum = "LOCAL_DATE"
	FilterRuleParameterDefinitionValueTypeEnumLocalDateTime      FilterRuleParameterDefinitionValueTypeEnum = "LOCAL_DATE_TIME"
	FilterRuleParameterDefinitionValueTypeEnumTimestamp          FilterRuleParameterDefinitionValueTypeEnum = "TIMESTAMP"
	FilterRuleParameterDefinitionValueTypeEnumByteArray          FilterRuleParameterDefinitionValueTypeEnum = "BYTE_ARRAY"
	FilterRuleParameterDefinitionValueTypeEnumShortArray         FilterRuleParameterDefinitionValueTypeEnum = "SHORT_ARRAY"
	FilterRuleParameterDefinitionValueTypeEnumCharacterArray     FilterRuleParameterDefinitionValueTypeEnum = "CHARACTER_ARRAY"
	FilterRuleParameterDefinitionValueTypeEnumIntegerArray       FilterRuleParameterDefinitionValueTypeEnum = "INTEGER_ARRAY"
	FilterRuleParameterDefinitionValueTypeEnumFloatArray         FilterRuleParameterDefinitionValueTypeEnum = "FLOAT_ARRAY"
	FilterRuleParameterDefinitionValueTypeEnumDoubleArray        FilterRuleParameterDefinitionValueTypeEnum = "DOUBLE_ARRAY"
	FilterRuleParameterDefinitionValueTypeEnumBooleanArray       FilterRuleParameterDefinitionValueTypeEnum = "BOOLEAN_ARRAY"
	FilterRuleParameterDefinitionValueTypeEnumStringArray        FilterRuleParameterDefinitionValueTypeEnum = "STRING_ARRAY"
	FilterRuleParameterDefinitionValueTypeEnumBigIntegerArray    FilterRuleParameterDefinitionValueTypeEnum = "BIG_INTEGER_ARRAY"
	FilterRuleParameterDefinitionValueTypeEnumBigDecimalArray    FilterRuleParameterDefinitionValueTypeEnum = "BIG_DECIMAL_ARRAY"
	FilterRuleParameterDefinitionValueTypeEnumLocalDateArray     FilterRuleParameterDefinitionValueTypeEnum = "LOCAL_DATE_ARRAY"
	FilterRuleParameterDefinitionValueTypeEnumLocalDateTimeArray FilterRuleParameterDefinitionValueTypeEnum = "LOCAL_DATE_TIME_ARRAY"
	FilterRuleParameterDefinitionValueTypeEnumTimestampArray     FilterRuleParameterDefinitionValueTypeEnum = "TIMESTAMP_ARRAY"
)

// FilterRuleParameterDefinition
// Definition of a filter rule parameter.
type FilterRuleParameterDefinition struct {
	Description *string                                     `json:"description,omitempty"`
	DisplayName *string                                     `json:"displayName,omitempty"`
	Options     []string                                    `json:"options,omitempty"`
	ValueType   *FilterRuleParameterDefinitionValueTypeEnum `json:"valueType,omitempty"`
}
