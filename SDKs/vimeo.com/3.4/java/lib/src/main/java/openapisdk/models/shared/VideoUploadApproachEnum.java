package openapisdk.models.shared;


public enum VideoUploadApproachEnum {
    POST("post"),
    PULL("pull"),
    STREAMING("streaming"),
    TUS("tus");

    public final String value;

    private VideoUploadApproachEnum(String value) {
        this.value = value;
    }
}
