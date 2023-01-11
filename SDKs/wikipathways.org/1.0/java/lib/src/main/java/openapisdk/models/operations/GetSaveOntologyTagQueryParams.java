package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSaveOntologyTagQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=auth")
    public String auth;
    public GetSaveOntologyTagQueryParams withAuth(String auth) {
        this.auth = auth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetSaveOntologyTagFormatEnum format;
    public GetSaveOntologyTagQueryParams withFormat(GetSaveOntologyTagFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pwId")
    public String pwId;
    public GetSaveOntologyTagQueryParams withPwId(String pwId) {
        this.pwId = pwId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=term")
    public String term;
    public GetSaveOntologyTagQueryParams withTerm(String term) {
        this.term = term;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=termId")
    public String termId;
    public GetSaveOntologyTagQueryParams withTermId(String termId) {
        this.termId = termId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=user")
    public String user;
    public GetSaveOntologyTagQueryParams withUser(String user) {
        this.user = user;
        return this;
    }
}