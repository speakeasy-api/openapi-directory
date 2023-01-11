package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAccountPhoneNumbersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=extension_type")
    public ListAccountPhoneNumbersExtensionTypeEnum extensionType;
    public ListAccountPhoneNumbersQueryParams withExtensionType(ListAccountPhoneNumbersExtensionTypeEnum extensionType) {
        this.extensionType = extensionType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public ListAccountPhoneNumbersQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=number_type")
    public ListAccountPhoneNumbersNumberTypeEnum numberType;
    public ListAccountPhoneNumbersQueryParams withNumberType(ListAccountPhoneNumbersNumberTypeEnum numberType) {
        this.numberType = numberType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public ListAccountPhoneNumbersQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pending_numbers")
    public Boolean pendingNumbers;
    public ListAccountPhoneNumbersQueryParams withPendingNumbers(Boolean pendingNumbers) {
        this.pendingNumbers = pendingNumbers;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site_id")
    public String siteId;
    public ListAccountPhoneNumbersQueryParams withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public ListAccountPhoneNumbersTypeEnum type;
    public ListAccountPhoneNumbersQueryParams withType(ListAccountPhoneNumbersTypeEnum type) {
        this.type = type;
        return this;
    }
}