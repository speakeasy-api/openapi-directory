package openapisdk.models.shared;


public enum AlbumPrivacyViewEnum {
    ANYBODY("anybody"),
    EMBED_ONLY("embed_only"),
    PASSWORD("password");

    public final String value;

    private AlbumPrivacyViewEnum(String value) {
        this.value = value;
    }
}
