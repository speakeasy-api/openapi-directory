/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class FileListFromTaskRequest extends SpeakeasyBase {
  /**
   * Sets an OData $filter clause.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=$filter",
  })
  dollarFilter?: string;

  /**
   * Client API Version.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=api-version",
  })
  apiVersion: string;

  /**
   * Caller generated request identity, in the form of a GUID with no decoration such as curly braces e.g. 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0.
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=client-request-id",
  })
  clientRequestId?: string;

  /**
   * The id of the job that contains the task.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=jobId",
  })
  jobId: string;

  /**
   * Sets the maximum number of items to return in the response.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=maxresults",
  })
  maxresults?: number;

  /**
   * The time the request was issued. If not specified, this header will be automatically populated with the current system clock time.
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=ocp-date",
  })
  ocpDate?: string;

  /**
   * Sets whether to list children of a directory.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=recursive",
  })
  recursive?: boolean;

  /**
   * Specifies if the server should return the client-request-id identifier in the response.
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=return-client-request-id",
  })
  returnClientRequestId?: boolean;

  /**
   * The id of the task whose files you want to list.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=taskId",
  })
  taskId: string;

  /**
   * Sets the maximum time that the server can spend processing the request, in seconds. The default is 30 seconds.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=timeout",
  })
  timeout?: number;
}

export class FileListFromTaskResponse extends SpeakeasyBase {
  /**
   * Error from the Batch service
   */
  @SpeakeasyMetadata()
  batchError?: shared.BatchError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers?: Record<string, string[]>;

  @SpeakeasyMetadata()
  nodeFileListResult?: shared.NodeFileListResult;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
