package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EndUserRouteHalResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public EndUserRouteEmbeddedObject embedded;
    public EndUserRouteHalResponse withEmbedded(EndUserRouteEmbeddedObject embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public Links links;
    public EndUserRouteHalResponse withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Double page;
    public EndUserRouteHalResponse withPage(Double page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Double pageSize;
    public EndUserRouteHalResponse withPageSize(Double pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_items")
    public Double totalItems;
    public EndUserRouteHalResponse withTotalItems(Double totalItems) {
        this.totalItems = totalItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_pages")
    public Double totalPages;
    public EndUserRouteHalResponse withTotalPages(Double totalPages) {
        this.totalPages = totalPages;
        return this;
    }
}