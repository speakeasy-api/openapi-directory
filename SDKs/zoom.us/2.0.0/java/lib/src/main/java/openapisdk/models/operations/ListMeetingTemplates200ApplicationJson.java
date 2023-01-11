package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMeetingTemplates200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templates")
    public ListMeetingTemplates200ApplicationJsonTemplates[] templates;
    public ListMeetingTemplates200ApplicationJson withTemplates(ListMeetingTemplates200ApplicationJsonTemplates[] templates) {
        this.templates = templates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public ListMeetingTemplates200ApplicationJson withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}