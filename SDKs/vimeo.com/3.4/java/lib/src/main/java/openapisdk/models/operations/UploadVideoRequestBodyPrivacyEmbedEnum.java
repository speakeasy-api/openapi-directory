package openapisdk.models.operations;


public enum UploadVideoRequestBodyPrivacyEmbedEnum {
    PRIVATE_("private"),
    PUBLIC_("public"),
    WHITELIST("whitelist");

    public final String value;

    private UploadVideoRequestBodyPrivacyEmbedEnum(String value) {
        this.value = value;
    }
}
