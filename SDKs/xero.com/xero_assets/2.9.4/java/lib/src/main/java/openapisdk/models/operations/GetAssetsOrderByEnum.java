package openapisdk.models.operations;


public enum GetAssetsOrderByEnum {
    ASSET_TYPE("AssetType"),
    ASSET_NAME("AssetName"),
    ASSET_NUMBER("AssetNumber"),
    PURCHASE_DATE("PurchaseDate"),
    PURCHASE_PRICE("PurchasePrice"),
    DISPOSAL_DATE("DisposalDate"),
    DISPOSAL_PRICE("DisposalPrice");

    public final String value;

    private GetAssetsOrderByEnum(String value) {
        this.value = value;
    }
}
