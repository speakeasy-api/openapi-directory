package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWatchLaterQueueQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public GetWatchLaterQueueDirectionEnum direction;
    public GetWatchLaterQueueQueryParams withDirection(GetWatchLaterQueueDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public GetWatchLaterQueueFilterEnum filter;
    public GetWatchLaterQueueQueryParams withFilter(GetWatchLaterQueueFilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter_embeddable")
    public Boolean filterEmbeddable;
    public GetWatchLaterQueueQueryParams withFilterEmbeddable(Boolean filterEmbeddable) {
        this.filterEmbeddable = filterEmbeddable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetWatchLaterQueueQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public GetWatchLaterQueueQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetWatchLaterQueueQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetWatchLaterQueueSortEnum sort;
    public GetWatchLaterQueueQueryParams withSort(GetWatchLaterQueueSortEnum sort) {
        this.sort = sort;
        return this;
    }
}