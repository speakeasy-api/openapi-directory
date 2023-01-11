package openapisdk.models.shared;


public enum GroupMembershipCriteriaMembershipTypeEnum {
    SEARCH_MEMBERSHIP_CRITERIA("SearchMembershipCriteria"),
    IP_ADDRESS_MEMBERSHIP_CRITERIA("IPAddressMembershipCriteria");

    public final String value;

    private GroupMembershipCriteriaMembershipTypeEnum(String value) {
        this.value = value;
    }
}
