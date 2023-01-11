package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CallLogsHalResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public CallLogsEmbeddedObject embedded;
    public CallLogsHalResponse withEmbedded(CallLogsEmbeddedObject embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public Links links;
    public CallLogsHalResponse withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Double page;
    public CallLogsHalResponse withPage(Double page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Double pageSize;
    public CallLogsHalResponse withPageSize(Double pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_items")
    public Double totalItems;
    public CallLogsHalResponse withTotalItems(Double totalItems) {
        this.totalItems = totalItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_page")
    public Double totalPage;
    public CallLogsHalResponse withTotalPage(Double totalPage) {
        this.totalPage = totalPage;
        return this;
    }
}