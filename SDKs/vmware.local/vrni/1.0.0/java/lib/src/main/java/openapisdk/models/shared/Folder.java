package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Folder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_id")
    public String entityId;
    public Folder withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_type")
    public EntityTypeEnum entityType;
    public Folder withEntityType(EntityTypeEnum entityType) {
        this.entityType = entityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Folder withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vcenter_manager")
    public Reference vcenterManager;
    public Folder withVcenterManager(Reference vcenterManager) {
        this.vcenterManager = vcenterManager;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vendor_id")
    public String vendorId;
    public Folder withVendorId(String vendorId) {
        this.vendorId = vendorId;
        return this;
    }
}