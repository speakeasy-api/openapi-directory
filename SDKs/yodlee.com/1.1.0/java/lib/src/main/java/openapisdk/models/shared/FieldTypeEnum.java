package openapisdk.models.shared;


public enum FieldTypeEnum {
    TEXT("text"),
    PASSWORD("password"),
    OPTION("option"),
    CHECKBOX("checkbox"),
    RADIO("radio"),
    IMAGE("image");

    public final String value;

    private FieldTypeEnum(String value) {
        this.value = value;
    }
}
