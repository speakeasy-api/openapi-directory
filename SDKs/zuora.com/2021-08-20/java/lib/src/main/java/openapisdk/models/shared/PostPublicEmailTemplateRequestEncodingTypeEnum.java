package openapisdk.models.shared;


public enum PostPublicEmailTemplateRequestEncodingTypeEnum {
    UTF8("UTF8"),
    SHIFT_JIS("Shift_JIS"),
    ISO2022_JP("ISO_2022_JP"),
    EUC_JP("EUC_JP"),
    X_SJIS0213("X_SJIS_0213");

    public final String value;

    private PostPublicEmailTemplateRequestEncodingTypeEnum(String value) {
        this.value = value;
    }
}
