package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateEntityResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public CreateEntityResponseType withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CreateEntityResponseType withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public String locale;
    public CreateEntityResponseType withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateEntityResponseType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentId")
    public String parentId;
    public CreateEntityResponseType withParentId(String parentId) {
        this.parentId = parentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CreateEntityResponseTypeStatusEnum status;
    public CreateEntityResponseType withStatus(CreateEntityResponseTypeStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public CreateEntityResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenantId")
    public String tenantId;
    public CreateEntityResponseType withTenantId(String tenantId) {
        this.tenantId = tenantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public CreateEntityResponseType withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
}