package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchUsersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public SearchUsersDirectionEnum direction;
    public SearchUsersQueryParams withDirection(SearchUsersDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public SearchUsersQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Double perPage;
    public SearchUsersQueryParams withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public SearchUsersQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public SearchUsersSortEnum sort;
    public SearchUsersQueryParams withSort(SearchUsersSortEnum sort) {
        this.sort = sort;
        return this;
    }
}