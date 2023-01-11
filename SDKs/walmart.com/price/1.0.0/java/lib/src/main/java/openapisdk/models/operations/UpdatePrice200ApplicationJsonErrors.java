package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePrice200ApplicationJsonErrors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public UpdatePrice200ApplicationJsonErrorsCategoryEnum category;
    public UpdatePrice200ApplicationJsonErrors withCategory(UpdatePrice200ApplicationJsonErrorsCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("causes")
    public UpdatePrice200ApplicationJsonErrorsCauses[] causes;
    public UpdatePrice200ApplicationJsonErrors withCauses(UpdatePrice200ApplicationJsonErrorsCauses[] causes) {
        this.causes = causes;
        return this;
    }
    @JsonProperty("code")
    public String code;
    public UpdatePrice200ApplicationJsonErrors withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("component")
    public String component;
    public UpdatePrice200ApplicationJsonErrors withComponent(String component) {
        this.component = component;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdatePrice200ApplicationJsonErrors withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorIdentifiers")
    public java.util.Map<String, java.util.Map<String, Object>> errorIdentifiers;
    public UpdatePrice200ApplicationJsonErrors withErrorIdentifiers(java.util.Map<String, java.util.Map<String, Object>> errorIdentifiers) {
        this.errorIdentifiers = errorIdentifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public String field;
    public UpdatePrice200ApplicationJsonErrors withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayErrorCategory")
    public UpdatePrice200ApplicationJsonErrorsGatewayErrorCategoryEnum gatewayErrorCategory;
    public UpdatePrice200ApplicationJsonErrors withGatewayErrorCategory(UpdatePrice200ApplicationJsonErrorsGatewayErrorCategoryEnum gatewayErrorCategory) {
        this.gatewayErrorCategory = gatewayErrorCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info")
    public String info;
    public UpdatePrice200ApplicationJsonErrors withInfo(String info) {
        this.info = info;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceName")
    public String serviceName;
    public UpdatePrice200ApplicationJsonErrors withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public UpdatePrice200ApplicationJsonErrorsSeverityEnum severity;
    public UpdatePrice200ApplicationJsonErrors withSeverity(UpdatePrice200ApplicationJsonErrorsSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public UpdatePrice200ApplicationJsonErrors withType(String type) {
        this.type = type;
        return this;
    }
}