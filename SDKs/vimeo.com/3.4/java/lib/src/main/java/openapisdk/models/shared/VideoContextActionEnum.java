package openapisdk.models.shared;


public enum VideoContextActionEnum {
    ADDED_TO("Added to"),
    APPEARANCE_BY("Appearance by"),
    LIKED_BY("Liked by"),
    UPLOADED_BY("Uploaded by");

    public final String value;

    private VideoContextActionEnum(String value) {
        this.value = value;
    }
}
