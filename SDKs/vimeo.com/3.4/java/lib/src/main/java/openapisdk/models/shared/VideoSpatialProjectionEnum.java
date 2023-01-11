package openapisdk.models.shared;


public enum VideoSpatialProjectionEnum {
    CUBICAL("cubical"),
    CYLINDRICAL("cylindrical"),
    DOME("dome"),
    EQUIRECTANGULAR("equirectangular"),
    PYRAMID("pyramid");

    public final String value;

    private VideoSpatialProjectionEnum(String value) {
        this.value = value;
    }
}
