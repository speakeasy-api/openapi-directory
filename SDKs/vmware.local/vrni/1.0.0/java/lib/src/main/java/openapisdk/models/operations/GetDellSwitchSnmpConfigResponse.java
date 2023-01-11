package openapisdk.models.operations;



public class GetDellSwitchSnmpConfigResponse {
    public String contentType;
    public GetDellSwitchSnmpConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SnmpConfig snmpConfig;
    public GetDellSwitchSnmpConfigResponse withSnmpConfig(openapisdk.models.shared.SnmpConfig snmpConfig) {
        this.snmpConfig = snmpConfig;
        return this;
    }
    public Long statusCode;
    public GetDellSwitchSnmpConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}