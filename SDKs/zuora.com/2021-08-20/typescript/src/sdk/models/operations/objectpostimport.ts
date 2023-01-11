import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ObjectPostImportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rejectUnknownFields" })
  rejectUnknownFields?: boolean;
}


export class ObjectPostImportHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class ObjectPostImportRequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=File" })
  file: string;

  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;
}

export enum ObjectPostImportRequestBodyImportTypeEnum {
    Usage = "Usage",
    Payment = "Payment",
    Quote = "Quote",
    TaxationDetail = "TaxationDetail",
    UpdateAccountingCode = "UpdateAccountingCode",
    CreateRevenueSchedule = "CreateRevenueSchedule",
    UpdateRevenueSchedule = "UpdateRevenueSchedule",
    DeleteRevenueSchedule = "DeleteRevenueSchedule",
    ImportFxRate = "ImportFXRate"
}


export class ObjectPostImportRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file: ObjectPostImportRequestBodyFile;

  @SpeakeasyMetadata({ data: "multipart_form, name=ImportType" })
  importType: ObjectPostImportRequestBodyImportTypeEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=Name" })
  name: string;
}


export class ObjectPostImportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ObjectPostImportQueryParams;

  @SpeakeasyMetadata()
  headers: ObjectPostImportHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: ObjectPostImportRequestBody;
}


export class ObjectPostImportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  proxyPostImport?: shared.ProxyPostImport;

  @SpeakeasyMetadata()
  proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
