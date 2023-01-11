package openapisdk.models.shared;


public enum OnDemandPageVideoSpatialProjectionEnum {
    CUBICAL("cubical"),
    CYLINDRICAL("cylindrical"),
    DOME("dome"),
    EQUIRECTANGULAR("equirectangular"),
    PYRAMID("pyramid");

    public final String value;

    private OnDemandPageVideoSpatialProjectionEnum(String value) {
        this.value = value;
    }
}
