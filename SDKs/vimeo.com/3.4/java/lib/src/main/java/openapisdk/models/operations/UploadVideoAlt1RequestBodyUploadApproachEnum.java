package openapisdk.models.operations;


public enum UploadVideoAlt1RequestBodyUploadApproachEnum {
    POST("post"),
    PULL("pull"),
    STREAMING("streaming"),
    TUS("tus");

    public final String value;

    private UploadVideoAlt1RequestBodyUploadApproachEnum(String value) {
        this.value = value;
    }
}
