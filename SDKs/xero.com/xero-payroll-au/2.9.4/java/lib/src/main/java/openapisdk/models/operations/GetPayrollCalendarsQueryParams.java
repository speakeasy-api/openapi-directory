package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayrollCalendarsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public String order;
    public GetPayrollCalendarsQueryParams withOrder(String order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetPayrollCalendarsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=where")
    public String where;
    public GetPayrollCalendarsQueryParams withWhere(String where) {
        this.where = where;
        return this;
    }
}