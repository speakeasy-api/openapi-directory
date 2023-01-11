package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * AccountPlanAddonCreateMultipartFormData1
 * Account plan object.
**/
public class AccountPlanAddonCreateMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=hosts")
    public Long hosts;
    public AccountPlanAddonCreateMultipartFormData1 withHosts(Long hosts) {
        this.hosts = hosts;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=type")
    public String type;
    public AccountPlanAddonCreateMultipartFormData1 withType(String type) {
        this.type = type;
        return this;
    }
}