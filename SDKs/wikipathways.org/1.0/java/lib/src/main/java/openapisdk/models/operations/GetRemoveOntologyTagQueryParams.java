package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRemoveOntologyTagQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=auth")
    public String auth;
    public GetRemoveOntologyTagQueryParams withAuth(String auth) {
        this.auth = auth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetRemoveOntologyTagFormatEnum format;
    public GetRemoveOntologyTagQueryParams withFormat(GetRemoveOntologyTagFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pwId")
    public String pwId;
    public GetRemoveOntologyTagQueryParams withPwId(String pwId) {
        this.pwId = pwId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=termId")
    public String termId;
    public GetRemoveOntologyTagQueryParams withTermId(String termId) {
        this.termId = termId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=user")
    public String user;
    public GetRemoveOntologyTagQueryParams withUser(String user) {
        this.user = user;
        return this;
    }
}