package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSipTrunks200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sip_trunks")
    public ListSipTrunks200ApplicationJsonSipTrunks[] sipTrunks;
    public ListSipTrunks200ApplicationJson withSipTrunks(ListSipTrunks200ApplicationJsonSipTrunks[] sipTrunks) {
        this.sipTrunks = sipTrunks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public ListSipTrunks200ApplicationJson withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}