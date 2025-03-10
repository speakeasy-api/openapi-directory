/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UploadFile2Request extends SpeakeasyBase {
  /**
   * Uploaded file
   */
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  fileToUploadDto: shared.FileToUploadDto;

  /**
   * project's internal identifier
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=projectId",
  })
  projectId: string;
}

export class UploadFile2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  fileDto?: shared.FileDto1;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
