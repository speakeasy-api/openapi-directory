package openapisdk.models.operations;



public class GetUcsSnmpConfigResponse {
    public String contentType;
    public GetUcsSnmpConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SnmpConfig snmpConfig;
    public GetUcsSnmpConfigResponse withSnmpConfig(openapisdk.models.shared.SnmpConfig snmpConfig) {
        this.snmpConfig = snmpConfig;
        return this;
    }
    public Long statusCode;
    public GetUcsSnmpConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}