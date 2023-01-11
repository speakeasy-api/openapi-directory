package openapisdk.models.operations;


public enum UploadVideoRequestBodyUploadApproachEnum {
    POST("post"),
    PULL("pull"),
    STREAMING("streaming"),
    TUS("tus");

    public final String value;

    private UploadVideoRequestBodyUploadApproachEnum(String value) {
        this.value = value;
    }
}
