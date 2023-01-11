package openapisdk.models.shared;


public enum OnDemandPageVideoUploadApproachEnum {
    POST("post"),
    PULL("pull"),
    STREAMING("streaming"),
    TUS("tus");

    public final String value;

    private OnDemandPageVideoUploadApproachEnum(String value) {
        this.value = value;
    }
}
