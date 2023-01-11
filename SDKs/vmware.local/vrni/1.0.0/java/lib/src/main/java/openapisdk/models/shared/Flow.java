package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Flow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_cluster")
    public Reference destinationCluster;
    public Flow withDestinationCluster(Reference destinationCluster) {
        this.destinationCluster = destinationCluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_datacenter")
    public Reference destinationDatacenter;
    public Flow withDestinationDatacenter(Reference destinationDatacenter) {
        this.destinationDatacenter = destinationDatacenter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_folders")
    public Reference[] destinationFolders;
    public Flow withDestinationFolders(Reference[] destinationFolders) {
        this.destinationFolders = destinationFolders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_host")
    public Reference destinationHost;
    public Flow withDestinationHost(Reference destinationHost) {
        this.destinationHost = destinationHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_ip")
    public IpV4Address destinationIp;
    public Flow withDestinationIp(IpV4Address destinationIp) {
        this.destinationIp = destinationIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_ip_sets")
    public Reference[] destinationIpSets;
    public Flow withDestinationIpSets(Reference[] destinationIpSets) {
        this.destinationIpSets = destinationIpSets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_l2_network")
    public Reference destinationL2Network;
    public Flow withDestinationL2Network(Reference destinationL2Network) {
        this.destinationL2Network = destinationL2Network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_resource_pool")
    public Reference destinationResourcePool;
    public Flow withDestinationResourcePool(Reference destinationResourcePool) {
        this.destinationResourcePool = destinationResourcePool;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_security_groups")
    public Reference[] destinationSecurityGroups;
    public Flow withDestinationSecurityGroups(Reference[] destinationSecurityGroups) {
        this.destinationSecurityGroups = destinationSecurityGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_security_tags")
    public Reference[] destinationSecurityTags;
    public Flow withDestinationSecurityTags(Reference[] destinationSecurityTags) {
        this.destinationSecurityTags = destinationSecurityTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_vm")
    public Reference destinationVm;
    public Flow withDestinationVm(Reference destinationVm) {
        this.destinationVm = destinationVm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_vm_tags")
    public String[] destinationVmTags;
    public Flow withDestinationVmTags(String[] destinationVmTags) {
        this.destinationVmTags = destinationVmTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_vnic")
    public Reference destinationVnic;
    public Flow withDestinationVnic(Reference destinationVnic) {
        this.destinationVnic = destinationVnic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_vpc")
    public Reference destinationVpc;
    public Flow withDestinationVpc(Reference destinationVpc) {
        this.destinationVpc = destinationVpc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_id")
    public String entityId;
    public Flow withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_type")
    public EntityTypeEnum entityType;
    public Flow withEntityType(EntityTypeEnum entityType) {
        this.entityType = entityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firewall_action")
    public FirewallActionEnum firewallAction;
    public Flow withFirewallAction(FirewallActionEnum firewallAction) {
        this.firewallAction = firewallAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flow_tag")
    public FlowTagEnum[] flowTag;
    public Flow withFlowTag(FlowTagEnum[] flowTag) {
        this.flowTag = flowTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Flow withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public PortRange port;
    public Flow withPort(PortRange port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public ProtocolEnum protocol;
    public Flow withProtocol(ProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_cluster")
    public Reference sourceCluster;
    public Flow withSourceCluster(Reference sourceCluster) {
        this.sourceCluster = sourceCluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_datacenter")
    public Reference sourceDatacenter;
    public Flow withSourceDatacenter(Reference sourceDatacenter) {
        this.sourceDatacenter = sourceDatacenter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_folders")
    public Reference[] sourceFolders;
    public Flow withSourceFolders(Reference[] sourceFolders) {
        this.sourceFolders = sourceFolders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_host")
    public Reference sourceHost;
    public Flow withSourceHost(Reference sourceHost) {
        this.sourceHost = sourceHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_ip")
    public IpV4Address sourceIp;
    public Flow withSourceIp(IpV4Address sourceIp) {
        this.sourceIp = sourceIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_ip_sets")
    public Reference[] sourceIpSets;
    public Flow withSourceIpSets(Reference[] sourceIpSets) {
        this.sourceIpSets = sourceIpSets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_l2_network")
    public Reference sourceL2Network;
    public Flow withSourceL2Network(Reference sourceL2Network) {
        this.sourceL2Network = sourceL2Network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_resource_pool")
    public Reference sourceResourcePool;
    public Flow withSourceResourcePool(Reference sourceResourcePool) {
        this.sourceResourcePool = sourceResourcePool;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_security_groups")
    public Reference[] sourceSecurityGroups;
    public Flow withSourceSecurityGroups(Reference[] sourceSecurityGroups) {
        this.sourceSecurityGroups = sourceSecurityGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_security_tags")
    public Reference[] sourceSecurityTags;
    public Flow withSourceSecurityTags(Reference[] sourceSecurityTags) {
        this.sourceSecurityTags = sourceSecurityTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_vm")
    public Reference sourceVm;
    public Flow withSourceVm(Reference sourceVm) {
        this.sourceVm = sourceVm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_vm_tags")
    public String[] sourceVmTags;
    public Flow withSourceVmTags(String[] sourceVmTags) {
        this.sourceVmTags = sourceVmTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_vnic")
    public Reference sourceVnic;
    public Flow withSourceVnic(Reference sourceVnic) {
        this.sourceVnic = sourceVnic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_vpc")
    public Reference sourceVpc;
    public Flow withSourceVpc(Reference sourceVpc) {
        this.sourceVpc = sourceVpc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("traffic_type")
    public FlowTrafficTypeEnum trafficType;
    public Flow withTrafficType(FlowTrafficTypeEnum trafficType) {
        this.trafficType = trafficType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("within_host")
    public Boolean withinHost;
    public Flow withWithinHost(Boolean withinHost) {
        this.withinHost = withinHost;
        return this;
    }
}