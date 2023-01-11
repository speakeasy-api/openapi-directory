package openapisdk.models.shared;


public enum VideoVersionsUploadApproachEnum {
    POST("post"),
    PULL("pull"),
    STREAMING("streaming"),
    TUS("tus");

    public final String value;

    private VideoVersionsUploadApproachEnum(String value) {
        this.value = value;
    }
}
