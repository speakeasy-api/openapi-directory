package openapisdk.models.operations;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentRunsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdById")
    public String createdById;
    public GetPaymentRunsQueryParams withCreatedById(String createdById) {
        this.createdById = createdById;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdDate")
    public OffsetDateTime createdDate;
    public GetPaymentRunsQueryParams withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetPaymentRunsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetPaymentRunsQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public openapisdk.models.shared.GlobalRequestPageSizeEnum4 status;
    public GetPaymentRunsQueryParams withStatus(openapisdk.models.shared.GlobalRequestPageSizeEnum4 status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=targetDate")
    public LocalDate targetDate;
    public GetPaymentRunsQueryParams withTargetDate(LocalDate targetDate) {
        this.targetDate = targetDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedById")
    public String updatedById;
    public GetPaymentRunsQueryParams withUpdatedById(String updatedById) {
        this.updatedById = updatedById;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedDate")
    public OffsetDateTime updatedDate;
    public GetPaymentRunsQueryParams withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}