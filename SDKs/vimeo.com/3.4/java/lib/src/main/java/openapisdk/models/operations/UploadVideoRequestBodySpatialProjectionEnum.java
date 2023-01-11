package openapisdk.models.operations;


public enum UploadVideoRequestBodySpatialProjectionEnum {
    CUBICAL("cubical"),
    CYLINDRICAL("cylindrical"),
    DOME("dome"),
    EQUIRECTANGULAR("equirectangular"),
    PYRAMID("pyramid");

    public final String value;

    private UploadVideoRequestBodySpatialProjectionEnum(String value) {
        this.value = value;
    }
}
