package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtensionCtrlGetAccountExtensionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public ExtensionCtrlGetAccountExtensionsQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=location_id")
    public Double locationId;
    public ExtensionCtrlGetAccountExtensionsQueryParams withLocationId(Double locationId) {
        this.locationId = locationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=login_name")
    public String loginName;
    public ExtensionCtrlGetAccountExtensionsQueryParams withLoginName(String loginName) {
        this.loginName = loginName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public ExtensionCtrlGetAccountExtensionsQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Double pageSize;
    public ExtensionCtrlGetAccountExtensionsQueryParams withPageSize(Double pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=phone_number")
    public String phoneNumber;
    public ExtensionCtrlGetAccountExtensionsQueryParams withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}