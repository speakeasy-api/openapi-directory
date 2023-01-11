package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BaseIpSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direct_destination_rules")
    public RuleSet[] directDestinationRules;
    public BaseIpSet withDirectDestinationRules(RuleSet[] directDestinationRules) {
        this.directDestinationRules = directDestinationRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direct_source_rules")
    public RuleSet[] directSourceRules;
    public BaseIpSet withDirectSourceRules(RuleSet[] directSourceRules) {
        this.directSourceRules = directSourceRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_id")
    public String entityId;
    public BaseIpSet withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_type")
    public EntityTypeEnum entityType;
    public BaseIpSet withEntityType(EntityTypeEnum entityType) {
        this.entityType = entityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indirect_destination_rules")
    public RuleSet[] indirectDestinationRules;
    public BaseIpSet withIndirectDestinationRules(RuleSet[] indirectDestinationRules) {
        this.indirectDestinationRules = indirectDestinationRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indirect_source_rules")
    public RuleSet[] indirectSourceRules;
    public BaseIpSet withIndirectSourceRules(RuleSet[] indirectSourceRules) {
        this.indirectSourceRules = indirectSourceRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_addresses")
    public IpV4Address[] ipAddresses;
    public BaseIpSet withIpAddresses(IpV4Address[] ipAddresses) {
        this.ipAddresses = ipAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_numeric_ranges")
    public Object[] ipNumericRanges;
    public BaseIpSet withIpNumericRanges(Object[] ipNumericRanges) {
        this.ipNumericRanges = ipNumericRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_ranges")
    public Object[] ipRanges;
    public BaseIpSet withIpRanges(Object[] ipRanges) {
        this.ipRanges = ipRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public BaseIpSet withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_security_groups")
    public Reference[] parentSecurityGroups;
    public BaseIpSet withParentSecurityGroups(Reference[] parentSecurityGroups) {
        this.parentSecurityGroups = parentSecurityGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("translated_vm_count")
    public Integer translatedVmCount;
    public BaseIpSet withTranslatedVmCount(Integer translatedVmCount) {
        this.translatedVmCount = translatedVmCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vendor")
    public String vendor;
    public BaseIpSet withVendor(String vendor) {
        this.vendor = vendor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vendor_id")
    public String vendorId;
    public BaseIpSet withVendorId(String vendorId) {
        this.vendorId = vendorId;
        return this;
    }
}