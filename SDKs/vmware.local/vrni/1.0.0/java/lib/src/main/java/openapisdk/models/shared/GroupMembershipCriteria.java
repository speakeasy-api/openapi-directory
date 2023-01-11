package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupMembershipCriteria
 * EntityType currently restricted to VirtualMachine
**/
public class GroupMembershipCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_address_membership_criteria")
    public IpAddressMembershipCriteria ipAddressMembershipCriteria;
    public GroupMembershipCriteria withIpAddressMembershipCriteria(IpAddressMembershipCriteria ipAddressMembershipCriteria) {
        this.ipAddressMembershipCriteria = ipAddressMembershipCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("membership_type")
    public GroupMembershipCriteriaMembershipTypeEnum membershipType;
    public GroupMembershipCriteria withMembershipType(GroupMembershipCriteriaMembershipTypeEnum membershipType) {
        this.membershipType = membershipType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_membership_criteria")
    public SearchMembershipCriteria searchMembershipCriteria;
    public GroupMembershipCriteria withSearchMembershipCriteria(SearchMembershipCriteria searchMembershipCriteria) {
        this.searchMembershipCriteria = searchMembershipCriteria;
        return this;
    }
}