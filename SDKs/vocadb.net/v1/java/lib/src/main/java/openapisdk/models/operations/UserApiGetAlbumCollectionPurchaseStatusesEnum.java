package openapisdk.models.operations;


public enum UserApiGetAlbumCollectionPurchaseStatusesEnum {
    NOTHING("Nothing"),
    WISHLISTED("Wishlisted"),
    ORDERED("Ordered"),
    OWNED("Owned"),
    ALL("All");

    public final String value;

    private UserApiGetAlbumCollectionPurchaseStatusesEnum(String value) {
        this.value = value;
    }
}
