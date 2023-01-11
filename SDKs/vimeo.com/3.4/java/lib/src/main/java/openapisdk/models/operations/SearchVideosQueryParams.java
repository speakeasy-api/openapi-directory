package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchVideosQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public SearchVideosDirectionEnum direction;
    public SearchVideosQueryParams withDirection(SearchVideosDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public SearchVideosFilterEnum filter;
    public SearchVideosQueryParams withFilter(SearchVideosFilterEnum filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=links")
    public String links;
    public SearchVideosQueryParams withLinks(String links) {
        this.links = links;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public SearchVideosQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public SearchVideosQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public SearchVideosQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public SearchVideosSortEnum sort;
    public SearchVideosQueryParams withSort(SearchVideosSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uris")
    public String uris;
    public SearchVideosQueryParams withUris(String uris) {
        this.uris = uris;
        return this;
    }
}