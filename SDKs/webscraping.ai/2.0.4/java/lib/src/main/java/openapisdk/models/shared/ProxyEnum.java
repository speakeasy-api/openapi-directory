package openapisdk.models.shared;


public enum ProxyEnum {
    DATACENTER("datacenter"),
    RESIDENTIAL("residential");

    public final String value;

    private ProxyEnum(String value) {
        this.value = value;
    }
}
