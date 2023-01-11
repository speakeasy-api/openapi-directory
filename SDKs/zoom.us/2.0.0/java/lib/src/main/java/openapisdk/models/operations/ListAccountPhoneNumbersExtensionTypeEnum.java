package openapisdk.models.operations;


public enum ListAccountPhoneNumbersExtensionTypeEnum {
    USER("user"),
    CALL_QUEUE("callQueue"),
    AUTO_RECEPTIONIST("autoReceptionist"),
    COMMON_AREA_PHONE("commonAreaPhone");

    public final String value;

    private ListAccountPhoneNumbersExtensionTypeEnum(String value) {
        this.value = value;
    }
}
