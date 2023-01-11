package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePhoneSiteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=transfer_site_id")
    public String transferSiteId;
    public DeletePhoneSiteQueryParams withTransferSiteId(String transferSiteId) {
        this.transferSiteId = transferSiteId;
        return this;
    }
}