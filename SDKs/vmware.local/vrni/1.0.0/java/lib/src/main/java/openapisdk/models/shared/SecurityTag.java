package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SecurityTag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SecurityTag withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direct_security_groups")
    public Reference[] directSecurityGroups;
    public SecurityTag withDirectSecurityGroups(Reference[] directSecurityGroups) {
        this.directSecurityGroups = directSecurityGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_id")
    public String entityId;
    public SecurityTag withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_type")
    public EntityTypeEnum entityType;
    public SecurityTag withEntityType(EntityTypeEnum entityType) {
        this.entityType = entityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SecurityTag withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nsx_manager")
    public Reference nsxManager;
    public SecurityTag withNsxManager(Reference nsxManager) {
        this.nsxManager = nsxManager;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("security_groups")
    public Reference[] securityGroups;
    public SecurityTag withSecurityGroups(Reference[] securityGroups) {
        this.securityGroups = securityGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vendor_id")
    public String vendorId;
    public SecurityTag withVendorId(String vendorId) {
        this.vendorId = vendorId;
        return this;
    }
}