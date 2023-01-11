package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAdminMappings200ApplicationJsonMappingsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalProxyRequestHeaders")
    public java.util.Map<String, Object> additionalProxyRequestHeaders;
    public GetAdminMappings200ApplicationJsonMappingsResponse withAdditionalProxyRequestHeaders(java.util.Map<String, Object> additionalProxyRequestHeaders) {
        this.additionalProxyRequestHeaders = additionalProxyRequestHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("base64Body")
    public String base64Body;
    public GetAdminMappings200ApplicationJsonMappingsResponse withBase64Body(String base64Body) {
        this.base64Body = base64Body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public GetAdminMappings200ApplicationJsonMappingsResponse withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bodyFileName")
    public String bodyFileName;
    public GetAdminMappings200ApplicationJsonMappingsResponse withBodyFileName(String bodyFileName) {
        this.bodyFileName = bodyFileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fault")
    public GetAdminMappings200ApplicationJsonMappingsResponseFaultEnum fault;
    public GetAdminMappings200ApplicationJsonMappingsResponse withFault(GetAdminMappings200ApplicationJsonMappingsResponseFaultEnum fault) {
        this.fault = fault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedDelayMilliseconds")
    public Long fixedDelayMilliseconds;
    public GetAdminMappings200ApplicationJsonMappingsResponse withFixedDelayMilliseconds(Long fixedDelayMilliseconds) {
        this.fixedDelayMilliseconds = fixedDelayMilliseconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromConfiguredStub")
    public Boolean fromConfiguredStub;
    public GetAdminMappings200ApplicationJsonMappingsResponse withFromConfiguredStub(Boolean fromConfiguredStub) {
        this.fromConfiguredStub = fromConfiguredStub;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public java.util.Map<String, Object> headers;
    public GetAdminMappings200ApplicationJsonMappingsResponse withHeaders(java.util.Map<String, Object> headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jsonBody")
    public java.util.Map<String, Object> jsonBody;
    public GetAdminMappings200ApplicationJsonMappingsResponse withJsonBody(java.util.Map<String, Object> jsonBody) {
        this.jsonBody = jsonBody;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proxyBaseUrl")
    public String proxyBaseUrl;
    public GetAdminMappings200ApplicationJsonMappingsResponse withProxyBaseUrl(String proxyBaseUrl) {
        this.proxyBaseUrl = proxyBaseUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public GetAdminMappings200ApplicationJsonMappingsResponse withStatus(Long status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusMessage")
    public String statusMessage;
    public GetAdminMappings200ApplicationJsonMappingsResponse withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transformerParameters")
    public java.util.Map<String, Object> transformerParameters;
    public GetAdminMappings200ApplicationJsonMappingsResponse withTransformerParameters(java.util.Map<String, Object> transformerParameters) {
        this.transformerParameters = transformerParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transformers")
    public String[] transformers;
    public GetAdminMappings200ApplicationJsonMappingsResponse withTransformers(String[] transformers) {
        this.transformers = transformers;
        return this;
    }
}