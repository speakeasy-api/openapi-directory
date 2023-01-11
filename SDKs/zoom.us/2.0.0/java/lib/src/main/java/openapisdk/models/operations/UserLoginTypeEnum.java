package openapisdk.models.operations;


public enum UserLoginTypeEnum {
    ZERO("0"),
    ONE("1"),
    NINETY_NINE("99"),
    ONE_HUNDRED("100"),
    ONE_HUNDRED_AND_ONE("101");

    public final String value;

    private UserLoginTypeEnum(String value) {
        this.value = value;
    }
}
