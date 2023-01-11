package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetAllOrdersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dateFilterOption")
    public String dateFilterOption;
    public GetAllOrdersQueryParams withDateFilterOption(String dateFilterOption) {
        this.dateFilterOption = dateFilterOption;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate")
    public LocalDate endDate;
    public GetAllOrdersQueryParams withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetAllOrdersQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetAllOrdersQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate")
    public LocalDate startDate;
    public GetAllOrdersQueryParams withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
}