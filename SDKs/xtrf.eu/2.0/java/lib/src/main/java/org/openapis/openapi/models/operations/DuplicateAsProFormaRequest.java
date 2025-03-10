/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DuplicateAsProFormaRequest {
    /**
     * client invoice's internal identifier
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=invoiceId")
    public Long invoiceId;

    public DuplicateAsProFormaRequest withInvoiceId(Long invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
    
    public DuplicateAsProFormaRequest(@JsonProperty("invoiceId") Long invoiceId) {
        this.invoiceId = invoiceId;
  }
}
