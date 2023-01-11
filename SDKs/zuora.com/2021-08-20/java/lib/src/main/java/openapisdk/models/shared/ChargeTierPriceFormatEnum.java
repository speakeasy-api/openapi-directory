package openapisdk.models.shared;


public enum ChargeTierPriceFormatEnum {
    FLAT_FEE("FlatFee"),
    PER_UNIT("PerUnit");

    public final String value;

    private ChargeTierPriceFormatEnum(String value) {
        this.value = value;
    }
}
