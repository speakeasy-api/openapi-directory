package openapisdk.models.shared;


public enum PlayProgressiveTypeEnum {
    SOURCE("source"),
    VIDEO_MP4("video/mp4"),
    VIDEO_WEBM("video/webm"),
    VP6_X_VIDEO("vp6/x-video");

    public final String value;

    private PlayProgressiveTypeEnum(String value) {
        this.value = value;
    }
}
