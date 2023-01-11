package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreatePathwayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=auth")
    public String auth;
    public PostCreatePathwayQueryParams withAuth(String auth) {
        this.auth = auth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public PostCreatePathwayFormatEnum format;
    public PostCreatePathwayQueryParams withFormat(PostCreatePathwayFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=gpml")
    public String gpml;
    public PostCreatePathwayQueryParams withGpml(String gpml) {
        this.gpml = gpml;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=username")
    public String username;
    public PostCreatePathwayQueryParams withUsername(String username) {
        this.username = username;
        return this;
    }
}