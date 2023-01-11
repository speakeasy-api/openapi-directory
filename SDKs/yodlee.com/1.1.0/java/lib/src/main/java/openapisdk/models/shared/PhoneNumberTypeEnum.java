package openapisdk.models.shared;


public enum PhoneNumberTypeEnum {
    HOME("HOME"),
    WORK("WORK"),
    LANDLINE("LANDLINE"),
    MOBILE("MOBILE");

    public final String value;

    private PhoneNumberTypeEnum(String value) {
        this.value = value;
    }
}
