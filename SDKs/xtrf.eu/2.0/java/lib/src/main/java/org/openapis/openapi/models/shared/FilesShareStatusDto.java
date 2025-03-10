/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * FilesShareStatusDto - Success
 */
public class FilesShareStatusDto {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statuses")
    public FileShareStatusDto[] statuses;

    public FilesShareStatusDto withStatuses(FileShareStatusDto[] statuses) {
        this.statuses = statuses;
        return this;
    }
    
    public FilesShareStatusDto(){}
}
