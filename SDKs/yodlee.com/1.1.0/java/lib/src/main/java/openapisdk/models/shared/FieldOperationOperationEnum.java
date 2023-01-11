package openapisdk.models.shared;


public enum FieldOperationOperationEnum {
    NUMBER_EQUALS("numberEquals"),
    NUMBER_LESS_THAN("numberLessThan"),
    NUMBER_LESS_THAN_EQUALS("numberLessThanEquals"),
    NUMBER_GREATER_THAN("numberGreaterThan"),
    NUMBER_GREATER_THAN_EQUALS("numberGreaterThanEquals"),
    STRING_EQUALS("stringEquals"),
    STRING_CONTAINS("stringContains");

    public final String value;

    private FieldOperationOperationEnum(String value) {
        this.value = value;
    }
}
