import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProxyGetExportFormatEnum {
    Csv = "csv",
    Html = "html",
    Excel = "Excel"
}


export class ProxyGetExport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConvertToCurrencies" })
  convertToCurrencies?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedById" })
  createdById?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Encrypted" })
  encrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=FileId" })
  fileId?: string;

  @SpeakeasyMetadata({ data: "json, name=Format" })
  format?: ProxyGetExportFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Query" })
  query?: string;

  @SpeakeasyMetadata({ data: "json, name=Size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=StatusReason" })
  statusReason?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedById" })
  updatedById?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDate" })
  updatedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Zip" })
  zip?: boolean;
}
