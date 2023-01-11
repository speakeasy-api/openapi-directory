package openapisdk.models.operations;


public enum VenueApiGetListFieldsEnum {
    NONE("None"),
    ADDITIONAL_NAMES("AdditionalNames"),
    DESCRIPTION("Description"),
    EVENTS("Events"),
    NAMES("Names"),
    WEB_LINKS("WebLinks");

    public final String value;

    private VenueApiGetListFieldsEnum(String value) {
        this.value = value;
    }
}
