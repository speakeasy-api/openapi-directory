/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

/**
 * FileProperties - The properties of a file on a compute node.
 */
public class FileProperties {
    /**
     * Gets or sets the length of the file.
     */
    @JsonProperty("contentLength")
    public Long contentLength;

    public FileProperties withContentLength(Long contentLength) {
        this.contentLength = contentLength;
        return this;
    }
    
    /**
     * Gets or sets the content type of the file.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentType")
    public String contentType;

    public FileProperties withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Gets or sets the file creation time.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("creationTime")
    public OffsetDateTime creationTime;

    public FileProperties withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    
    /**
     * Gets or sets the time at which the file was last modified.
     */
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastModified")
    public OffsetDateTime lastModified;

    public FileProperties withLastModified(OffsetDateTime lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    
    public FileProperties(@JsonProperty("contentLength") Long contentLength, @JsonProperty("lastModified") OffsetDateTime lastModified) {
        this.contentLength = contentLength;
        this.lastModified = lastModified;
  }
}
