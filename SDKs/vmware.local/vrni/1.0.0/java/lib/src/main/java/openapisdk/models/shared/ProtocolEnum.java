package openapisdk.models.shared;


public enum ProtocolEnum {
    TCP("TCP"),
    UDP("UDP"),
    OTHER("OTHER");

    public final String value;

    private ProtocolEnum(String value) {
        this.value = value;
    }
}
