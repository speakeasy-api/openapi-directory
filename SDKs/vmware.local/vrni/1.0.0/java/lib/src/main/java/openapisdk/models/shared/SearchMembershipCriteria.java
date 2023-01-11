package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchMembershipCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_type")
    public AllEntityTypeEnum entityType;
    public SearchMembershipCriteria withEntityType(AllEntityTypeEnum entityType) {
        this.entityType = entityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public SearchMembershipCriteria withFilter(String filter) {
        this.filter = filter;
        return this;
    }
}