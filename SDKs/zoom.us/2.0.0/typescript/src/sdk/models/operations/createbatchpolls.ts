import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateBatchPollsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: string;
}

export enum CreateBatchPollsApplicationJsonQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}


export class CreateBatchPollsApplicationJsonQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answers" })
  answers?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CreateBatchPollsApplicationJsonQuestionsTypeEnum;
}


export class CreateBatchPollsApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=questions", elemType: CreateBatchPollsApplicationJsonQuestions })
  questions?: CreateBatchPollsApplicationJsonQuestions[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}

export enum CreateBatchPollsMultipartFormDataQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}


export class CreateBatchPollsMultipartFormDataQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answers" })
  answers?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CreateBatchPollsMultipartFormDataQuestionsTypeEnum;
}


export class CreateBatchPollsMultipartFormData1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=questions;json=true", elemType: CreateBatchPollsMultipartFormDataQuestions })
  questions?: CreateBatchPollsMultipartFormDataQuestions[];

  @SpeakeasyMetadata({ data: "multipart_form, name=title" })
  title?: string;
}


export class CreateBatchPollsRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: CreateBatchPollsApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: CreateBatchPollsMultipartFormData1;
}

export enum CreateBatchPolls201ApplicationJsonPollsQuestionsTypeEnum {
    Single = "single",
    Multiple = "multiple"
}


export class CreateBatchPolls201ApplicationJsonPollsQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answers" })
  answers?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CreateBatchPolls201ApplicationJsonPollsQuestionsTypeEnum;
}

export enum CreateBatchPolls201ApplicationJsonPollsStatusEnum {
    Notstart = "notstart",
    Started = "started",
    Ended = "ended",
    Sharing = "sharing"
}


export class CreateBatchPolls201ApplicationJsonPolls extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=questions", elemType: CreateBatchPolls201ApplicationJsonPollsQuestions })
  questions?: CreateBatchPolls201ApplicationJsonPollsQuestions[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CreateBatchPolls201ApplicationJsonPollsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class CreateBatchPolls201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=polls", elemType: CreateBatchPolls201ApplicationJsonPolls })
  polls?: CreateBatchPolls201ApplicationJsonPolls[];
}


export class CreateBatchPollsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateBatchPollsPathParams;

  @SpeakeasyMetadata()
  request?: CreateBatchPollsRequests;
}


export class CreateBatchPollsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createBatchPolls201ApplicationJSONObject?: CreateBatchPolls201ApplicationJson;
}
