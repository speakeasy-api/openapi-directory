package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEmployeesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public String order;
    public GetEmployeesQueryParams withOrder(String order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetEmployeesQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=where")
    public String where;
    public GetEmployeesQueryParams withWhere(String where) {
        this.where = where;
        return this;
    }
}