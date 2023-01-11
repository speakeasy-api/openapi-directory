package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserCtrlGetUsersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public UserCtrlGetUsersQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=first_name")
    public String firstName;
    public UserCtrlGetUsersQueryParams withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_name")
    public String lastName;
    public UserCtrlGetUsersQueryParams withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=login_name")
    public String loginName;
    public UserCtrlGetUsersQueryParams withLoginName(String loginName) {
        this.loginName = loginName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public UserCtrlGetUsersQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Double pageSize;
    public UserCtrlGetUsersQueryParams withPageSize(Double pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}